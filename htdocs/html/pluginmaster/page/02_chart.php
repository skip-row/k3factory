<script src="/pluginmaster/js/common_plugin.js"></script>
<script src="/pluginmaster/js/common_page.js"></script>
<script src="/pluginmaster/js/common_chart.js"></script>

<div class="mainWrap">
	<aside>
		<p class="tit">차트</p>
		<ul>
			<li><a href="#warp" name="basic">기본설정</a></li>
			<li><a href="#warp" name="using">기본운영</a></li>
			<li><a href="#warp" name="basic"><span style="font-size:smaller;color: rgba(0,0,0,0.42);">- 맨위로 이동</span></a></li>
		</ul>
	</aside>
	<section>
		<article id="basic">
			<div class="wrapTit"><a href="#:wrap">기본설정</a></div>
			<div class="artTxt">
				기본적인 설정을 적용해주세요.
				<pre class="_code">
					1. chart.js 파일을 다운받아 적당한 위치에 업데이트 합니다.
					2. 해당 파일의 경로 import 해줍니다.
					3. 생성을 원하는 위치에 &lt;div&gt;&lt;/div&gt; 태그를 사용해 높이와 넓이를 지정해줍니다.
					4. 생성한 div 태그 안에 &lt;canvas&gt;&lt;/canvas&gt; 태그를 사용해 ID를 부여해줍니다.
				</pre>

				<pre class="_code">
					<span class="pen-y">&lt;script src="/pluginmaster/js/chart.js/Chart.min.js"&gt;&lt;/script&gt;</span>

					&lt;div class="canvasDOM" style="height:200px;width:100%;"&gt;
					&nbsp;&nbsp;&lt;<span class="pen-r">canvas</span> id="codeSample1"&gt;&lt;/canvas&gt;
					&lt;/div&gt;
					&lt;div class="canvasDOM" style="height:200px;width:100%;"&gt;
					&nbsp;&nbsp;&lt;<span class="pen-r">canvas</span> id="codeSample2"&gt;&lt;/canvas&gt;
					&lt;/div&gt;
				</pre>
			</div>
		</article>
		<article id="using">
			<div class="wrapTit"><a href="#:wrap">기본운영</a></div>
			<div class="artTxt">
				반드시 소괄호 안에 대괄호가 들어가 있는 형태로 운영되어야 합니다.
				<pre class="_code">
					common.chart({
						name : '동시접속자',
						id : 'codeSample1',
						borderColor: '#f00',
						data : '25, 42, 53, 47, 35, 64, 74, 45, 57, 54, 62, 34',
						label : '"19:32", "19:33", "19:34", "19:35", "19:36", "19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:43"',
					});

					common.chart({
						name : '동시접속자',
						id : 'codeSample2',
						borderColor: '#0f0',
						data : '21, 32, 23, 67, 25, 14, 54, 35, 37, 74, 22, 43',
						label : '"19:32", "19:33", "19:34", "19:35", "19:36", "19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:43"',
					});
				</pre>
			</div>
			<div class="sample">
				<div class="code" style="height:200px;width:100%;">
					<h5>codeSample1</h5>
					<canvas id="codeSample1"></canvas>
				</div>
				<div class="code" style="height:200px;width:100%;">
					<h5>codeSample2</h5>
					<canvas id="codeSample2"></canvas>
				</div>
			</div>

			
		</article>

	</section>
</div>

<script src="/pluginmaster/js/chart.js/Chart.min.js"></script>
<script>
	common.chart({
		name : '동시접속자',
		id : 'codeSample1',
		borderColor: '#f00',
		data : '25, 42, 53, 47, 35, 64, 74, 45, 57, 54, 62, 34',
		label : '"19:32", "19:33", "19:34", "19:35", "19:36", "19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:43"',
	});
	common.chart({
		name : '동시접속자',
		id : 'codeSample2',
		borderColor: '#0f0',
		data : '21, 32, 23, 67, 25, 14, 54, 35, 37, 74, 22, 43',
		label : '"19:32", "19:33", "19:34", "19:35", "19:36", "19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:43"',
	});

</script>