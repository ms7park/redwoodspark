
<!-- 하단 시작 { -->
<div id="ft">
    <div class="copyright container">
        <div class="info">
            <p>분양문의 <strong>010-3235-0049</strong></p>
            <p>지하3층 지상20층 총640호실</p>
        </div>
        <div class="address">
            <div class="left">
                <p>홍보관 : 강원특별자치도 원주시 서원대로 438(단구동997)</p>
                <p>사업지 : 강원특별자치도 원주시 반곡동 2042 </p>

                <p class="txt-dark">※ 상기 이미지 및 일러스트 등은 소비자의 이해를 돕기 위해 합성 또는 제작된 것으로 인·허가 과정 및 실 시공 과정에서 변경될 수 있습니다.<br>
※ 본 홈페이지는 소비자의 이해를 돕기 위해 사전홍보용으로 제작된 것으로 실제와 다를 수 있으니 견본주택 및 현장을 방문하시어 직접 확인하시기 바랍니다.</p>
            </div>
            <div class="right">
                <p><span class="txt-dark">시행</span><img src="./img/footer_1.svg" alt="뿌리깊은나무들(주)"></p>
                <p><span class="txt-dark">신탁</span><img src="./img/footer_2.svg" alt="신한자산신탁"></p>
                <p><span class="txt-dark">시공</span><img src="./img/footer_3.svg" alt="(주)태왕E&amp;C"></p>
            </div>
        </div>
    </div>
    <button type="button" id="top_btn">
    	<i class="fa fa-arrow-up" aria-hidden="true"></i><span class="sound_only">상단으로</span>
    </button>
    <script>
    $(function() {
        $("#top_btn").on("click", function() {
            $("html, body").animate({scrollTop:0}, '500');
            return false;
        });
    });
    </script>
</div>


<script>
	$(document).ready(function() {
		try {
		  $('#nav').onePageNav({
			begin: function() {
			  console.log('start')
			},
			end: function() {
			  console.log('stop')
			}
		  });
		} catch(e){}

	  $('map').imageMapResize();

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();
	});
	</script>


<!-- } 하단 끝 -->

<script>
  $(function() {
      // 폰트 리사이즈 쿠키있으면 실행
      font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
  });

  AOS.init(); // 자바스크립트로 init()을 해야 동작한다.
</script>



<!-- ie6,7에서 사이드뷰가 게시판 목록에서 아래 사이드뷰에 가려지는 현상 수정 -->
<!--[if lte IE 7]>
<script>
$(function() {
    var $sv_use = $(".sv_use");
    var count = $sv_use.length;

    $sv_use.each(function() {
        $(this).css("z-index", count);
        $(this).css("position", "relative");
        count = count - 1;
    });
});
</script>
<![endif]-->

</div><!--wrap-->


</body></html>
