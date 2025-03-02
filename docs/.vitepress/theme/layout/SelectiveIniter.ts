import { base } from './Data';
let timeOut = 0;

// 检测字体文件是否已加载
function checkFont(name){
	let values = document.fonts.values();
	let isHave=false;
	let item = values.next();
	while(!item.done&&!isHave)
	{
		let fontFace=item.value;
		if(fontFace.family==name)
		{
			isHave=true;
		}
		item=values.next();
	}
	return isHave;
}

// 字体加载
function loadFont(_fontName, _fontUrl) {
	if(checkFont(_fontName)) {
		console.log('已有字体：', _fontName)
		return
	}

	let prefont = new FontFace(
		_fontName,
		'url(' + _fontUrl + ')'
	);
	console.log('开始加载字体：', _fontName);

	timeOut = setTimeout(() => {
		window.narn('log','字体正在加载，请耐心等待......',1500,'字体加载中');	
	}
	, 5000);

	prefont.load().then(function (loaded_face) {
		document.fonts.add(loaded_face);
		console.log('字体加载成功', loaded_face, document.fonts);
		clearTimeout(timeOut);
	}).catch(function (error) {
		console.log('字体加载失败', error)
		clearTimeout(timeOut);
	})
}


export function initPage(page_id){
	//console.log(page_id);
	switch(page_id){
	case 'home':
		console.log("Init home page.");
		if(localStorage.inited == null || localStorage.inited == 'false'){
			window.narn('log','第一次进入网站？点我进行基础设置！','keep','Welcome!',function(){window.open('settings','_self');});
			localStorage.inited = true;
		}
		break;
	case 'settings':
		console.log("Init settings page.");
		if(localStorage.disAllowLog == null){
			localStorage.disAllowLog = 'false';
		}
		if(localStorage.disAllowWarn == null){
			localStorage.disAllowWarn = 'false';
		}
		if(localStorage.disAllowSuc == null){
			localStorage.disAllowSuc = 'false';
		}
		if(localStorage.disAllowErr == null){
			localStorage.disAllowErr = 'false';
		}
		if(localStorage.useGH == null){
			localStorage.useGH = 'false';
		}
		var ele = document.getElementById('sw_log') as HTMLInputElement | null;
		if(ele)ele.checked = localStorage.disAllowLog=='false'?true:false;
		
		ele = document.getElementById('sw_err') as HTMLInputElement | null;
		if(ele)ele.checked = localStorage.disAllowErr=='false'?true:false;
		ele = document.getElementById('sw_suc') as HTMLInputElement | null;
		if(ele)ele.checked = localStorage.disAllowSuc=='false'?true:false;
		ele = document.getElementById('sw_war') as HTMLInputElement | null;
		if(ele){
			ele.checked = localStorage.disAllowWarn=='false'?true:false;
		}
		ele = document.getElementById('sw_gh') as HTMLInputElement | null;
		if(ele){
			ele.checked = localStorage.useGH=='true'?true:false;
		}
		break;
	}
	///Generate Images
	const imgs = document.getElementsByTagName('img');
	for(let i = 0;i < imgs.length;++i){
		const obj = imgs[i] as HTMLImageElement;
		if(obj.attributes.skipProc != null)continue;
		const useCDN = localStorage.getItem('useCDN');
		let tpath = (obj.attributes.content==null || obj.attributes.content.value == "")?obj.src:obj.attributes.content.value;
		if(tpath[0] == '~'){
			tpath = base + tpath.substr(1);
		}else if(tpath[0] == '/'){
			if(localStorage.useGH == 'true')tpath = "https://raw.githubusercontent.com/aaaa0ggMC/Blog_PicBackend/main" + tpath;
			else tpath = "https://cdn.jsdelivr.net/gh/aaaa0ggMC/Blog_PicBackend@main" + tpath;
		}
		obj.src = tpath;
	}
	///load fonts
	if(localStorage.useGH == 'true'){
		loadFont('canger','https://raw.githubusercontent.com/aaaa0ggMC/Blog_PicBackend/main/fonts/canger.ttf');
	}else loadFont('canger','https://cdn.jsdelivr.net/gh/aaaa0ggMC/Blog_PicBackend@main/fonts/canger.ttf');
}