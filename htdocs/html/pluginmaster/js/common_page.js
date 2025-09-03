//페이지 공통 스크립트
$('aside a').click(function(){
	var aName = $(this).attr('name');
	var target = '#'+aName;
	var scrollData = $(target).offset().top;
	if(scrollData <= '80'){
		$('html,body').stop().animate({scrollTop:0},500);
	}else{
		$('html,body').stop().animate({scrollTop:scrollData},500);
	}
});

/*
if(confirm('유저 에이전트 복사')){
	$('body').append('<button class="_clipboardCopyFiled" onClick="clipboardCopy()">복사</button>');
	$('._clipboardCopyFiled').trigger('click');
	$('._clipboardCopyFiled').remove();
}

function clipboardCopy(){
	const wid = screen.width;
	const hei = screen.height;
	const text = navigator.userAgent+'---'+wid+'X'+hei;
	const textarea = document.createElement('textarea');
	textarea.textContent = text;
	document.body.append(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
}
*/


//alert();