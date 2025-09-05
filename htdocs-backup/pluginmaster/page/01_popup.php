<script src="/pluginmaster/js/common_plugin.js"></script>
<script src="/pluginmaster/js/common_page.js"></script>
<script src="/pluginmaster/js/common_popup.js"></script>

<div class="mainWrap">
	<aside>
		<p class="tit">팝업</p>
		<ul>
			<li><a href="#warp" name="basic">기본설정</a></li>
			<li><a href="#simple" name="simple">간단 텍스트</a></li>
			<li><a href="#normal" name="normal">일반적인 사용</a></li>
			<li><a href="#domSetup" name="domSetup">DOM 설정</a></li>
			<li><a href="#dimmedclick" name="dimmedclick">배경클릭 닫기</a></li>
			<li><a href="#shadowSet" name="shadowSet">그림자 투명도 조절</a></li>
			<li><a href="#return" name="return">리턴값 사용</a></li>
			<li><a href="#btncolor" name="btncolor">버튼 배경 색상</a></li>
			<li><a href="#fontcolor" name="fontcolor">버튼 스타일</a></li>
			<li><a href="#iconSet" name="iconSet">아이콘 설정</a></li>
			<li><a href="#widthCustom" name="widthCustom">넓이 변경</a></li>
			<li><a href="#warp" name="basic"><span style="font-size:smaller;color: rgba(0,0,0,0.42);">- 맨위로 이동</span></a></li>
		</ul>
	</aside>
	<section>
		<article id="basic">
			<div class="wrapTit"><a href="#:wrap">기본설정</a></div>
			<div class="artTxt">
				반드시 소괄호 안에 대괄호가 들어가 있는 형태로 운영되어야 합니다.
				<pre class="_code">
					common.popup({});
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>
		</article>



		<article id="simple">
			<div class="wrapTit"><a href="#:wrap">간단 텍스트</a></div>
			<div class="artTxt">
				간단한 문구를 넣은 팝업은 <code>text</code> 요소를 사용합니다.
				<pre class="_code">
					common.popup({
						text : '가입이 완료되었습니다.',
					});
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>
		</article>

		<article id="normal">
			<div class="wrapTit"><a href="#:wrap">일반적인 사용</a></div>
			<div class="artTxt">
				일반적으로 아래 옵션을 통해 간단하게 팝업을 만들 수 있습니다.
				<pre class="_code">
					common.popup({
						header : '알림',
						close_use : true, // 닫기(X)버튼 유무 안쓰면 false.
						shadow : '8',
						btn_access : '확인',
						btn_cancel : '취소',
						title : '팝업의 제목',
						text : '팝업의 텍스트',
					});
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>

			<div class="artDetail">
				<p><code>header</code> 옵션은 팝업의 이름에 해당합니다. 해당속성을 사용하지 않을 경우 타이틀 영역은 빈 값으로 출력됩니다.</p>
				<p><code>close_use</code> 옵션은 닫기 태그를 사용할지 유무를 결정합니다. 해당 속성의 <focus>디폴트값은 false</focus> 입니다.</p>
				<p><code>shadow</code> dimmed 처리의 어두운 정도를 결정합니다. <focus>없애려면 0</focus>을 넣으면 됩니다.</p>
				<p><code>btn_access</code> 옵션은 <focus>확인</focus> 문구를 결정합니다. 자세한 옵션은 <a href="#:warp">상세옵션</a>을 통해 확인 해주시기 바랍니다.</p>
				<p><code>btn_cancel</code> 옵션은 <focus>취소</focus> 문구를 결정합니다. 자세한 옵션은 <a href="#:warp">상세옵션</a>을 통해 확인 해주시기 바랍니다.</p>
				<p><code>title</code> 옵션은 팝업 바디 영역의 <focus>제목</focus> 글자 입니다.</p>
				<p><code>text</code> 옵션은 팝업 바디 영역의 <focus>택스트</focus> 글자 입니다.</p>
			</div>
		</article>

		<article id="domSetup">
			<div class="wrapTit"><a href="#:wrap">DOM 설정</a></div>
			<div class="artTxt">
				팝업과 출력될 DIMMED의 위치를 설정할 수 있습니다.
				<pre class="_code">
					common.popup({
						dom : 'body',
						dom_dimmed : 'body'
					});
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>
			<div class="artDetail">
				<p><code>dom</code> 팝업이<focus>생성될 위치</focus>를 지정합니다. 기본적으로 해당 기능을 설정하지 않아도 되지만 이 타겟을 중심으로 팝업의 위치값이 조절되므로 <focus>되도록 입력하는걸 권장</focus>합니다.</p>
				<p><code>dom</code> DIMMED가<focus>생성될 위치</focus>를 지정합니다.</p>
			</div>
		</article>

		<article id="dimmedclick">
			<div class="wrapTit"><a href="#:wrap">배경클릭 닫기</a></div>
			<div class="artTxt">
				배경을 클릭하여 팝업을 닫을 수 있습니다.
				<pre class="_code">
					common.popup({
						dimmedclick : <span class="pen-y">true</span>,
					});
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>
			<div class="artDetail">
				<p><code>dimmedclick</code> <focus>기본값은 false</focus>입니다.</p>
			</div>
		</article>

		<article id="shadowSet" data-role="sub">
			<div class="wrapTit"><a href="#:wrap">그림자 투명도 조절</a></div>
			
			<div class="innerParty">
				<div class="artTxt">
					팝업의 넓이를 변경할 수 있습니다.
					<pre class="_code">
						common.popup({
							shadow : '<span class="pen-y">1</span>',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp" data-target="1">VIEW</a>
				</div>
				<div class="artTxt">
					<pre class="_code">
						common.popup({
							shadow : '<span class="pen-y">8</span>',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp" data-target="2">VIEW</a>
				</div>
				<div class="artDetail">
					<p><code>maxwidth</code> 넓이는 <focus>최대넓이만 설정이 가능</focus>합니다. 좌우 폭이 설정보다 적은 페이지에서는 설정값이 무시 됩니다.</p>
				</div>
			</div>
		</article>

		<article id="return">
			<div class="wrapTit"><a href="#:wrap">리턴 값 사용</a></div>
			
			<div class="innerParty">
				<div class="artTxt">
					확인버튼과 취소버튼에 함수를 넣을 수 있습니다.
					<pre class="_code">
						common.popup({
							btn_access : '확인',
							return_access : 'FN_return_access()',
							btn_cancel : '취소',
							return_cancel : 'FN_return_cancel()',
							return_pop : 'FN_return_pop()'
						});

						function FN_return_access(){
							alert('확인 클릭 시 실행');
						}
						function FN_return_cancel(){
							alert('취소 클릭 시 실행');
						}
						function FN_return_pop(){
							alert('팝업 생성 시 실행');
						}
					</pre>
					<script>
						function FN_return_access(){
							alert('확인 클릭 시 실행');
						}
						function FN_return_cancel(){
							alert('취소 클릭 시 실행');
						}
						function FN_return_pop(){
							alert('팝업 생성 시 실행');
						}
					</script>
				</div>
				<div class="artBtn">
					<a href="#:warp">VIEW</a>
				</div>
				<div class="artDetail">
					<p><code>return_access</code> <focus>확인</focus> 버튼 클릭시 해당 함수가 실행됩니다. 해당 함수 실행시 <focus>onclick 기능은 제거</focus> 됩니다.</p>
					<p><code>return_cancel</code> <focus>취소</focus> 버튼 클릭시 해당 함수가 실행됩니다. 해당 함수 실행시 <focus>onclick 기능은 제거</focus> 됩니다.</p>
					<p><code>return_pop</code> 팝업이 생성될때 해당 함수가 실행됩니다.</p>
				</div>
			</div>
		</article>

		<article id="textsize">
			<div class="wrapTit"><a href="#:wrap">글자크기 변경</a></div>
			
			<div class="innerParty">
				<div class="artTxt">
					title 글자와 text 글자의 사이즈를 변경할 수 있습니다.
					<pre class="_code">
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
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp">VIEW</a>
				</div>
				<div class="artDetail">
					<p><code>title_size</code> <focus>title</focus> 글자 크기.</p>
					<p><code>text_size</code> <focus>text</focus> 글자 크기.</p>
					
				</div>
			</div>
		</article>

		<article id="btncolor">
			<div class="wrapTit"><a href="#:wrap">버튼 배경 색상</a></div>
			
			<div class="innerParty">
				<div class="artTxt">
					확인버튼과 취소버튼에 배경색상을 넣을 수 있습니다.
					<pre class="_code">
						common.popup({
							btn_access : '확인',
							btn_access_bg : '#f00',
							btn_cancel : '취소',
							btn_cancel_bg : '#ddd',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp">VIEW</a>
				</div>
				<div class="artDetail">
					<p><code>btn_access_bg</code> <focus>확인</focus> 버튼 배경색상.</p>
					<p><code>btn_cancel_bg</code> <focus>취소</focus> 버튼 배경색상.</p>
					
				</div>
			</div>
		</article>

		<article id="fontcolor">
			<div class="wrapTit"><a href="#:wrap">버튼 스타일</a></div>
			
			<div class="innerParty">
				<div class="artTxt">
					확인버튼과 취소버튼에 텍스트 스타일을 적용할 수 있었습니다.
					<pre class="_code">
						common.popup({
							btn_access : '확인',
							btn_access_color : '#ff0',
							btn_access_border_color : '#ff0',
							btn_access_border_width : '1px',
							btn_access_border_style : 'solid',
							btn_cancel : '취소',
							btn_cancel_color : '#000',
							btn_cancel_border_color : '#f0f',
							btn_cancel_border_width : '1px',
							btn_cancel_border_style : 'solid',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp">VIEW</a>
				</div>
				<div class="artDetail">
					<p><code>btn_access_color</code> <focus>확인</focus> 버튼의 글자 색을 변경합니다.</p>
					<p><code>btn_access_border_color</code> <focus>확인</focus> 버튼의 보더 색상을 변경합니다.</p>
					<p><code>btn_access_border_width</code> <focus>확인</focus> 버튼의 보더 굵기를 변경합니다.</p>
					<p><code>btn_access_border_style</code> <focus>확인</focus> 버튼의 보더 스타일을 변경합니다.
					
					<p><code>btn_cancel_color</code> <focus>취소</focus> 버튼의 글자 색을 변경합니다.</p>
					<p><code>btn_cancel_border_color</code> <focus>취소</focus> 버튼의 보더 색상을 변경합니다.</p>
					<p><code>btn_cancel_border_width</code> <focus>취소</focus> 버튼의 보더 굵기를 변경합니다.</p>
					<p><code>btn_cancel_border_style</code> <focus>취소</focus> 버튼의 보더 스타일을 변경합니다.</p>
				</div>
			</div>
		</article>

		<article id="iconSet" data-role="sub">
			<div class="wrapTit"><a href="#:wrap">아이콘 설정</a></div>
			<div class="innerParty">
				<div class="artTxt">
					팝업의 아이콘을 설정할 수 있습니다.
					<pre class="_code">
						common.popup({
							icon : 'alertbg',
							icon_color : '#f00',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp" data-target="1">VIEW</a>
				</div>
				
				<div class="artDetail">
					<p><code>icon</code> 아이콘의 <focus>키값</focus>을 통해 아이콘을 불러올 수 있습니다.</p>
					<p><code>icon_color</code> 키값을 통해 불러온 <focus>아이콘의 색상</focus>을 변경할 수 있습니다.</p>
				</div>
				
				<div class="artDetail">
					<div class="iconWrap">
						<ul>
							<li>
								<h1>alertbg</h1>
								<p><img src="/pluginmaster/images/svg/warning-b.svg" alt=""></p>
							</li>
							<li>
								<h1>alertborder</h1>
								<p><img src="/pluginmaster/images/svg/warning_border-b.svg" alt=""></p>
							</li>
							<li>
								<h1>starbg</h1>
								<p><img src="/pluginmaster/images/svg/foot_float_star-b.svg" alt=""></p>
							</li>
							<li>
								<h1>starborder</h1>
								<p><img src="/pluginmaster/images/svg/foot_float_star-w.svg" alt=""></p>
							</li>
							<li>
								<h1>homeborder</h1>
								<p><img src="/pluginmaster/images/svg/foot_float_minishop.svg" alt=""></p>
							</li>
							<li>
								<h1>smile</h1>
								<p><img src="/pluginmaster/images/svg/status_solution_empty-b.svg" alt=""></p>
							</li>
							<li>
								<h1>television</h1>
								<p><img src="/pluginmaster/images/svg/status_solution_live-b.svg" alt=""></p>
							</li>
							<li>
								<h1>copy</h1>
								<p><img src="/pluginmaster/images/svg/status_solution_copy-000.svg" alt=""></p>
							</li>
							<li>
								<h1>bellborder</h1>
								<p><img src="/pluginmaster/images/svg/status_solution_bellborder-000.svg" alt=""></p>
							</li>
							<li>
								<h1>heartborder</h1>
								<p><img src="/pluginmaster/images/svg/status_solution_heartborder-000.svg" alt=""></p>
							</li>
						</ul>
					</div>
				</div>

				
				<div class="artTxt">
					팝업의 아이콘을 설정할 수 있습니다.
					<pre class="_code">
						common.popup({
							icon : '/images/svg/warning-b.svg',
							icon_width : '24px',
							icon_heght : '24px',
						});
					</pre>
				</div>
				<div class="artDetail">
					<p><code>icon</code> 아이콘의 <focus>경로</focus>를 지정할 수 있습니다.</p>
					<p><code>icon_width</code> 경로를 지정한 아이콘의 <focus>넓이</focus>를 조절할 수 있습니다.</p>
					<p><code>icon_heght</code> 경로를 지정한 아이콘의 <focus>높이</focus>를 조절할 수 있습니다.</p>
				</div>

				<div class="artBtn">
					<a href="#:warp" data-target="2">VIEW</a>
				</div>


				
			</div>
		</article>

		<article id="widthCustom" data-role="sub">
			<div class="wrapTit"><a href="#:wrap">넓이 변경</a></div>
			
			<div class="innerParty">
				<div class="artTxt">
					팝업의 넓이를 변경할 수 있습니다.
					<pre class="_code">
						common.popup({
							maxwidth:'<span class="pen-y">500px</span>',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp" data-target="1">VIEW</a>
				</div>
				<div class="artTxt">
					<pre class="_code">
						common.popup({
							maxwidth:'<span class="pen-y">200px</span>',
						});
					</pre>
				</div>
				<div class="artBtn">
					<a href="#:warp" data-target="2">VIEW</a>
				</div>
				<div class="artDetail">
					<p><code>maxwidth</code> 넓이는 <focus>최대넓이만 설정이 가능</focus>합니다. 좌우 폭이 설정보다 적은 페이지에서는 설정값이 무시 됩니다.</p>
				</div>
			</div>
		</article>

	</section>
</div>