# 设置

## 关于GPG
<p class='hl ins'>由于隐私问题，本网站部分内容经过GPG加密，然后以base64(短数据)或者文件链接（长的数据）的形式呈现在文章中。如果你拥有私钥或者密码，可以下载gpg文件或者base64 -d解码数据后gpg解密获得隐藏内容。所有的base64数据将以绿色显示，同时若无法将数据解密默认情况下数据会被折叠，需要点击一次才可以展开。</p>

在这里输入gpg密钥-><input id='gpg_key' class='ip' type='password' /><button style='text-indent:1em;' onclick='confirmGPG();'>确定</button>

### GPG解码示例
<p class='hl'>如果你输入的GPG密钥有效那么下列文字将可读而不是遗传base64的码：</p>
<span class='encrypt'>ece338051234f96dd0bcda9f94b1f236f29fbdc73a29ac35fb92445b502db54df39f08ea969bf243ffedd354600258fc95f010bcd5cb43203661db2fab373be973c0adf33467973bb15ec37aa2cfc57c</span>

<div class="col-md-2"><button class="btn btn-error" onclick="document.body.narn('log')">默认（log）</button></div>
<div class="col-md-2"><button class="btn btn-success" onclick="document.body.narn('success')">成功（success）</button></div>
<div class="col-md-2"><button class="btn btn-warning" onclick="document.body.narn('warn')">警告（warn）</button></div>
<div class="col-md-2"><button class="btn btn-danger" onclick="document.body.narn('error')">危险（error）</button></div>