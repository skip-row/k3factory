function paramChk(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

/* 

var gloChkApp = '';		//어플 접속 확인

//App Check
if ( (/device=app/ig).test(navigator.userAgent) ){
	gloChkApp = 'iPhone';
} else if ( (/NINTH/ig).test(navigator.userAgent) || /webview\-type\=sub/.test(gloUserAgent) ){
	gloChkApp = 'Android';
} else {
	gloChkApp = 'MobileWeb';
}


if (gloChkApp == 'MobileWeb' && localStorage.getItem(CM_LCS_DEVICE_ID) !=null && (/iphone|ipad|ipod/ig).test(navigator.userAgent)){
	gloChkApp = 'iPhone';
}


*/



$(function(){
	$('._introList a').click(function(e){
		e.preventDefault();
		var $this = $(this);
		var linkClass = $this.attr('class');
		
		if(linkClass === '05_checkWidth'){
			alert($(window).width());
		}else if(linkClass === '06_checkDevide'){
			
			function copyToClipboardFallback(text) {
				const textarea = document.createElement("textarea");
				textarea.value = text;
				document.body.appendChild(textarea);
				textarea.select();

				try {
					document.execCommand("copy");
					alert("성공 : "+text);
				} catch (err) {
					alert("실패");
				} finally {
					document.body.removeChild(textarea);
				}
			}
			
			function copyToClipboard() {
				const userAgent = navigator.userAgent || navigator.vendor || window.opera;
			
				if (navigator.clipboard && navigator.clipboard.writeText) {
					navigator.clipboard.writeText(userAgent)
						.then(() => {
							alert("User Agent copied to clipboard!");
						})
						.catch(err => {
							console.error("Failed to copy using Clipboard API, trying fallback", err);
							copyToClipboardFallback(userAgent);
						});
				} else {
					copyToClipboardFallback(userAgent);
				}
			}
			copyToClipboard()
		}else if(linkClass === '07_resultkDevide'){
			/* 
			if(userAgent.includes("SamsungBrowser")){
				//삼성 브라우저 체크
				browserChk = '삼송';
			}else if(userAgent.includes("Safari")){
				//사파리 브라우저 체크
				browserChk = '사파리';
			}
				*/

			/* 
			function isTouchDevice() {
				return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
			}
			*/

			/*
			function getMobileDeviceInfo() {
				// 일반적인 기기 체크
				if (/android/i.test(userAgent)) {
					return ["Android Device",userAgent];
				}
				if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
					return ["iOS Device",userAgent];
				}
			
				// 기타 디바이스
				return ["Unknown Device",userAgent];
			}
			


			if('ontouchstart' in window || navigator.maxTouchPoints > 0){
				if(getMobileDeviceInfo() === 'iOS Device'){
					if(userAgent.includes("Safari")){
						alert('사파리 입니다.');
					}
				}else if(getMobileDeviceInfo() === 'iAndroid Device'){
					if(userAgent.includes("SamsungBrowser")){
						alert('삼성 브라우저입니다.');
					}
				}
			}




			*/

			/* 
			const devideName = [
				'아이폰 카카오톡',
				'아이폰 크롬',
				'아이폰 사파리',
				'아이폰 네이버',
				'아이폰 사파리',
				'디바이스 삼성 브라우저',
				'노트북 PC',
				'PC 모바일'
			]


			let dataSets = [
				'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1 KAKAOTALK/11.3.1 (INAPP)',
				'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.6778.154 Mobile/15E148 Safari/604.1',
				'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1.1 Mobile/15E148 Safari/604.1',
				'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/605.1 NAVER(inapp; search; 2000; 12.10.4; 13MINI)',
				'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1.1 Mobile/15E148 Safari/604.1',
				'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/27.0 Chrome/125.0.0.0 Mobile Safari/537.36',
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
				'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36'
			];
			

			
			let processedDataSets = dataSets.map(data => 
				data.split('/').flatMap((item, index) => [index, item])
			);
			
			processedDataSets[0][7].includes('Mobile');
			console.log(processedDataSets);

			*/

			//const devideNum = 7
			//const userAgent = dataSets[devideNum]

			const userAgent = navigator.userAgent || navigator.vendor || window.opera;

			
			let deviceData = userAgent.split('/');
			let alertText = '알수없는 디바이스';


			if(deviceData[3].includes('Mobile') && !deviceData[3].includes('Safari')){
				if(deviceData[2].includes('Version')){
					const tmpData = deviceData[deviceData.length - 1].split(' ')
					if(!tmpData[1]){
						alertText = '아이폰 사파리'
					}

				}
			}else if(deviceData[2].includes('SamsungBrowser')){
				alertText = '삼성 브라우저'
			}
			

			//alert(alertText+' / '+devideName[devideNum]);
			alert(alertText);




			


		}else{
			var _idx = $this.closest('li').index();
			$('._menuList a').eq(_idx+1).click();
			$('header').addClass('_on');
			/*
			innerData.locate({
				_ths : $this,
				_link : linkClass,
			});
			*/
		}

		

	});

	var innerData = {
		locate : function(val){
			var _ths = val._ths;
			var _link = val._link;
			$('.bodyBox').stop().animate({'opacity':'0'},300,function(){
				$('.bodyBox').load('./page/'+_link+'.php');

				if(_ths){
					_ths.attr({'status':'_active'}).siblings().attr({'status':''});
				}
				$('.bodyBox').stop().animate({'opacity':'1'},300,function(){
					if(_link == '00_info'){
						$('header').removeClass('_on');
					}else{
						$('header').addClass('_on');
					}
				});
			})
		}
	}


	$('._listScript').click(()=>{
		$('._targetList').toggleClass('_on');
	});





});