//공통 팝업 스크립트
var common = {
	video:function(val){
		console.log(val);
		const {curRegId,learnType,prsId,completeCheck} = val;
		
		//전체 DOM 생성
		const movieDom = $('<div class="movieDom"></div>');
		movieDom.append(`
			<input type="hidden" name="selCurRegId" value="">
			<input type="hidden" name="selLectId" value="">
			<input type="hidden" name="cntnUrlP" value="">
			<input type="hidden" name="selStartDt" value="">
			<input type="hidden" name="selPlayCnt" value="">
			<input type="hidden" name="selPlayCnt" value="">
			<input type="hidden" name="selDuration" value="">
		`);
		
		//내부 Wrapper 생성
		const popWrap = $('<div class="study__popup-wrap"></div>');
		
		const popWrapNav = $('<div class="_nav movieDomNav"></div>');
		popWrapNav.append(`
			<span class="_targetName"></span>
		    <span class="material-symbols-outlined">open_with</span>
		`);
		
		const popWrapHeader = $('<div class="header"></div>');
		popWrapHeader.append(`
			<img src="<c:url value='/images/egovframework/com/admin/logo.png'/>" alt="중앙환자안전센터">
            <div class="headerContent">

	            <a href="javascript:void(0)" class="popup-close"><span>창닫기</span></a>
            </div>
		`);
		
		const popWrapContent = $('<div class="content _contentTarger" data-role-type="video"></div>');
		popWrapContent.append(`
			<div class="textFrame" data-role-style="exam">여기에 문제를 써주시면 됩니다.</div>
    		<video id="video_player" autoplay="autoplay" >
    			<source type="video/mp4" src="">
    		</video>
		`);
		
		
		const popWrapBottom = $('<div class="bottom"></div>');
		popWrapBottom.append(`
			<button class="btnNextMovie _next -hide" onClick="goNextFn('+')">다음영상보기</button>
        	<button class="btnNextMovie _close -hide" onClick="goCloseFn()">학습종료하기</button>
            <a href="javascript:void(0);" class="index_open"><span>INDEX</span></a>
            <div class="bottom-inner">
                <div class="playerTooltip">
                	<div class="playerTooltipLeft">
	                	<div class="progress-wrap">
                            <input class="progressTag" disabled id="progressbar" type="range" min="0" max="100" value="0" >
		                </div>
		                <div class="time-wrap">
		                	<span class="currentTime">00:00</span> / <span class="fullTime">00:00</span>
		                </div>
	                </div>
	                <div class="playerTooltipRight">
	                	<div class="control-wrap">
		                    <a href="#" class="_videoPlay">
		                        <span class="material-symbols-outlined" style="font-size: 25px;color: #ccc;">play_circle</span>
		                    </a>
		                    <a href="#" class="_videoReplay">
		                        <span class="material-symbols-outlined" style="font-size: 21px;color: #ccc;">replay</span>
		                    </a>
		                    <a href="#" class="_videoFull">
		                        <span class="material-symbols-outlined" style="font-size: 21px;color: #ccc;">fullscreen_exit</span>
		                    </a>
		                    <span class="material-symbols-outlined volumeIcon on" style="font-size: 22px;color: #ccc;">volume_down_alt</span>
		                    <input class="volumeChange" type="range" value="25" min="0" max="100">
		                </div>
		                <div class="paging-wrap _pagingControl">
		                    <a href="#" class="prev"><span class="material-symbols-outlined">chevron_left</span></a>
		                    <p><span class="current" data-role-target="currentPage">01</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span data-role-target="maxPage">08</span></p>
		                    <a href="#" class="next"><span class="material-symbols-outlined">chevron_right</span></a>
		                </div>
	                </div>
                </div>
                
                <div class="index__list-wrap">
            		<ul class="inner" data-role-target="targetIndex">
	                </ul>
	                    {{formList}}
                    </ul>
	            	<a href="javascript:void(0);" class="index_close"><img src="<c:url value='/images/egovframework/com/admin/index_close.png'/>" alt="인덱스 닫기"></a>
        		</div>
        		<!-- index__list-wrap -->
            </div>
		`);
		
		
		
		
		
		popWrap.append(popWrapNav)
		.append(popWrapHeader)
		.append(popWrapContent)
		.append(popWrapBottom);
		
		
		
		
		/* 
		<input type="hidden" name="selCurRegId" value="">
		<input type="hidden" name="selLectId" value="">
		<input type="hidden" name="cntnUrlP" value="">
		<input type="hidden" name="selStartDt" value="">
		
		<input type="hidden" name="selPlayCnt" value="">
		<input type="hidden" name="selUpdateCnt" value="">
		<input type="hidden" name="selDuration" value="">
		*/
		
		
		
		movieDom.append(popWrap);
		$('body').append(movieDom);
		
		debugger;
		
	},
	chart:function(val){
		var dataInnerUsing = {
			type: 'line',
			data: {
				labels: ["19:32", "19:33", "19:34", "19:35", "19:36", "19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:43"],
				datasets: [{
					label: '동시접속자',
					data: [25, 42, 53, 47, 35, 64, 74, 45, 57, 54, 62, 34],
					backgroundColor: 'rgba(0, 0, 0, 0)',
					borderColor: '#f00',
					borderWidth: 2,
					pointRadius: 0,
					fill: false,
					tension: 0
				}],
				borderWidth: 2
			},
			options: {
				responsive: true,
				maintainAspectRatio: false, // DOM 사이즈에 영향을 받을 것인지
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					 enabled: false
				},
				plugins: {
					legend: {
						labels: {
						  usePointStyle: false,
						},
					}
				}
			}
		}

		var _dataID = val.id;
		var _dataname = val.name;
		var _datadata = val.data;

		var	_pointWidth = val.pointWidth;
		if(!_pointWidth) _pointWidth = 0;
		//console.log(_datadata)
		_datadata = _datadata.split(',');
		var _borderColor = val.borderColor;
		var _datalabel = val.label;
		_datalabel = _datalabel.split(',');
		var _tooltips = val.tooltips;
		if(!_tooltips) _tooltips = false;
		var _toZero = val.toZero;
		if(!_toZero) _toZero = false;


		dataInnerUsing.data.datasets[0].label = _dataname;
		dataInnerUsing.data.datasets[0].data = _datadata;
		dataInnerUsing.data.datasets[0].borderColor = _borderColor;
		dataInnerUsing.data.datasets[0].pointRadius = _pointWidth;
		dataInnerUsing.data.datasets[0].pointRadius = _pointWidth;
		dataInnerUsing.options.tooltips.enabled = _tooltips;
		dataInnerUsing.options.scales.yAxes[0].ticks.beginAtZero = _toZero;
		dataInnerUsing.data.labels = _datalabel;
		var ctxUsing = document.getElementById(_dataID).getContext('2d');
		var usingChart = new Chart(ctxUsing, dataInnerUsing)
	},
	checkAll:function(val){
		/*
		domName : '.campaign_list',
		allChecker : '.checkboxAll',
		pusChecker : '.checkboxSelect',
		allAlert_on : '버튼을 on 했습니다.',
		allAlert_off : '버튼을 off 했습니다.',
		*/

		var domName = val.domName;
		//$(''+domName+' input[type=checkbox]').click(function(){
		$(document).on("click", ''+domName+' input[type=checkbox]', function(){
			var checkData = $(this).is(':checked');

			var allChecker = val.allChecker;
			var allCheckerArr = allChecker.split('.');
			var pusChecker = val.pusChecker;
			var pusCheckerArr = pusChecker.split('.');
			var allAlert_on = val.allAlert_on;
			var allAlert_off = val.allAlert_off;
			var _returnAlertOn = val.return_allAlert_on;
			var _returnAlertOff = val.return_allAlert_off;
			var _returnAlertpus = val.pusChecker_return;

			var allIdent = $(this).hasClass(allCheckerArr[1]);
			var pusIdent = $(this).hasClass(pusCheckerArr[1]);

			if(allIdent){
				//전체일때
				if(checkData){
					$(domName).find(pusChecker).prop('checked',true).trigger('change');
					if(_returnAlertOn){
						Function('return('+_returnAlertOn+')')();
					}else{
						if(allAlert_on){
							alert(allAlert_on);
						}
					}
				}else{
					$(domName).find(pusChecker).prop('checked',false).trigger('change');
					if(_returnAlertOff){
						Function('return('+_returnAlertOff+')')();
					}else{
						if(allAlert_off){
							alert(allAlert_off);
						}
					}
				}
			}
			if(pusIdent){
				//개별일때
				var totalNum = $(domName).find(pusChecker).length;
				var checkNum = $(domName).find(pusChecker+':checked').length;

				if(_returnAlertpus){
					Function('return('+_returnAlertpus+')')();
				}

				if(totalNum == checkNum){
					if(_returnAlertOn){
						Function('return('+_returnAlertOn+')')();
					}
					$(domName).find(allChecker).prop('checked',true).trigger('change');
				}else{
					if($(domName).find(allChecker).is(':checked')){
						if(_returnAlertOff){
							Function('return('+_returnAlertOff+')')();
						}
					}
					$(domName).find(allChecker).prop('checked',false).trigger('change');
				}
			}
		});
		//checkSetup.checkAll({
		//	domName : '.vodTb',
		//	allChecker : '.checkBoxAll',
		//	pusChecker : '.checkBox',
		//});
	},

	loading:function(val){
		//common.loading({}) 로딩바 생성

		var lodingChk = $('.basicSystemLoading').length;
		if (lodingChk > 0){return false;}

		var _str = val.str;
		if(!_str){_str = 'body'}

		var cssForm = '';
		cssForm += '<div class="basicSystemLoadingCss"><style>';
		cssForm += '.basicSystemLoading {position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999;}';
		cssForm += '.basicSystemLoading .loadingDom {position: absolute;top: 50%;left: 50%;transform: translate(-50%,-55%);}';
		cssForm += '.basicSystemLoading .loaderImg {position: absolute;top: 50%;left: 50%;transform: translate(-50%,-55%);}';
		cssForm += '@media(min-width:930px){.basicSystemLoading {width: 525px;right:50%;margin-right:-500px;left:auto;transform:none;}}';
		cssForm += '@media(max-width:929px){.basicSystemLoading {width: 100%;max-width:680px;right:auto;margin-right:0;left:50%;transform:translateX(-50%);}}';

		cssForm += '</style></div>';

		var data = '';
		data += '<div class="basicSystemLoading"><div class="loadingDom">';
		//data += '<i class="loaderImg"><img src="/images/loading_img.png" width="80"></i>';
		data += '<i class="loaderImg"><img src="/images/loading.gif" width="80"></i>';
		//data += '<i class="loaderBg"><img src="/images/loading_bg.png" width="80" id="loader"></i>';
		data += '</div></div>';

		$(_str).append(cssForm);
		$(_str).append('<div class="dimmedTotal op3"></div>');
		$(_str).append(data);

	},
	loadingClose:function(val){
		//common.loadingClose({}) 로딩바 삭제
		$('.dimmedTotal,.basicSystemLoading').fadeOut(300,function(){
			$(this).remove();
			$('.basicSystemLoadingCss').remove();
		})
	},
	popup:function(val){
		var setRandom = Math.random().toString(36).substr(2,11);
		var setTarget = '_commonPop-' + setRandom;
		var setClose = '_commonClose-' + setRandom;
		
		var _pos_top = val.pos_top;
		var _pos_left = val.pos_left;
		var _pos_marginleft = val.pos_marginleft;
		var _pos_marginright = val.pos_marginright;
		var _returnPop = val.return_pop;
		var _returnAcc = val.return_access;
		var _returnAccH = val.return_access_hold;
		var _returnAccFn = val.return_access_fn;
		var _returnCan = val.return_cancel;
		var _returnCanFn = val.return_cancel_fn;
		var _dimmedclick = val.dimmedclick;
		var _popname = val.popname;
		if(!_popname){_popname = '.commonTotalPopWrap'}else{_popname = _popname.trim();};
		var _header = val.header;
		if(!_header){_header = 'noData'};
		var _zindex = val.zindex;
		var _dimzindex = val.dimzindex;
		if(!_zindex && _dimzindex){
			_zindex = 1001;
			_dimzindex = 1000;
		}else if(_zindex && !_dimzindex){
			_dimzindex = _zindex;
			_zindex = _dimzindex + 1;
		}else if(!_zindex && !_dimzindex){
			_dimzindex = 1000;
			_zindex = _dimzindex + 1;
		};

		var _cuse = val.close_use;
		var _close = val.close;
		if(!_close){_close = setClose;}
		var _shadow = val.shadow;
		if(!_shadow){_shadow = '3'};
		_shadow = '0.'+_shadow;
		var _boxshadow = val.boxshadow;
		if(!_boxshadow){_boxshadow = '3'};
		var domChk = $('body').find('.mobileDomInner').length;
		var _dom = val.dom;
		if(!_dom){
			if(domChk){ _dom = '.mobileDomInner'}
			else{ _dom = 'body'}
		};
		var _ddimmed = val.dom_dimmed;
		if(!_ddimmed){
			if(domChk){_ddimmed = '.mobileDomInner'}
			else{_ddimmed = 'body'}
		};
		var _maxwidth = val.maxwidth;
		if(!_maxwidth){_maxwidth = '300px'};
		var _btntag = val.btn_tag;
		if(!_btntag){_btntag = 'a'};
		var _btn_none = val.btn_none;
		if(!_btn_none){btn_none = false};
		var _access = val.btn_access;
		if(!_access){_access = '확인'};
		var _aclass = val.btn_access_class;
		if(!_aclass){_aclass = ''}else{_aclass = ' '+_aclass};
		var _atarget = val.btn_access_target;
		if(!_atarget){_atarget = '_self'};
		var _alink = val.btn_access_link;
		if(!_alink){_alink = '#:warp'};
		var _aonclick = val.btn_access_onclick;
		if(_aonclick){_alink = '#:warp'}else{_aonclick = '';}
		var _acolor = val.btn_access_color;
		if(!_acolor){_acolor = 'auto'};
		var _abg = val.btn_access_bg;
		if(!_abg){_abg = '#333'};
		var _abc = val.btn_access_border_color;
		if(!_abc){_abc = 'transparent'};
		var _abw = val.btn_access_border_width;
		if(!_abw){_abw = '1px'};
		var _abs = val.btn_access_border_style;
		if(!_abs){_abs = 'solid'};
		var _cancel = val.btn_cancel;
		var _cclass = val.btn_cancel_class;
		if(!_cclass){_cclass = ''}else{_cclass = ' '+_cclass};
		var _clink = val.btn_cancel_link;
		if(!_clink){_clink = '#:warp'};
		var _conclick = val.btn_cancel_onclick;
		if(_conclick){_clink = '#:warp'}else{_conclick = '';}
		var _ccolor = val.btn_cancel_color;
		if(!_ccolor){_ccolor = 'auto'};
		var _cbg = val.btn_cancel_bg;
		if(!_cbg){_cbg = 'auto'};
		var _cbc = val.btn_cancel_border_color;
		if(!_cbc){_cbc = 'transparent'};
		var _cbw = val.btn_cancel_border_width;
		if(!_cbw){_cbw = '1px'};
		var _cbs = val.btn_cancel_border_style;
		if(!_cbs){_cbs = 'solid'};
		var _title = val.title;
		var _title_size = val.title_size;
		if(!_title_size){_title_size='14px';}
		var _title_lineheight = val.title_lineheight;
		if(!_title_lineheight){_title_lineheight='14px';}
		var _text = val.text;
		var _text_size = val.text_size;
		if(!_text_size){_text_size='13px';}
		var _text_lineheight = val.text_lineheight;
		if(!_text_lineheight){_text_lineheight='13px';}
		_text = '<p class="textInner" style="font-size:'+_text_size+';line-height:'+_text_lineheight+'">'+_text+'</p>';
		var _padding_top = val.padding_top;
		if(!_padding_top){_padding_top='20px';}
		var _padding_bottom = val.padding_bottom;
		if(!_padding_bottom){_padding_bottom='20px';}
		var _icon = val.icon;
		var _icon_color = val.icon_color;
		if (!_icon_color){_icon_color = '#666';}
		var _icon_width = val.icon_width;
		if (!_icon_width){_icon_width = '24px';}
		var _icon_height = val.icon_height;
		if (!_icon_height){_icon_height = '24px';}
		

		if (val.confirm) {
			// 전역 Promise 캐시용 Map 생성
			if (!common.popupResultMap) common.popupResultMap = {};
			// btn_access, btn_cancel 강제 기본값 지정
			if (!val.btn_access) val.btn_access = '확인';
			if (!val.btn_cancel) val.btn_cancel = '취소';

			// return_xxx 함수 무효화
			_returnAcc = null;
			_returnCan = null;
			_returnAccFn = null;
			_returnCanFn = null;

			// Promise 저장
			common.popupResultMap[setRandom] = new Promise(function(resolve) {
				window['_popupResolve_' + setRandom] = resolve;
			});
		}


		var _popcustom;
		var _popcustomreturn;
		if(_popname.indexOf('#') == 0){
			_popcustom = _popname.replace('#','');
			$(_dom).append('<div id="'+_popcustom+'" class="'+setTarget+'"></div>');
			_popcustomreturn = _popcustom + 'ID';
		}else if(_popname.indexOf('.') == 0){
			_popcustom = _popname.replace('.','');
			$(_dom).append('<div class="'+_popcustom+' '+setTarget+'"></div>');
			_popcustomreturn = _popcustom + 'CLASS';
		}

		var centerPosition = '';
		if(!_pos_top && !_pos_left){centerPosition = 'transform:translate(-50%,-50%)'}
		
		if(!_pos_top){ _pos_top = '50%'; }
		if(!_pos_left){ _pos_left = '50%'; }
		
		if(!_pos_marginleft)_pos_marginleft = 'auto';
		if(!_pos_marginright)_pos_marginright = 'auto';

		var setPosition = 'top: '+_pos_top+';left:'+_pos_left+';margin-left:'+_pos_marginleft+';margin-right:'+_pos_marginright+';'+centerPosition+';'

		var _popupStyleChk = $('body').hasClass(_popcustomreturn);
		if(!_popupStyleChk){
			var cssForm = '';
			/* 공통 팝업 - 스타일이 없으면 만들어 넣음 */
			cssForm += '<style>';
			//cssForm += ''+_popname+' {position: fixed;width: 80%;max-width: '+_maxwidth+';'+setPosition+';background: #fff;border-radius:10px;overflow: hidden;z-index:2001;box-shadow:0 3px 8px rgba(0,0,0,.'+_boxshadow+');}';
			cssForm += ''+_popname+' {position: fixed;width: 80%;max-width: '+_maxwidth+';'+setPosition+';background: #fff;border-radius:10px;overflow: hidden;z-index:'+_zindex+';box-shadow:0 3px 8px rgba(0,0,0,.'+_boxshadow+');}';
			cssForm += ''+_popname+' .popHeader {height: 46px;line-height: 46px;padding:0 10px 0 15px;font-size: 18px;font-weight: 700;color: #000;border-bottom:1px solid #eee;position: relative;display: flex;align-items: center;}';
			cssForm += ''+_popname+' .popHeader .closePop {font-size: 30px;position: absolute;right: 5px;top: 10px;cursor:pointer;}';
			cssForm += ''+_popname+' .popBody {text-align: center;padding:'+_padding_top+' 0 '+_padding_bottom+';font-size: 15px;line-height: 20px;}';
			cssForm += ''+_popname+' .popBody .popIcon {padding-top:44px;background-repeat:no-repeat;background-position:top center;background-size:28px auto;font-size: 15px;}';
			cssForm += ''+_popname+' .popBody .textImg {margin-bottom: 10px;}';
			cssForm += ''+_popname+' .popBody .textArea .tit {font-weight: 700;font-size: 16px;margin-bottom: 5px;}';
			cssForm += ''+_popname+' .popBtn {}';
			cssForm += ''+_popname+' .popBtn ul {display:flex;justify-content:space-between;padding: 0;margin: 0;}';
			cssForm += ''+_popname+' .popBtn li {flex-grow:1;}';
			cssForm += ''+_popname+' .popBtn li a {display: block;height:50px;line-height: 50px;color: #fff;background: #ccc;text-align: center;font-size: 16px;box-sizing: border-box;}';
			cssForm += ''+_popname+' .popBtn li span {display: block;height:50px;line-height: 50px;color: #fff;background: #ccc;text-align: center;font-size: 16px;color: #000;}';
			cssForm += ''+_popname+' .popBtn li ._access {color: #fff;background:<%=cfgcolor1%>;}';
			cssForm += ''+_popname+' .popBtn li ._cancel {color: #000;}';
			/*
			cssForm += '@media(min-width:930px){';
			cssForm += '	.commonTotalPopWrap {width: 525px;right: 50%;margin-right: -530px;left: auto;transition:.2s all;}';
			cssForm += '}';
			cssForm += '@media(max-width:929px) and (min-width:681px){';
			cssForm += '	.commonTotalPopWrap {width: 680px;right: auto;left:50%;margin-right: 0;transform:translate(-50%,-50%);transition:.2s all;}';
			cssForm += '}';
			cssForm += '@media(max-width:680px){';
			cssForm += '	.commonTotalPopWrap {width: 100%;right: auto;left:50%;margin-right: 0;transform:translate(-50%,-50%);transition:.2s all;}';
			cssForm += '}';
			*/
			cssForm += '.dimmedTotal {position: fixed;left: 0;top: 0;right: 0;bottom: 0;background: #000;opacity:0.0;z-index:'+_dimzindex+';}'
			cssForm += '</style>';

			$('body').prepend(cssForm);
			$('body').addClass(_popcustomreturn);
		}

		var htmlForm = '';
		if(!_cuse){
			if(_header != 'noData'){
				htmlForm += '<div class="popHeader">'+_header+'</div>';
			}
		}else{
			if(_header == 'noData'){
				htmlForm += '<div class="popHeader"> <span class="material-icons closePop '+_close+'">close</span></div>';
			}else{
				htmlForm += '<div class="popHeader">'+_header+' <span class="material-icons closePop '+_close+'">close</span></div>';
			}
		}

		htmlForm += '<div class="popBody">';
		if (_icon == 'alertbg'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" height="'+_icon_height+'" width="'+_icon_width+'" fill="'+_icon_color+'" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'alertborder'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" height="'+_icon_height+'" width="'+_icon_width+'" fill="'+_icon_color+'" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg></div><div class="textArea">1111'+_text+'</div>';
		}else if (_icon == 'starbg'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" height="'+_icon_height+'" width="'+_icon_width+'" fill="'+_icon_color+'" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'starborder'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" height="'+_icon_height+'" width="'+_icon_width+'" fill="'+_icon_color+'" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'homeborder'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" width="'+_icon_width+'" height="'+_icon_height+'" fill="'+_icon_color+'" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M18,20H6V9h12V20z"/><polygon points="10,14 12,17 14,14 14,18 16,18 16,11 14,11 12,14 10,11 8,11 8,18 10,18"/></g></g></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'smile'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" width="'+_icon_width+'" height="'+_icon_height+'" viewBox="0 0 65 65"><path id="path_121" data-name="path 121" d="M0,0H65V65H0Z" fill="none"/><path id="path_122" data-name="path 122" d="M29.056,2a27.083,27.083,0,1,0,27.11,27.083A27.053,27.053,0,0,0,29.056,2Zm.027,48.75A21.667,21.667,0,1,1,50.75,29.083,21.661,21.661,0,0,1,29.083,50.75ZM31.792,23.5l2.871,2.871L37.533,23.5,40.4,26.375,43.275,23.5l-5.742-5.742Zm-11.158,0L23.5,26.375,26.375,23.5l-5.742-5.742L14.892,23.5l2.871,2.871L20.633,23.5Zm8.45,20.475A14.886,14.886,0,0,0,42.923,34.5H15.244A14.886,14.886,0,0,0,29.083,43.979Z" transform="translate(3.417 3.417)" fill="'+_icon_color+'"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'television'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" width="'+_icon_width+'" height="'+_icon_height+'" viewBox="0 0 52 52"><path id="path_164" data-name="path 164" d="M0,0H52V52H0Z" fill="none"/><path id="path_165" data-name="path 165" d="M18.333,19.333V36.667L33.5,28Zm26-8.667H27.91l7.128-7.128L33.5,2l-8.667,8.667h-.065L16.1,2l-1.5,1.538,7.107,7.128H5.333A4.346,4.346,0,0,0,1,15V41a4.346,4.346,0,0,0,4.333,4.333h39A4.346,4.346,0,0,0,48.667,41V15A4.346,4.346,0,0,0,44.333,10.667Zm0,30.333h-39V15h39Z" transform="translate(1.167 2.333)" fill="'+_icon_color+'"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'copy'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" width="'+_icon_width+'" height="'+_icon_height+'" viewBox="0 0 63.636 63.636"><path id="path_255" data-name="path 255" d="M0,0H63.636V63.636H0Z" fill="none"/><path id="path_256" data-name="path 256" d="M39.121,1H7.3A5.319,5.319,0,0,0,2,6.3V43.424H7.3V6.3H39.121Zm7.954,10.606H17.909a5.319,5.319,0,0,0-5.3,5.3V54.03a5.319,5.319,0,0,0,5.3,5.3H47.075a5.319,5.319,0,0,0,5.3-5.3V16.909A5.319,5.319,0,0,0,47.075,11.606Zm0,42.424H17.909V16.909H47.075Z" transform="translate(3.303 1.651)" fill="'+_icon_color+'"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'bellborder'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" width="'+_icon_width+'" height="'+_icon_height+'" viewBox="0 0 80 80"><path id="path_115" data-name="path 115" d="M0,0H80V80H0Z" fill="none"/><path id="path_116" fill="'+_icon_color+'" data-name="path 116" d="M33.543,63.687a6.317,6.317,0,0,0,6.322-6.276H27.222A6.317,6.317,0,0,0,33.543,63.687ZM52.508,44.861V29.171c0-9.633-5.152-17.7-14.224-19.831V7.207a4.741,4.741,0,0,0-9.482,0V9.34c-9.04,2.134-14.224,10.167-14.224,19.831V44.861L8.257,51.136v3.138H58.83V51.136ZM46.187,48H20.9V29.171c0-7.782,4.773-14.12,12.643-14.12s12.643,6.338,12.643,14.12ZM19.573,7.458l-4.52-4.487A32.642,32.642,0,0,0,2.03,27.6H8.352A26.455,26.455,0,0,1,19.573,7.458ZM58.735,27.6h6.322A32.842,32.842,0,0,0,52.034,2.971L47.546,7.458A26.61,26.61,0,0,1,58.735,27.6Z" transform="translate(6.457 7.951)"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if (_icon == 'heartborder'){
			htmlForm += '<div class="textImg"><svg xmlns="http://www.w3.org/2000/svg" width="'+_icon_width+'" height="'+_icon_height+'" viewBox="0 0 71.833 71.833"><path id="path_117" data-name="path 117" d="M0,0H71.833V71.833H0Z" fill="none"/><path id="path_118" data-name="path 118" d="M45.4,3A17.924,17.924,0,0,0,31.93,9.255,17.923,17.923,0,0,0,18.462,3,16.3,16.3,0,0,0,2,19.462C2,30.775,12.176,39.994,27.591,54l4.34,3.921,4.34-3.951c15.414-13.978,25.591-23.2,25.591-34.51A16.3,16.3,0,0,0,45.4,3ZM32.23,49.542l-.3.3-.3-.3c-14.247-12.9-23.645-21.43-23.645-30.08A10.229,10.229,0,0,1,18.462,8.986,11.7,11.7,0,0,1,29.147,16.05h5.6A11.627,11.627,0,0,1,45.4,8.986,10.229,10.229,0,0,1,55.875,19.462C55.875,28.112,46.477,36.642,32.23,49.542Z" transform="translate(3.986 5.979)" fill="'+_icon_color+'"/></svg></div><div class="textArea">'+_text+'</div>';
		}else if(_icon){
			//htmlForm += '<div class="popIcon textArea" style="background-image:url('+_icon+');font-size:'+_text_size+';line-height:'+_text_lineheight+';">'+_text+'</div>';
			if (!_icon_width){_icon_width = 'auto';}
			if (!_icon_height){_icon_height = 'auto';}
			htmlForm += '<div class="textImg"><img src="'+_icon+'" width="'+_icon_width+'" height="'+_icon_height+'" /></div><div class="textArea">'+_text+'</div>';
		}else{
			htmlForm += '<div class="textArea">'+_text+'</div>';
		}


		htmlForm += '</div>';
		htmlForm += '<div class="popBtn">';
		htmlForm += '<ul>';

		var tagCompC = '';
		var tagCompA = '';

		//_btntag
		if(_btntag == 'span'){
			if(!_returnCan){
				tagCompC = '<li><span class="_cancel '+_close+''+_cclass+'" onClick="'+_conclick+'" style="color:'+_ccolor+' !important;background:'+_cbg+' !important;border-color:'+_cbc+' !important;border-width:'+_cbw+' !important;border-style:'+_cbs+' !important;">'+_cancel+'</span></li>';
			}else{
				tagCompC = '<li><span class="_cancel '+_close+''+_cclass+'" style="color:'+_ccolor+' !important;background:'+_cbg+' !important;border-color:'+_cbc+' !important;border-width:'+_cbw+' !important;border-style:'+_cbs+' !important;">'+_cancel+'</span></li>';
			}
			if(!_returnAcc){
				tagCompA = '<li><span class="_access sitebg1 '+_close+''+_aclass+'" onClick="'+_aonclick+'" style="color:'+_acolor+' !important;background:'+_abg+' !important;border-color:'+_abc+' !important;border-width:'+_abw+' !important;border-style:'+_abs+' !important;">'+_access+'</span></li>';
			}else{
				//_returnAccH
				let holdCheck = '';
				if(!_returnAccH){
					holdCheck = _close
				}
				tagCompA = '<li><span class="_access sitebg1 '+_close+''+_aclass+'" style="color:'+_acolor+' !important;background:'+_abg+' !important;border-color:'+_abc+' !important;border-width:'+_abw+' !important;border-style:'+_abs+' !important;">'+_access+'</span></li>';
			}

		}else{
			if(!_returnCan){
				tagCompC = '<li><a class="_cancel '+_close+''+_cclass+'" href="'+_clink+'" target="'+_atarget+'" onClick="'+_conclick+'" style="color:'+_ccolor+' !important;background:'+_cbg+' !important;border-color:'+_cbc+' !important;border-width:'+_cbw+' !important;border-style:'+_cbs+' !important;">'+_cancel+'</a></li>';
			}else{
				tagCompC = '<li><a class="_cancel '+_close+''+_cclass+'" href="'+_clink+'" target="'+_atarget+'" style="color:'+_ccolor+' !important;background:'+_cbg+' !important;border-color:'+_cbc+' !important;border-width:'+_cbw+' !important;border-style:'+_cbs+' !important;">'+_cancel+'</a></li>';
			}
			if(!_returnAcc){
				tagCompA = '<li><a class="_access sitebg1 '+_close+''+_aclass+'" href="'+_alink+'" target="'+_atarget+'" onClick="'+_aonclick+'" style="color:'+_acolor+' !important;background:'+_abg+' !important;border-color:'+_abc+' !important;border-width:'+_abw+' !important;border-style:'+_abs+' !important;">'+_access+'</a></li>';
			}else{
				//_returnAccH
				let holdCheck = '';
				if(!_returnAccH){
					holdCheck = _close
				}
				tagCompA = '<li><a class="_access sitebg1 '+holdCheck+''+_aclass+'" href="'+_alink+'" target="'+_atarget+'" style="color:'+_acolor+' !important;background:'+_abg+' !important;border-color:'+_abc+' !important;border-width:'+_abw+' !important;border-style:'+_abs+' !important;">'+_access+'</a></li>';
			}
		}

		if (_cancel){
			htmlForm += tagCompC;
		}
		htmlForm += _btn_none ? '' : tagCompA;
		htmlForm += '</ul>';
		htmlForm += '</div>';

		if (_dimmedclick) {
			$(_ddimmed).append('<div class="dimmedTotal ' + setTarget + ' ' + setClose + '" style="opacity:0;"></div>');
		} else {
			$(_ddimmed).append('<div class="dimmedTotal ' + setTarget + '" style="opacity:0;"></div>');
		}

		$('.dimmedTotal').animate({'opacity':_shadow});

		if(_maxwidth){
			$(_popname + ' ' + setTarget).css({'max-width': _maxwidth});
		}

		$('.'+ setTarget +'').append(htmlForm);

		function domResize(){
			var domOffset = $(_dom).offset().left;
			var domWidth = $(_dom).width();
			domWidth = domWidth/2;
			//console.log(`domOffset ${domOffset}, domWidth ${domWidth}`);
			//$('.'+setRandom+'').css({'left':(domOffset+domWidth)+'px'});
		}
		domResize();
		$(window).resize(function(){domResize()});

		if(_title){
			_title = '<p class="tit" style="font-size:'+_title_size+';line-height:'+_title_lineheight+'">'+_title+'</p>';
			$('.textArea').prepend(_title);
		}

		if(!val.text){
			$('.textArea').find('.textInner').remove();
		}

		if (_returnAcc || val.confirm) {
			$('._access').off('click').on('click', function (e) {
				 e.preventDefault();
				if (_returnAcc && typeof _returnAcc === 'string') {
				try {
					if (_returnAcc.endsWith('()')) {
					// 함수 호출 구문인 경우
					Function('return (' + _returnAcc + ')')();
					} else if (typeof window[_returnAcc] === 'function') {
					// 함수명만 들어온 경우
					window[_returnAcc]();
					}
				} catch (e) {
					console.warn('return_access 실행 오류:', e);
				}
				}

				if (val.confirm && typeof window['_popupResolve_' + setRandom] === 'function') {
				window['_popupResolve_' + setRandom](true);
				delete window['_popupResolve_' + setRandom];
				}
			});
		}


		if(_returnAccFn){
			$('._access').click(function(){
				Function('return (' + _returnAccFn + ')')()();
			});
		}

		

		if (_returnCan || val.confirm) {
			$('._cancel').off('click').on('click', function (e) {
				 e.preventDefault();
				if (_returnCan && typeof _returnCan === 'string') {
				try {
					if (_returnCan.endsWith('()')) {
					// 함수 호출 구문인 경우
					Function('return (' + _returnCan + ')')();
					} else if (typeof window[_returnCan] === 'function') {
					// 함수명만 들어온 경우
					window[_returnCan]();
					}
				} catch (e) {
					console.warn('return_cancel 실행 오류:', e);
				}
				}

				if (val.confirm && typeof window['_popupResolve_' + setRandom] === 'function') {
				window['_popupResolve_' + setRandom](false);
				delete window['_popupResolve_' + setRandom];
				}
			});
			}

		if(_returnCanFn){
			$('._access').click(function(){
				Function('return (' + _returnCanFn + ')')()();
				return false;
			});
		}
		
		$(document).off('click', '.' + setClose).on('click', '.' + setClose, function(){
			$('.dimmedTotal.' + setTarget).animate({'opacity': 0}, 300, function(){
				$(this).remove();
				if ($('.dimmedTotal').length === 0) {
					$('body').removeClass(_popcustomreturn);
				}
			});

			$(_popname + '.' + setTarget).remove();
		});

		Function('return (' + _returnPop + ')')();
		//return setRandom;
		return val.confirm ? common.popupResultMap[setRandom] : setRandom;
	},
	calendar : function(val){
		var _submitFn = val.submit||'';

		var today = new Date();
		var date = new Date();

		var textCSS = ''
		textCSS += '<style>'
		textCSS += '	.dimmedTotal {position: fixed;left: 0;top: 0;right: 0;bottom: 0;background: #000;opacity:0.3;z-index:1000;}'
		textCSS += '	.common-calendar-container * { color: inherit; }'
		textCSS += '	.common-calendar-container { clear: both; font-family:"SEBANGGothic","NotoSans"; width: 500px; border-radius:20px; overflow:hidden; position: fixed;top: 50%; left: 50%; transform:translate(-50%,-50%); z-index:1001; background: #fff; }'
		textCSS += '	.common-calendar-container .common-calendar-header { background-color:  #3182F7; padding:20px 30px; box-sizing:border-box; margin-bottom: 14px; }'
		textCSS += '	.common-calendar-container .headerInner dl { display: flex; align-items: center; color: #fff;}'
		textCSS += '	.common-calendar-container .headerInner dl dt {font-size: 20px;}'
		textCSS += '	.common-calendar-container .headerInner dl dd {position: relative;padding-left:20px;margin-left:20px;}'
		textCSS += '	.common-calendar-container .headerInner dl dd:after {content:"";position: absolute;left: 0;top: 50%;width: 1px;height: 100%;background: #fff;transform:translateY(-50%);}'
		textCSS += '	.common-calendar-container .headerInner dl dd p._year {font-size: 20px;}'
		textCSS += '	.common-calendar-container .headerInner dl dd p._date {font-size: 28px;margin-top: 6px;}'
		textCSS += '	.common-calendar-container .headerInner dl dd p em { font-style:normal; }'
		textCSS += '	.common-calendar-container .footInner { text-align: right;padding:20px 30px 40px;font-weight: 700;}'
		textCSS += '	.common-calendar-container .footInner span {cursor:pointer;}'
		textCSS += '	.common-calendar-container .footInner span + span {margin-left:20px;}'
		textCSS += '	.common-calendar-container table {width: 100%;}'
		textCSS += '	.common-calendar-container th { height: 50px;color: #000; }'
		textCSS += '	.common-calendar-container td { text-align: center; height: 50px; width: 50px; background-color: #fff; }'
		textCSS += '	.common-calendar-container td:nth-child(7n),'
		textCSS += '	.common-calendar-container td:nth-child(7n) span{ color: #00f; }'
		textCSS += '	.common-calendar-container td:nth-child(7n - 6),'
		textCSS += '	.common-calendar-container td:nth-child(7n - 6) span{ color: #f00; }'
		textCSS += '	.common-calendar-container td span { display: inline-block; border-radius:100%; width:40px; height: 40px; line-height: 40px; cursor:pointer; }'
		textCSS += '	.common-calendar-container td.last-date span {color: #999;}'
		textCSS += '	.common-calendar-container td.current-date.colToday span {color: #fff;}'
		textCSS += '	.common-calendar-container td.next-date span {color: #999;}'
		textCSS += '	.common-calendar-container input { height: 50px; width: 100%; border: none; background-color:  transparent; font-size: 30px; color : #000;cursor:pointer;}'
		textCSS += '	.common-calendar-container .year_mon{ font-size: 18px;font-weight: 400;}'
		textCSS += '	.common-calendar-container .colToday span{ background-color: #3182F7; color:#fff; font-weight: 700;}'
		textCSS += '</style>'

		var textHTML = ''
		textHTML += '<div class="common-calendar-container">'
		textHTML += '	<div class="common-calendar-header">'
		textHTML += '		<div class="headerInner">'
		textHTML += '			<dl>'
		textHTML += '				<dt>시작일</dt>'
		textHTML += '				<dd> <p class="_year"><em></em>년</p> <p class="_date"><span class="_m"><em></em>월</span> <span class="_d"><em></em>일</span> <span class="_w">(<em></em>)</span></p> </dd>'
		textHTML += '			</dl>'
		textHTML += '		</div>'
		textHTML += '	</div>'
		textHTML += '	<table class="common-calendar-wrap" cellpadding="0" cellspacing="0">'
		textHTML += '		<thead>'
		textHTML += '			<tr> <th><input name="common-calendar-preMon" type="button" value="<"></th> <th colspan="5" class="year_mon"></th> <th><input name="common-calendar-nextMon" type="button" value=">"></th> </tr>'
		textHTML += '			<tr> <td>일</td> <td>월</td> <td>화</td> <td>수</td> <td>목</td> <td>금</td> <td>토</td> </tr>'
		textHTML += '		</thead>'
		textHTML += '		<tbody class="common-calendar-body">'
		textHTML += '		</tbody>'
		textHTML += '	</table>'
		textHTML += '	<div class="common-calendar-foot">'
		textHTML += '		<div class="footInner"> <span class="common-calendar-cancel">취소</span> <span class="common-calendar-submit">확인</span> </div>'
		textHTML += '	</div>'
		textHTML += '</div>'

		$('body').append('<div class="dimmedTotal"></div>');
		$('body').append(textCSS);
		$('body').append(textHTML);

		$('input[name=common-calendar-preMon]').off('click')
		$('input[name=common-calendar-preMon]').click(function() { // 이전달
			$('.common-calendar-wrap > tbody > td').remove();
			$('.common-calendar-wrap > tbody > tr').remove();
			today = new Date ( today.getFullYear(), today.getMonth()-1, today.getDate());
			buildCalendar();
		})

		$('input[name=common-calendar-nextMon]').click(function(){ //다음달
			$('.common-calendar-wrap > tbody > td').remove();
			$('.common-calendar-wrap > tbody > tr').remove();
			today = new Date ( today.getFullYear(), today.getMonth()+1, today.getDate());
			buildCalendar();
		})

		function dataPickSplits(val){
			var dataSplit = val.split("-");
			if(dataSplit[1].length == "1") dataSplit[1] = 0 + dataSplit[1];
			if(dataSplit[2].length == "1") dataSplit[2] = 0 + dataSplit[2];
			return dataSplit;
		}


		function dataPick(ths,val){
			var $dataTarget = ths;
			var dataSplit = val;
			var weekType = $dataTarget.data("weektype");

			$(".common-calendar-container").find("._year").find("em").text(dataSplit[0]);
			$(".common-calendar-container").find("._date").find("._m").find("em").text(dataSplit[1]);
			$(".common-calendar-container").find("._date").find("._d").find("em").text(dataSplit[2]);

			var weekTxt;
			weekType = weekType-1;
			if(weekType == "1") weekTxt = "월"
			if(weekType == "2") weekTxt = "화"
			if(weekType == "3") weekTxt = "수"
			if(weekType == "4") weekTxt = "목"
			if(weekType == "5") weekTxt = "금"
			if(weekType == "6") weekTxt = "토"
			if(weekType == "7") weekTxt = "일"

			$(".common-calendar-container").find("._date").find("._w").find("em").text(weekTxt);
		}

		function buildCalendar() {

			nowYear = today.getFullYear();
			nowMonth = today.getMonth();
			firstDate = new Date(nowYear,nowMonth,1).getDate();
			firstDay = new Date(nowYear,nowMonth,1).getDay(); //1st의 요일
			lastDate = new Date(nowYear,nowMonth+1,0).getDate();

			ealyYear = new Date(nowYear,nowMonth,0).getFullYear();
			ealyMonth = new Date(nowYear,nowMonth+1,0).getMonth(); // 지난달
			if(ealyMonth == 0) ealyMonth = 12;
			ealyMonthDay = new Date(nowYear,nowMonth,0).getDate(); // 지난달의 마지막 날
			nextYear = new Date(nowYear,nowMonth+1,0).getFullYear();
			nextMonth = nowMonth+2
				if(nextMonth > 12){
					nextYear = nextYear + 1
					nextMonth = 1
				}

			if((nowYear%4===0 && nowYear % 100 !==0) || nowYear%400===0) { //윤년 적용
				lastDate[1]=29;
			}

			$('.year_mon').text(nowYear+'년 '+(nowMonth+1)+'월');



			for (i=0; i<firstDay; i++) { //첫번째 줄 빈칸
				var ealyDay = (ealyMonthDay - (firstDay - i) + 1);
				if(i == 0){
					$('.common-calendar-wrap tbody').append('<tr></tr>');
				}
				$('.common-calendar-wrap tbody tr:last').append('<td class="last-date" data-weektype='+(i+1)+' data-full='+ealyYear+"-"+ealyMonth+"-"+ealyDay+'><span>'+ealyDay+'</span></td>');
			}
			for (i=1; i <=lastDate; i++){ // 날짜 채우기
				plusDate = new Date(nowYear,nowMonth,i).getDay();
				if (plusDate==0) {
					$('.common-calendar-wrap tbody').append('<tr></tr>');
				}
				$('.common-calendar-wrap tbody tr:last').append('<td class="current-date" data-weektype='+(plusDate + 1)+' data-full='+nowYear+"-"+(nowMonth + 1)+"-"+i+'><span>'+ i +'</span></td>');
			}

			var lastDate = $('.common-calendar-wrap > tbody td').length%7;
			if(lastDate!=0) { //마지막 줄 빈칸
				for(i=1; i<= $('.common-calendar-wrap > tbody td').length%7; i++) {
					$('.common-calendar-wrap tbody tr:last').append('<td class="next-date" data-weektype='+(lastDate + i)+' data-full='+nextYear+"-"+nextMonth+"-"+i+'><span>'+ i +'</span></td>');
				}

			}
			$('.current-date').each(function(index){ // 오늘 날짜 표시
				if(nowYear==date.getFullYear() && nowMonth==date.getMonth() && $('.current-date').eq(index).text()==date.getDate()) {
					var $dataTarget = $('.current-date').eq(index);
					$dataTarget.addClass("colToday");
					var pickDate = $dataTarget.data("full");
					dataPick($dataTarget,dataPickSplits(pickDate));

				}
			})

			$(".common-calendar-body td span").click(function(){

				var $targetTd = $(this).closest("td");

				if($targetTd.hasClass("last-date")){
					var targetData = $targetTd.data("full");
					targetData = targetData.split("-");
					$("[name='common-calendar-preMon']").click();
					$(".current-date").eq(targetData[2] - 1).find("span").click();
				}else if($targetTd.hasClass("next-date")){
				var targetData = $targetTd.data("full");
					targetData = targetData.split("-");
					$("[name='common-calendar-nextMon']").click();
					$(".current-date").eq(targetData[2] - 1).find("span").click();
				}else{
					$(".colToday").removeClass("colToday");
					$targetTd.addClass("colToday");
					dataPick($targetTd,dataPickSplits($targetTd.data("full")));
				};

				//결과값

				const resultArr = dataPickSplits($targetTd.data("full"));
				Function("return (" + _submitFn + "('"+resultArr+"'))")();
			});
		}
		buildCalendar();

		$(".common-calendar-cancel").click(function(){
			$('.common-calendar-container').remove();
			$('.dimmedTotal').remove();
		});

		$(".common-calendar-submit").click(function(){
			var $target = $(".colToday").data("full");
			if(!$target){
				alert('날짜를 선택해주세요.')
			}else{
				Function("return (" + submit(dataPickSplits($(".colToday").data("full"))) + ")")();
			}
		});

		function submit(val){
			//실행함수
			Function("return (" + _submitFn + "('"+val+"'))")();
			//console.log(val);
		}
	}
}


