$(function(){
	$('.artBtn a').click(function(){
		var sectorData = $(this).closest('article').attr('id');
		var ths = $(this).data('target');
		popupCode(sectorData,ths);
		//alert(sectorData);
	});
})

function popupCode(str,ths){
	var $dataID = $('#'+str);
	var chkSub = $dataID.data('role');

	if(str == 'basic'){
		common.popup({

		});
	}else if(str == 'simple'){
		common.popup({
			text : '가입이 완료되었습니다.',
		});
	}else if(str == 'normal'){
		common.popup({
			header : '알림',
			close_use : true,
			shadow : '8',
			btn_access : '확인',
			btn_cancel : '취소',
			title : '팝업의 제목',
			text : '팝업의 텍스트',
		});
	}else if(str == 'domSetup'){
		common.popup({
			dom : 'body',
			dom_dimmed : 'body'
		});
	}else if(str == 'dimmedclick'){
		common.popup({
			dimmedclick : true,
		});
	}else if(str == 'shadowSet'){
		if(chkSub == 'sub'){
			if(ths == '1'){
				common.popup({
					shadow : '1',
				});
			}else if(ths = '2'){
				common.popup({
					shadow : '8',
				});
			}
		}
	}else if(str == 'return'){
		common.popup({
			btn_access : '확인',
			btn_cancel : '취소',
			return_access : 'FN_return_access()',
			return_cancel : 'FN_return_cancel()',
			return_pop : 'FN_return_pop()',
		});
	}else if(str == 'btncolor'){
		common.popup({
			btn_access : '확인',
			btn_cancel : '취소',
			btn_access_bg : '#f00',
			btn_cancel_bg : '#ddd',
		});
	}else if(str == 'fontcolor'){
		common.popup({
			btn_access : '확인',
			btn_access_color : '#ff0',
			btn_access_border_color : '#f00',
			btn_access_border_width : '1px',
			btn_access_border_style : 'solid',
			btn_cancel : '취소',
			btn_cancel_color : '#000',
			btn_cancel_border_color : '#f0f',
			btn_cancel_border_width : '1px',
			btn_cancel_border_style : 'solid',
		});
	}else if(str == 'iconSet'){
		if(chkSub == 'sub'){
			if(ths == '1'){
				common.popup({
					icon : 'homeborder',
					icon_color : '#f00',
					title : '팝업의 제목',
					text : '팝업의 텍스트',
				});
			}else if(ths = '2'){
				common.popup({
					icon : 'http://ncgglobal.co.kr/images/ov_logo.png',
					icon_width : '160px',
					icon_height : '30px',
					title : '팝업의 제목',
					text : '팝업의 텍스트',
				});
			}
		}
	}else if(str == 'widthCustom'){
		if(chkSub == 'sub'){
			if(ths == '1'){
				common.popup({
					maxwidth:'500px',
				});
			}else if(ths = '2'){
				common.popup({
					maxwidth:'200px',
				});
			}
		}
	}else if(str == 'textsize'){
		common.popup({
			title:'샘플 title',
			title_size:'20px',
			text:'샘플 text',
			text_size:'20px',
			
			btn_access : '확인',
			btn_access_bg : '#f00',
			btn_cancel : '취소',
			btn_cancel_bg : '#ddd',
		});
	}

	console.log(str);
};

