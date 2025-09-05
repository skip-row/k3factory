function paramChk(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

$(function(){
	$('._menuList a').click(function(e){
		e.preventDefault();
		var $this = $(this);
		var linkClass =$this.attr('class');
		
		innerData.locate({
			_ths : $this,
			_link : linkClass,
		});	
		
	});

	$('._goLoot').click(function(e){
		e.preventDefault();
		innerData.locate({
			_ths : $(this),
			_link : '00_info',
		});
	});

	var innerData = {
		locate : function(val){
			var _ths = val._ths;
			var _link = val._link;
			$('.bodyBox').stop().animate({'opacity':'0'},300,function(){
				$('.bodyBox').load('/pluginmaster/page/'+_link+'.php');

				if(_ths){
					_ths.attr({'status':'_active'}).siblings().attr({'status':''});
				}
				$('.bodyBox').stop().animate({'opacity':'1'},300,function(){
					if(_link == '00_info'){
						$('header').removeClass('_on');
					}
				});
			})
		}
	}


	//사이트 접속시 인덱스 지정
	//http://dotmemp.dothome.co.kr/?direct=/page/03_calendar.php
	var directUrl = paramChk('direct');
	var flag;
	if(directUrl){
		$('.bodyBox').load(directUrl);
		var chkData = directUrl.indexOf('00_info');
		if(chkData != -1){
			flag = false;
		}else{
			flag = true;
		}
	}else{
		$('.bodyBox').load('/pluginmaster/page/00_info.php');
	}

	$('body').stop().animate({'opacity':'1'},900,function(){
		if(flag){
			$('header').addClass('_on');
		}
	});
})

$('aside a').click(function(){
	var aName = $(this).attr('name');
	var target = '#'+aName;
	var scrollData = $(target).offset().top;
	if(scrollData <= '80'){
		$('html,body').animate({scrollTop:0},500);
	}else{
		$('html,body').animate({scrollTop:scrollData},500);
	}
});