/*
calendar:function(val){



	var today = new Date();
	var date = new Date();

	var textCSS = ''
	textCSS += '<style>'
	textCSS += '	.dimmedTotal {position: fixed;left: 0;top: 0;right: 0;bottom: 0;background: #000;opacity:0.3;z-index:1000;}'
	textCSS += '	.common-calendar-container * { color: inherit; }'
	textCSS += '	.common-calendar-container { clear: both; font-family: "SEBANGGothic","NotoSans"; width: 500px; border-radius:20px; overflow: hidden; position: relative; z-index:1001; background: #fff; }'
	textCSS += '	.common-calendar-container .common-calendar-header { background-color:  #3182F7; padding:20px 30px; box-sizing:border-box; margin-bottom: 14px; }'
	textCSS += '	.common-calendar-container .headerInner dl { display: flex; align-items: center; color: #fff;}'
	textCSS += '	.common-calendar-container .headerInner dl dt {font-size: 20px;}'
	textCSS += '	.common-calendar-container .headerInner dl dd {position: relative;padding-left:20px;margin-left:20px;}'
	textCSS += '	.common-calendar-container .headerInner dl dd:after {content:"";position: absolute;left: 0;top: 50%;width: 1px;height: 100%;background: #fff;transform:translateY(-50%);}'
	textCSS += '	.common-calendar-container .headerInner dl dd p._year {font-size: 20px;}'
	textCSS += '	.common-calendar-container .headerInner dl dd p._date {font-size: 28px;margin-top: 6px;}'
	textCSS += '	.common-calendar-container .headerInner dl dd p em { font-style:normal; }'
	textCSS += '	.common-calendar-container .footInner { text-align: right;padding:20px 30px 40px;font-weight: 700;}'
	textCSS += '	.common-calendar-container .footInner span {cursor:pointer;}'
	textCSS += '	.common-calendar-container .footInner span + span {margin-left:20px;}'
	textCSS += '	.common-calendar-container table {width: 100%;}'
	textCSS += '	.common-calendar-container th { height: 50px;color: #000; }'
	textCSS += '	.common-calendar-container td { text-align: center; height: 50px; width: 50px; background-color: #fff; }'
	textCSS += '	.common-calendar-container td:nth-child(7n),'
	textCSS += '	.common-calendar-container td:nth-child(7n) span{ color: #00f; }'
	textCSS += '	.common-calendar-container td:nth-child(7n - 6),'
	textCSS += '	.common-calendar-container td:nth-child(7n - 6) span{ color: #f00; }'
	textCSS += '	.common-calendar-container td span { display: inline-block; border-radius:100%; width:40px; height: 40px; line-height: 40px; cursor:pointer; }'
	textCSS += '	.common-calendar-container td.last-date span {color: #999;}'
	textCSS += '	.common-calendar-container td.current-date.colToday span {color: #fff;}'
	textCSS += '	.common-calendar-container td.next-date span {color: #999;}'
	textCSS += '	.common-calendar-container input { height: 50px; width: 100%; border: none; background-color:  transparent; font-size: 30px; color : #000;cursor:pointer;}'
	textCSS += '	.common-calendar-container .year_mon{ font-size: 18px;font-weight: 400;}'
	textCSS += '	.common-calendar-container .colToday span{ background-color: #3182F7; color:#fff; font-weight: 700;}'
	textCSS += '</style>'

	var textHTML = ''
	textHTML += '<div class="common-calendar-container">'
	textHTML += '	<div class="common-calendar-header">'
	textHTML += '		<div class="headerInner">'
	textHTML += '			<dl>'
	textHTML += '				<dt>시작일</dt>'
	textHTML += '				<dd> <p class="_year"><em></em>년</p> <p class="_date"><span class="_m"><em></em>월</span> <span class="_d"><em></em>일</span> <span class="_w">(<em></em>)</span></p> </dd>'
	textHTML += '			</dl>'
	textHTML += '		</div>'
	textHTML += '	</div>'
	textHTML += '	<table class="common-calendar-wrap" cellpadding="0" cellspacing="0">'
	textHTML += '		<thead>'
	textHTML += '			<tr> <th><input name="common-calendar-preMon" type="button" value="<"></th> <th colspan="5" class="year_mon"></th> <th><input name="common-calendar-nextMon" type="button" value=">"></th> </tr>'
	textHTML += '			<tr> <td>일</td> <td>월</td> <td>화</td> <td>수</td> <td>목</td> <td>금</td> <td>토</td> </tr>'
	textHTML += '		</thead>'
	textHTML += '		<tbody class="common-calendar-body">'
	textHTML += '		</tbody>'
	textHTML += '	</table>'
	textHTML += '	<div class="common-calendar-foot">'
	textHTML += '		<div class="footInner"> <span class="common-calendar-cancel">취소</span> <span class="common-calendar-submit">확인</span> </div>'
	textHTML += '	</div>'
	textHTML += '</div>'

	$('body').append('<div class="dimmedTotal"></div>');
	$('body').append(textCSS);
	$('body').append(textHTML);

	$('input[name=common-calendar-preMon]').click(function() { // 이전달
		$('.common-calendar-wrap > tbody > td').remove();
		$('.common-calendar-wrap > tbody > tr').remove();
		today = new Date ( today.getFullYear(), today.getMonth()-1, today.getDate());
		buildCalendar();
	})

	$('input[name=common-calendar-nextMon]').click(function(){ //다음달
		$('.common-calendar-wrap > tbody > td').remove();
		$('.common-calendar-wrap > tbody > tr').remove();
		today = new Date ( today.getFullYear(), today.getMonth()+1, today.getDate());
		buildCalendar();
	})

	function dataPickSplits(val){
		var dataSplit = val.split("-");
		if(dataSplit[1].length == "1") dataSplit[1] = 0 + dataSplit[1];
		if(dataSplit[2].length == "1") dataSplit[2] = 0 + dataSplit[2];
		return dataSplit;
	}


	function dataPick(ths,val){
		var $dataTarget = ths;
		var dataSplit = val;
		var weekType = $dataTarget.data("weektype");

		$(".common-calendar-container").find("._year").find("em").text(dataSplit[0]);
		$(".common-calendar-container").find("._date").find("._m").find("em").text(dataSplit[1]);
		$(".common-calendar-container").find("._date").find("._d").find("em").text(dataSplit[2]);

		var weekTxt;
		weekType = weekType-1;
		if(weekType == "1") weekTxt = "월"
		if(weekType == "2") weekTxt = "화"
		if(weekType == "3") weekTxt = "수"
		if(weekType == "4") weekTxt = "목"
		if(weekType == "5") weekTxt = "금"
		if(weekType == "6") weekTxt = "토"
		if(weekType == "7") weekTxt = "일"

		$(".common-calendar-container").find("._date").find("._w").find("em").text(weekTxt);
	}

	function buildCalendar() {

		nowYear = today.getFullYear();
		nowMonth = today.getMonth();
		firstDate = new Date(nowYear,nowMonth,1).getDate();
		firstDay = new Date(nowYear,nowMonth,1).getDay(); //1st의 요일
		lastDate = new Date(nowYear,nowMonth+1,0).getDate();

		ealyYear = new Date(nowYear,nowMonth,0).getFullYear();
		ealyMonth = new Date(nowYear,nowMonth+1,0).getMonth(); // 지난달
		if(ealyMonth == 0) ealyMonth = 12;
		ealyMonthDay = new Date(nowYear,nowMonth,0).getDate(); // 지난달의 마지막 날
		nextYear = new Date(nowYear,nowMonth+1,0).getFullYear();
		nextMonth = nowMonth+2
			if(nextMonth > 12){
				nextYear = nextYear + 1
				nextMonth = 1
			}

		if((nowYear%4===0 && nowYear % 100 !==0) || nowYear%400===0) { //윤년 적용
			lastDate[1]=29;
		}

		$('.year_mon').text(nowYear+'년 '+(nowMonth+1)+'월');



		for (i=0; i<firstDay; i++) { //첫번째 줄 빈칸
			var ealyDay = (ealyMonthDay - (firstDay - i) + 1);
			if(i == 0){
				$('.common-calendar-wrap tbody').append('<tr></tr>');
			}
			$('.common-calendar-wrap tbody tr:last').append('<td class="last-date" data-weektype='+(i+1)+' data-full='+ealyYear+"-"+ealyMonth+"-"+ealyDay+'><span>'+ealyDay+'</span></td>');
		}
		for (i=1; i <=lastDate; i++){ // 날짜 채우기
			plusDate = new Date(nowYear,nowMonth,i).getDay();
			if (plusDate==0) {
				$('.common-calendar-wrap tbody').append('<tr></tr>');
			}
			$('.common-calendar-wrap tbody tr:last').append('<td class="current-date" data-weektype='+(plusDate + 1)+' data-full='+nowYear+"-"+(nowMonth + 1)+"-"+i+'><span>'+ i +'</span></td>');
		}

		var lastDate = $('.common-calendar-wrap > tbody td').length%7;
		if(lastDate!=0) { //마지막 줄 빈칸
			for(i=1; i<= $('.common-calendar-wrap > tbody td').length%7; i++) {
				$('.common-calendar-wrap tbody tr:last').append('<td class="next-date" data-weektype='+(lastDate + i)+' data-full='+nextYear+"-"+nextMonth+"-"+i+'><span>'+ i +'</span></td>');
			}

		}
		$('.current-date').each(function(index){ // 오늘 날짜 표시
			if(nowYear==date.getFullYear() && nowMonth==date.getMonth() && $('.current-date').eq(index).text()==date.getDate()) {
				var $dataTarget = $('.current-date').eq(index);
				$dataTarget.addClass("colToday");
				var pickDate = $dataTarget.data("full");
				dataPick($dataTarget,dataPickSplits(pickDate));

			}
		})

		$(".common-calendar-body td span").click(function(){
			var $targetTd = $(this).closest("td");
			if($targetTd.hasClass("last-date")){
				var targetData = $targetTd.data("full");
				targetData = targetData.split("-");
				$("[name='common-calendar-preMon']").click();
				$(".current-date").eq(targetData[2] - 1).find("span").click();
			}else if($targetTd.hasClass("next-date")){
				var targetData = $targetTd.data("full");
				targetData = targetData.split("-");
				$("[name='common-calendar-nextMon']").click();
				$(".current-date").eq(targetData[2] - 1).find("span").click();
			}else{
				$(".colToday").removeClass("colToday");
				$targetTd.addClass("colToday");
				dataPick($targetTd,dataPickSplits($targetTd.data("full")));
			};
		});
	}
	buildCalendar();

	$(".common-calendar-submit").click(function(){
		var $target = $(".colToday").data("full");
		if(!$target){
			alert('날짜를 선택해주세요.')
		}else{
			Function("return (" + submit(dataPickSplits($(".colToday").data("full"))) + ")")();
		}
	});



}
*/