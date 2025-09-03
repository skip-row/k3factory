<script src="/pluginmaster/js/common_plugin.js"></script>
<script src="/pluginmaster/js/common_page.js"></script>
<script src="/pluginmaster/js/common_calendar.js"></script>
<style>
	@font-face {
		font-family: 'SEBANGGothic';
		src: url('../css/font/SEBANGGothic.eot');
		src: url('../css/font/SEBANGGothic.eot?#iefix') format('embedded-opentype'),
		url('../css/font/SEBANGGothic.woff2') format('woff2'),
		url('../css/font/SEBANGGothic.woff') format('woff'),
		url('../css/font/SEBANGGothic.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
</style>
<div class="mainWrap">
	<aside>
		<p class="tit">달력</p>
		<ul>
			<li><a href="#warp" name="basic">기본실행</a></li>
			<li><a href="#position" name="position">위치조정</a></li>
			<li><a href="#target" name="target">캘린더 고정</a></li>
			<li><a href="#chgcss" name="chgcss">CSS 변경</a></li>
			<li><a href="#API" name="API">기타 설정</a></li>
			<li><a href="#warp" name="basic"><span style="font-size:smaller;color: rgba(0,0,0,0.42);">- 맨위로 이동</span></a></li>
		</ul>
	</aside>
	<section>
		<article id="basic">
			<div class="wrapTit"><a href="#:wrap">기본설정</a></div>
			<div class="artTxt">
				캘린더 단독 함수로 실행이 가능하지만 실행함수를 함께 넣어주는걸 권장합니다.
				<pre class="_code">
					common.calendar({submit:'clickAlertFn'});

					function clickAlertFn(e){
						alert(e);
					}
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>
			<div class="artDetail">
				<p><code>submit</code> 실행함수는 인수없이 설정해주시고 함수생성시에는<focus>인수를 리턴 받을 수 있게</focus>제작해주시기 바랍니다.</p>
				<p><code>e</code> 함수의 리턴받는 인수에는<focus>YYYY.MM.DD</focus>형태의 선택한 날짜값이 출력됩니다.</p>
			</div>
		</article>

		<!--

		<article id="position">
			<div class="wrapTit"><a href="#:wrap">위치조정</a></div>
			<div class="artTxt">
				캘린더 단독 함수로 실행이 가능하지만 실행함수를 함께 넣어주는걸 권장합니다.
				<pre class="_code">
					common.calendar({submit:'clickAlertFn'});

					function clickAlertFn(e){
						alert(e);
					}
				</pre>
			</div>
			<div class="artBtn">
				<a href="#:warp">VIEW</a>
			</div>
			<div class="artDetail">
				<p><code>submit</code> 실행함수는 인수없이 설정해주시고 함수생성시에는<focus>인수를 리턴 받을 수 있게</focus>제작해주시기 바랍니다.</p>
				<p><code>e</code> 함수의 리턴받는 인수에는<focus>YYYY.MM.DD</focus>형태의 선택한 날짜값이 출력됩니다.</p>
			</div>
		</article>

		-->


	</section>
</div>
<!--
<script>
	common.calendar({
		submit:'clickFn',
	});

	function clickFn(e){
		console.log(e);
	}
</script>
-->







<script>
	
</script>
