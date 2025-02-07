import * as CryptoJS from 'crypto-js';
import $ from 'jquery'
import {initPage} from './SelectiveIniter'

// AES256 CFB encryption using Hex encoding
export function encrypt(data: string, passKey: string | null = null): string {
    const key = passKey || localStorage.getItem('enc_key');
    if (!key) {
        console.warn('No key found for encryption');
        return data;
    }

    // Convert key into WordArray
    const wordArray = CryptoJS.enc.Utf8.parse(key);

    // Generate a random IV (Initialization Vector)
    const iv = CryptoJS.lib.WordArray.random(16);

    // Encrypt using AES256 in CFB mode
    const encrypted = CryptoJS.AES.encrypt(data, wordArray, {
        iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.Pkcs7,
    });

    // Combine IV + encrypted ciphertext
    const combined = iv.concat(encrypted.ciphertext);

    // Convert to Hex (as a string)
    const hexEncoded = combined.toString(CryptoJS.enc.Hex);

    return hexEncoded;
}

// AES256 CFB decryption using Hex encoding
export function decrypt(data: string, passKey: string | null = null): string {
    const key = passKey || localStorage.getItem('gpg_key');
    if (!key) {
        console.warn('No key found for decryption');
        return data;  // Return original data if no key
    }

    try {
        // Convert Hex string back to WordArray
        const decodedData = CryptoJS.enc.Hex.parse(data);

        // Convert WordArray to Uint8Array
        const uint8Array = new Uint8Array(decodedData.words.length * 4);
        for (let i = 0; i < decodedData.words.length; i++) {
            uint8Array[i * 4] = (decodedData.words[i] >> 24) & 0xFF;
            uint8Array[i * 4 + 1] = (decodedData.words[i] >> 16) & 0xFF;
            uint8Array[i * 4 + 2] = (decodedData.words[i] >> 8) & 0xFF;
            uint8Array[i * 4 + 3] = decodedData.words[i] & 0xFF;
        }

        // Extract the IV and ciphertext (first 16 bytes are the IV)
        const iv = uint8Array.slice(0, 16); // IV is the first 16 bytes
        const ciphertext = uint8Array.slice(16); // The rest is the ciphertext

        // Convert key into WordArray
        const wordArray = CryptoJS.enc.Utf8.parse(key);

        // Decrypt the data
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: CryptoJS.enc.Hex.parse(Array.from(ciphertext).map(byte => byte.toString(16).padStart(2, '0')).join('')) },
            wordArray,
            {
                iv: CryptoJS.enc.Hex.parse(Array.from(iv).map(byte => byte.toString(16).padStart(2, '0')).join('')),
                mode: CryptoJS.mode.CFB,
                padding: CryptoJS.pad.Pkcs7,
            }
        );

        // Decode the decrypted text as UTF-8
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
        if (decryptedText) {
            return decryptedText;
        } else {
            console.warn('Decrypted data is not valid UTF-8');
            return data; // Return original data if decryption fails
        }

    } catch (error) {
        console.error('Decryption failed:', error);
        return data;  // Return original data if decryption fails
    }
}

// Initialize GPG and decrypt content on page load
export async function initGPG() {
    let interval = window.setInterval(() => {
        if($.isReady == null || !$.isReady){
			console.log('Not ready.');
			return;
		}
		///GPG 负担了不该负担的活
		{
			///初始化settings界面的toggle
			const page_id = document.getElementById('page_id') as HTMLElement | null;
			//console.log(page_id.innerHTML);
			if(page_id != null && page_id.innerHTML != null){
				initPage(page_id.innerHTML);
			}
		}
		///
		
		console.log("Ready:JQUERY State:" + $.isReady);
        clearInterval(interval);

        const gpgKey = localStorage.getItem('gpg_key');
        const target = document.getElementById('gpg_key') as HTMLInputElement | null;

        if (target && gpgKey) {
            target.value = gpgKey;
        }
		if(target){
			target.onkeyup = function(e){
				if(e.keyCode == 13){confirmGPG();narn("success","密钥更新成功",1000,"密钥设置");initGPG();}
			}
		}

        const encs = document.getElementsByClassName('encrypt');
        for (let i = 0; i < encs.length; ++i) {
            const element = encs[i] as HTMLElement;

            try {
				let hexString = "";
				if(element.decState)hexString = element.dataset.hex;
				else hexString = element.innerHTML.trim();

                // Decrypt the Hex string using AES256 CFB
                const decryptedText = decrypt(hexString); // Using decrypt here
                element.dataset.hex = hexString; // Store the Hex code

                console.log("Decrypted Text:", decryptedText); // Debugging decrypted text
                if (decryptedText === hexString) {
                    // If decryption fails, show the raw Hex code as text, not HTML
                    element.innerHTML = "(解码失败,查看Hex)";
                    element.addEventListener('click', () => {
                        element.textContent = element.dataset.hex || ''; // Show the Hex string when clicked
                    });
					element.decState = 'failed';
                } else {
                    element.innerHTML = decryptedText;
					element.decState = 'success';
				}
            } catch (error) {
                console.error('Hex 解码失败:', error);
            }
        }
    }, 100);
}

// Export functions to window object
if (typeof window !== 'undefined') {
    window.encrypt = encrypt;
    window.decrypt = decrypt;
    window.initGPG = initGPG; // Now exposed to window
    window.confirmGPG = function () {
        const target = document.getElementById('gpg_key') as HTMLInputElement | null;
        if (target) {
            localStorage.setItem('gpg_key', target.value);
            console.log('Set AES256 Key:', target.value);
        }
    };
}

// Detect if in-browser to avoid errors in GitHub Actions
if (typeof window !== 'undefined') {
    console.log('Running in browser');
} else {
    console.log('Not in browser (GitHub Actions or other environments)');
}
