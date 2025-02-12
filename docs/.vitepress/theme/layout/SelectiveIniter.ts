
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
		break;
	}
}