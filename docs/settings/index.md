# 设置

## 关于密钥
<p class='hl ins'>由于隐私问题，本网站部分内容经过密钥加密，然后以Hex8(短数据)或者文件链接（长的数据,使用GnuPG进行加密）的形式呈现在文章中。如果你拥有私钥或者密码，可以下载gpg文件gpg解密获得隐藏内容。有些hex8数据将以绿色显示，同时若无法将数据解密默认情况下数据会被折叠，需要点击一次才可以展开。</p>

在这里输入gpg密钥-><input id='gpg_key' class='ip' type='password' /><button style='text-indent:1em;' onclick='confirmGPG();narn("success","密钥更新成功",1000,"密钥设置");initGPG();'>确定</button>

### 密钥解码示例
<p class='hl'>如果你输入的密钥有效那么下列文字将可读而不是一串Hex8的码：</p>
<span class='encrypt'>7cc9a3fdea1daaca1d729edd9c6e1a389d0981ae4e36bc08fa5f6fd399097ff5c80d773652fd5676fd27b466eacf58527bc5234903b701950f30fa0344bf854f7867733370ede826880e135bb7a8aae2a6a4317a353730297703bd04e8d3ec57895d3b3fc904d75e7d333c38d0f91bd1eff2a62cf13f8f02acf9f68986063906</span>

<input class="switch switch-anim" onchange="checkSwitch(this,function(){alert(123);})" type="checkbox" checked />

<!--
<div class="col-md-2"><button class="btn btn-error" onclick="document.body.narn('log')">默认（log）</button></div>
<div class="col-md-2"><button class="btn btn-success" onclick="document.body.narn('success')">成功（success）</button></div>
<div class="col-md-2"><button class="btn btn-warning" onclick="document.body.narn('warn')">警告（warn）</button></div>
<div class="col-md-2"><button class="btn btn-danger" onclick="document.body.narn('error')">危险（error）</button></div>
-->