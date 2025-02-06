import './naranja.js'

/*function narn (type) {
   naranja()[type]({
   title: '新消息提示',
   text: '单击“接受”以创建新通知',
   timeout: 'keep',
   buttons: [{
   text: '接受',
   click: function (e) {
   naranja().success({
   title: '通知',
   text: '通知被接受'
  })
 }
},{
   text: '取消',
   click: function (e) {
    e.closeNotification()
   }
  }]
  })
 }
*/

function narn(type,message,timeoutTMs,stitle){
	if(type == null)type = 'log';
	if(message == null)message = '';
	if(timeoutTMs == null)timeoutTMs = '1000';
	if(stitle == null)stitle = '';
	naranja()[type]({
		title: stitle,
		text: message,
		timeout: timeoutTMs,
		buttons:[
		{
			text:"确认",
			click: function (e){
				e.closeNotification();
			}
		}
		]
	});
}

if (typeof window !== 'undefined') {
	window.narn = narn;
}