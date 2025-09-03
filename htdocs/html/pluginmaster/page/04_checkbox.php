<script src="/pluginmaster/js/common_plugin.js"></script>
<script src="/pluginmaster/js/common_page.js"></script>

<div class="mainWrap">
	<aside>
		<p class="tit">체크박스</p>
		<ul>
			<li><a href="#warp" name="basic">기본설정</a></li>
			<li><a href="#warp" name="alert">알럿설정</a></li>
			<li><a href="#warp" name="return">알럿설정</a></li>
			<li><a href="#warp" name="basic"><span style="font-size:smaller;color: rgba(0,0,0,0.42);">- 맨위로 이동</span></a></li>
		</ul>
	</aside>
	<section>
		<article id="basic">
			<div class="wrapTit"><a href="#:wrap">기본설정</a></div>
			<div class="artTxt">
				반드시 소괄호 안에 대괄호가 들어가 있는 형태로 운영되어야 합니다.
				<pre class="_code">
					common.checkAll({
						domName : '.chkDOM',
						allChecker : '.checkBoxAll',
						pusChecker : '.checkBox',
						allAlert_on : '',
						allAlert_off : ''
					});
				</pre>
			</div>
			<div class="sample">
				<pre class="_code">
					&lt;div class="chkDOM"&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBoxAll"&gt;전체 체크&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox"&gt;개별 체크1&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox"&gt;개별 체크2&lt;/p&gt;
					&lt;/div&gt;
				</pre>
				<div class="code">
					<div class="chkDOM">
						<p><input type="checkbox" name="" id="" class="checkBoxAll">전체 체크</p>
						<p><input type="checkbox" name="" id="" class="checkBox">개별 체크1</p>
						<p><input type="checkbox" name="" id="" class="checkBox">개별 체크2</p>
					</div>
				</div>
			</div>

			
		</article>

		<article id="alert">
			<div class="wrapTit"><a href="#:wrap">알럿설정</a></div>
			<div class="artTxt">
				전체 선택이 되었을때와 전체 선택이 해제될때 각각 알럿을 설정할 수 있습니다.
				<pre class="_code">
					common.checkAll({
						domName : '.chkDOM1',
						allChecker : '.checkBoxAll1',
						pusChecker : '.checkBox1',
						allAlert_on : '전체선택',
						allAlert_off : '전체선택 끝'
					});
				</pre>
			</div>
			<div class="sample">
				<pre class="_code">
					&lt;div class="chkDOM"&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBoxAll1"&gt;전체 체크&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox1"&gt;개별 체크1&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox1"&gt;개별 체크2&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox1"&gt;개별 체크2&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox1"&gt;개별 체크2&lt;/p&gt;
					&lt;/div&gt;
				</pre>
				<div class="code">
					<div class="chkDOM1">
						<p><input type="checkbox" name="" id="" class="checkBoxAll1">전체 체크</p>
						<p><input type="checkbox" name="" id="" class="checkBox1">개별 체크1</p>
						<p><input type="checkbox" name="" id="" class="checkBox1">개별 체크2</p>
					</div>
				</div>
			</div>

			
		</article>

		<article id="return">
			<div class="wrapTit"><a href="#:wrap">리턴설정</a></div>
			<div class="artTxt">
				전체 선택이 되었을때와 전체 선택이 해제될때 각각 함수를 실행할 수 있습니다.
				<pre class="_code">
					common.checkAll({
						domName : '.chkDOM2',
						allChecker : '.checkBoxAll2',
						pusChecker : '.checkBox2',
						return_allAlert_on : 'FN_return_allAlert_on()',
						return_allAlert_off : 'FN_return_allAlert_off()'
						pusChecker_return : 'FN_pusChecker_return()'
					});

					function FN_return_allAlert_on(){
						alert('전체체크 됐을때 실행');
					}
					function FN_return_allAlert_off(){
						alert('전체체크 해제시 실행');
					}
					function FN_pusChecker_return(){
						alert('클릭할때마다 실행됨');
					}
				</pre>
			</div>
			<div class="sample">
				<pre class="_code">
					&lt;div class="chkDOM2"&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBoxAll2"&gt;전체 체크&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox2"&gt;개별 체크1&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox2"&gt;개별 체크2&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox2"&gt;개별 체크2&lt;/p&gt;
						&lt;p&gt;&lt;input type="checkbox" name="" id="" class="checkBox2"&gt;개별 체크2&lt;/p&gt;
					&lt;/div&gt;
				</pre>
				<div class="code">
					<div class="chkDOM2">
						<p><input type="checkbox" name="" id="" class="checkBoxAll2">전체 체크</p>
						<p><input type="checkbox" name="" id="" class="checkBox2">개별 체크1</p>
						<p><input type="checkbox" name="" id="" class="checkBox2">개별 체크2</p>
					</div>
				</div>
			</div>

			
		</article>

	</section>
</div>


<script>
	common.checkAll({
		domName : '.chkDOM',
		allChecker : '.checkBoxAll',
		pusChecker : '.checkBox',
	});
	common.checkAll({
		domName : '.chkDOM1',
		allChecker : '.checkBoxAll1',
		pusChecker : '.checkBox1',
		allAlert_on : '전체선택',
		allAlert_off : '전체선택 끝'
	});
	common.checkAll({
		domName : '.chkDOM2',
		allChecker : '.checkBoxAll2',
		pusChecker : '.checkBox2',
		return_allAlert_on : 'FN_return_allAlert_on()',
		return_allAlert_off : 'FN_return_allAlert_off()',
		pusChecker_return : 'FN_pusChecker_return()'
	});

	function FN_return_allAlert_on(){
		alert('전체체크 됐을때 실행');
	}
	function FN_return_allAlert_off(){
		alert('전체체크 해제시 실행');
	}
	function FN_pusChecker_return(){
		alert('클릭할때마다 실행됨');
	}
</script>