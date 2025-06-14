# 调试界面 -- 加密解密(使用AES256-CFB Mode)

<p align='center'>密钥：<input id='db_key' class='ip' type='password' /><button style='text-indent:1em;' onclick='localStorage.debug_key = document.getElementById("db_key").value;'>确定</button>
</p>

未加密：
<textarea placeholder='这里是原始字符串' title='原始数据' id='origin' style='border: 2px dashed black;resize: both;' rows='10' cols='50'>
</textarea>

<button style='text-indent:1em;' onclick='var text = document.getElementById("origin").value;document.getElementById("encr").value = encrypt(text,localStorage.debug_key);'>↓加密</button>
<button style='text-indent:1em;' onclick='var text = document.getElementById("encr").value;var lot = decrypt(text,localStorage.debug_key);if(lot == text){document.getElementById("origin").value = "解密失败！";}else{document.getElementById("origin").value = lot;}'>↑解密</button>

加密的：
<textarea placeholder='这里是加密+hex编码的字符串' title='原始数据' id='encr' style='border: 2px dashed black;resize: both;' rows='10' cols='50'>
</textarea>


<div id='page_id'>debug.enc</div>
