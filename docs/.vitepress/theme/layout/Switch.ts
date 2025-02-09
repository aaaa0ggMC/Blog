if(typeof window != 'undefined'){
	window.checkSwitch = 
	function(tg,onchek,onuchek){
		if(tg.checked){
			if(onchek)onchek();
		}else{
			if(onuchek)onuchek();
		}
		return tg.checked?true:false;
	}
}