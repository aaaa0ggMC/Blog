import * as CryptoJS from 'crypto-js';
import Base64 from 'base64-js';

// Ensure OpenPGP is initialized
export async function initGPG() {
    let interval = window.setInterval(() => {
        console.log("Ready");
        clearInterval(interval);

        const gpgKey = localStorage.getItem('gpg_key');
        const target = document.getElementById('gpg_key') as HTMLInputElement | null;

        if (target && gpgKey) {
            target.value = gpgKey;
        }

        const encs = document.getElementsByClassName('encrypt');
        for (let i = 0; i < encs.length; ++i) {
            const element = encs[i] as HTMLElement;

            try {
                let base64String = element.innerHTML.trim();

                // Remove non-Base64 characters (if any)
                base64String = base64String.replace(/[^A-Za-z0-9+/=]/g, '');

                // Ensure the Base64 string is properly padded to a multiple of 4
                base64String = base64String.padEnd(base64String.length + (4 - base64String.length % 4) % 4, '=');

                // Decode the Base64 string into a byte array (Uint8Array)
                const decoded = Base64.toByteArray(base64String);
                console.log("Decoded Byte Array:", decoded); // Debugging the decoded data

                decryptWithAES256CFB(decoded, element);
            } catch (error) {
                console.error('Base64 解码失败:', error);
                // Show the raw Base64 code as text, not HTML
                element.textContent = base64String; // Use textContent instead of innerHTML
                element.addEventListener('click', () => {
                    element.textContent = element.dataset.base64 || ''; // Show the Base64 string when clicked
                });
                element.dataset.base64 = base64String; // Store the base64 code
            }
        }
    }, 100);
}

// Use CryptoJS to decrypt the message with AES256.CFB
function decryptWithAES256CFB(encryptedData: Uint8Array, element: HTMLElement) {
    const secretKey = localStorage.getItem('gpg_key'); // This is your AES256 key (passphrase)
    if (!secretKey) {
        console.warn('No secret key found in localStorage');
        return;
    }

    try {
        // Convert the secret key into a WordArray using CryptoJS
        const wordArray = CryptoJS.enc.Utf8.parse(secretKey);
        console.log("WordArray from secret key:", wordArray); // Debugging the secret key as a WordArray
        
        // AES CFB requires an IV (Initialization Vector) to be used alongside the key.
        // Here, I'm assuming the first block of the encrypted data could be the IV. 
        const iv = encryptedData.slice(0, 16); // Assuming IV is the first 16 bytes
        const ciphertext = encryptedData.slice(16); // The rest is the actual ciphertext

        console.log("IV:", iv); // Debugging IV
        console.log("Ciphertext:", ciphertext); // Debugging ciphertext

        // Convert IV and ciphertext into WordArrays
        const ivWordArray = CryptoJS.enc.Hex.parse(Array.from(iv).map(byte => byte.toString(16).padStart(2, '0')).join(''));
        const ciphertextWordArray = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Hex.parse(Array.from(ciphertext).map(byte => byte.toString(16).padStart(2, '0')).join(''))
        });

        // Decrypt the data with AES256.CFB mode using CryptoJS
        const decrypted = CryptoJS.AES.decrypt(
            ciphertextWordArray,
            wordArray, // The secret key
            {
                iv: ivWordArray, // The IV for CFB mode
                mode: CryptoJS.mode.CFB, // Set the AES mode to CFB
                padding: CryptoJS.pad.Pkcs7, // Ensure padding is handled correctly
            }
        );

        // Debugging output: check decrypted data in hex format
        const decryptedHex = decrypted.toString(CryptoJS.enc.Hex);
        console.log("Decrypted data in Hex:", decryptedHex);

        // Try to decode it as UTF-8 only if it's valid
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
        if (decryptedText) {
            console.log("Decrypted Text:", decryptedText); // Debugging decrypted text
            element.innerHTML = decryptedText;
        } else {
            console.warn("Decrypted data is not valid UTF-8");
            element.innerHTML = 'Decryption failed or not UTF-8 data';
        }

    } catch (error) {
        console.error('AES256.CFB 解密失败:', error);
        // If decryption fails, display the Base64
        element.addEventListener('click', () => {
            element.innerHTML = element.dataset.base64 || '';
        });
        element.dataset.base64 = encryptedData;
        element.innerHTML = '查看Base64';
    }
}

// Bind the confirmGPG function to document.body
(window as any).confirmGPG = function () {
    const target = document.getElementById('gpg_key') as HTMLInputElement | null;
    if (target) {
        localStorage.setItem('gpg_key', target.value);
        console.log('Set AES256 Key:', target.value);
    }
};
