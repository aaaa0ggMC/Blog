# 设置

## 密钥设置
<p class='hl ins'>由于隐私问题，本网站部分内容经过密钥加密，然后以Hex8(短数据)或者文件链接（长的数据,使用GnuPG进行加密）的形式呈现在文章中。如果你拥有私钥或者密码，可以下载gpg文件gpg解密获得隐藏内容。有些hex8数据将以绿色显示，同时若无法将数据解密默认情况下数据会被折叠，需要点击一次才可以展开。</p>

### 教师密钥： 给老师看的
在这里输入密钥-><input id='teacher_key' class='ip' type='password' /><button style='text-indent:1em;' onclick='confirmGPG();narn("success","密钥更新成功",1000,"密钥设置");initGPG();'>确定</button>

### 普通密钥：给我认为比较安全（对我自身安全）的人的key
在这里输入密钥-><input id='gpg_key' class='ip' type='password' /><button style='text-indent:1em;' onclick='confirmGPG();narn("success","密钥更新成功",1000,"密钥设置");initGPG();'>确定</button>

### 更加隐私的SecKey: 一般只有我自己知道
[Prompt: BlOg ]<br>
在这里输入密钥-><input id='sec_key' class='ip' type='password' /><button style='text-indent:1em;' onclick='confirmGPG();narn("success","密钥更新成功",1000,"密钥设置");initGPG();'>确定</button>

### 密钥解码示例
<p class='hl'>教师密钥测试：</p>
<span class='eteacher' fallback='测试失败，不能浏览比较敏感的东西' >90af9b057e84d0e7dbc4a84fdc02ed9b2ae7e8d4667a412b0e714332cdd49d6f12650902a337b111c0fbc4eb9ad5b246</span>

<p class='hl'>如果你输入的密钥有效那么下列文字恭喜你：</p>
<span class='encrypt' fallback='很可惜，你对网站的了解深度最高也只有40%了，你将无法查看我提及的人的真实名字、我的学校、地址......' >7cc9a3fdea1daaca1d729edd9c6e1a389d0981ae4e36bc08fa5f6fd399097ff5c80d773652fd5676fd27b466eacf58527bc5234903b701950f30fa0344bf854f7867733370ede826880e135bb7a8aae2a6a4317a353730297703bd04e8d3ec57895d3b3fc904d75e7d333c38d0f91bd1eff2a62cf13f8f02acf9f68986063906</span>

<p class='hl'>以下是使用更加隐私的密钥进行解码：</p>
<span class='encpp' fallback='很可惜，你对网站的了解深度还不能达到最深。你将不会了解到我藏起来的东西。Only my hull.' >334d827e8b8d5e276a9e5a97650b90655db693f4063beafb3189644983ea52b37967992183ab953222dd9659214a7349f791570abc6a4a6a11a09d3220e2e35468432ad836a3135dba8193922da9440021e49356689ead07c0db1faf8444b5ddeba6c62caaa349f678a65380f1526b0833ccd8e983cb427f23c6cef5d87b0c721362343e5a99bb6a5b1f4ae19ed04d3a7ce64eb3822c613175a10eaf17c7290b</span>


## 通知设置（右下角弹窗）
允许"LOG"级别显示<span style='cursor:pointer;' class='ps' onclick='narn("log","测试")'>测试</span><span><input id='sw_log' class="switch switch-anim" onchange="var fn = function(){narn('success','设置成功');};localStorage.disAllowLog = !checkSwitch(this,fn,fn)" type="checkbox" /></span>
<br>
允许"WARN"级别显示<span style='cursor:pointer;' class='ps' onclick='narn("warn","测试")'>测试</span><span><input id='sw_war' class="switch switch-anim" onchange="var fn = function(){narn('success','设置成功');};localStorage.disAllowWarn = !checkSwitch(this,fn,fn)" type="checkbox" /></span>
<br>
允许"SUCCESS"级别显示<span style='cursor:pointer;' class='ps' onclick='narn("success","测试")'>测试</span><span><input id='sw_suc' class="switch switch-anim" onchange="var fn = function(){narn('success','设置成功');};localStorage.disAllowSuc = !checkSwitch(this,fn,fn)" type="checkbox" /></span>
<br>
允许"ERROR"级别显示<span style='cursor:pointer;' class='ps' onclick='narn("error","测试")'>测试</span><span><input id='sw_err' class="switch switch-anim" onchange="var fn = function(){narn('success','设置成功');};localStorage.disAllowErr = !checkSwitch(this,fn,fn)" type="checkbox" /></span>
<br>

## 数据代理
是否使用Github源数据？（默认使用jsDelivrCDN）<br>
<span><input id='sw_gh' class="switch switch-anim" onchange="var fn = function(){narn('success','设置成功');};localStorage.useGH = checkSwitch(this,fn,fn)" type="checkbox" /></span>

### 自定义代理地址
一般用于调试，优先级大于JsDeliver小于Github
<input id='usdf' class='ip' type='text' /><button style='text-indent:1em;' onclick='localStorage.userDef = document.getElementById("usdf").value;narn("success","地址更新成功",1000,"代理地址设置");'>确定</button>


<div id='page_id'>settings</div>
