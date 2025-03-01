import { base } from './Data';

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
}