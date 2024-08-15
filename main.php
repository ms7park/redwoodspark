<?php
    include "common/_top.php"
?>

    <!-- 팝업레이어 시작 { -->
<!--
    <div id="hd_pop">
        <h2>팝업레이어 알림</h2>
        <span class="sound_only">팝업레이어 알림이 없습니다.</span>
    </div>

    <script>
        $(function () {
            $(".hd_pops_reject").click(function () {
                var id = $(this).attr('class').split(' ');
                var ck_name = id[1];
                var exp_time = parseInt(id[2]);
                $("#" + id[1]).css("display", "none");
                set_cookie(ck_name, 1, exp_time, g5_cookie_domain);
            });
            $('.hd_pops_close').click(function () {
                var idb = $(this).attr('class').split(' ');
                $('#' + idb[1]).css('display', 'none');
            });
            $("#hd").css("z-index", 1000);
        });
    </script>
-->
    <!-- } 팝업레이어 끝 -->

    <!--내용관리 php 구문 삽입-->

    <link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <style>#top_btn {
        display: none;
    }</style>
    <div id="main" class="main-scroll">
        <div id="fullpage" class="fullpage-wrapper"
             style="height: 100%; position: relative; touch-action: none; transform: translate3d(0px, 0px, 0px);">
            <section class="section intro fp-section active fp-table fp-completely" style="height: 1086px;">
                <div class="fp-tableCell" style="height: 1086px;">
                    <div id="slider"
                         class="main-slider swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                        <ul id="mainslider" class="swiper-wrapper" aria-live="off"
                            style="transition-duration: 0ms; transition-delay: 0ms;">


                            <li class="swiper-slide img-3 swiper-slide-next" role="group" aria-label="3 / 5"
                                data-swiper-slide-index="2"
                                style="width: 2297px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                <div class="sliderTxt">
                                    <p class="slider-logo item"><img src="./img/slider_logo.svg"></p>
                                    <h3 class="item"><span>머무는 순간 특별한 작품이 되는</span>
                                        시그니처 라이프</h3>
                                    <p class="eng item">컨텐츠 스튜디오가 있는 복합문화업무시설에
                                        하늘정원 옥상정원 각종 커뮤니티까지 누리는 특별한 혜택</p>
                                </div>
                                <div class="img absCenter"><img src="./img/slider3.jpg"></div>
                            </li>
                            <li class="swiper-slide img-4" role="group" aria-label="4 / 5" data-swiper-slide-index="3"
                                style="width: 2297px; opacity: 1; transform: translate3d(-2297px, 0px, 0px); transition-duration: 0ms;">
                                <div class="sliderTxt">
                                    <p class="slider-logo item"><img src="./img/slider_logo.svg"></p>
                                    <h3 class="item"><span>삶의 공간이 국립공원을 품고 있는</span>
                                        탁월한 조망권을 가진 곳~!</h3>
                                    <p class="eng item">테라스에서 하늘정원에서
                                        씨티뷰와 국립공원뷰까지 누리는 오피스텔</p>
                                </div>
                                <div class="img absCenter"><img src="./img/slider4.jpg"></div>
                            </li>
                            <li class="swiper-slide img-5" role="group" aria-label="5 / 5" data-swiper-slide-index="4"
                                style="width: 2297px; opacity: 1; transform: translate3d(-4594px, 0px, 0px); transition-duration: 0ms;">
                                <div class="sliderTxt">
                                    <p class="slider-logo item"><img src="./img/slider_logo.svg"></p>
                                    <h3 class="item"><span>우수한 환경, 주거의 탁월함,</span>
                                        생활의 인프라를 다가진 곳!</h3>
                                    <p class="eng item">더테라스by레드우즈파크는
                                        우리 아이들의 미래를 응원합니다~!</p>
                                </div>
                                <div class="img absCenter"><img src="./img/slider5.jpg"></div>
                            </li>
                            <li class="swiper-slide img-1 swiper-slide-prev" role="group" aria-label="1 / 5"
                                data-swiper-slide-index="0"
                                style="width: 2297px; opacity: 1; transform: translate3d(-6891px, 0px, 0px); transition-duration: 0ms;">
                                <div class="video-container">
                                    <iframe src="./html/GruznEWVrTA.html" title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen=""></iframe>
                                </div>
                            </li>
                            <li class="swiper-slide img-2 swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                                role="group" aria-label="2 / 5" data-swiper-slide-index="1"
                                style="width: 2297px; opacity: 1; transform: translate3d(-9188px, 0px, 0px); transition-duration: 0ms;">
                                <div class="sliderTxt">
                                    <p class="slider-logo item"><img src="./img/slider_logo.svg"></p>
                                    <h3 class="item"><span>원주의 모든 가치를 소유한</span>
                                        복합문화상업시설 오피스텔</h3>
                                    <p class="eng item">설레임 가득한 하루하루
                                        당신이 꿈꿨던 일상이 펼쳐집니다</p>
                                </div>
                                <div class="img absCenter"><img src="./img/slider2.jpg"></div>
                            </li>
                        </ul>
                        <div class="scroll absCenter"><img src="./img/ico_scroll.svg"></div>
                        <div class="swiper-pagination absCenter swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span class="swiper-pagination-bullet" tabindex="0" role="button"
                                  aria-label="Go to slide 1"></span><span
                                class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                                role="button" aria-label="Go to slide 2" aria-current="true"></span><span
                                class="swiper-pagination-bullet" tabindex="0" role="button"
                                aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0"
                                                                        role="button" aria-label="Go to slide 4"></span><span
                                class="swiper-pagination-bullet" tabindex="0" role="button"
                                aria-label="Go to slide 5"></span></div>
                        <!-- <div class="btn-wrap absCenter">
                            <div class="main-button-prev"><i class="material-symbols-rounded">arrow_back</i></div>
                            <div class="main-button-next"><i class="material-symbols-rounded">arrow_forward</i></div>
                        </div> -->
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </section>

            <section class="section story fp-auto-height fp-section fp-table" style="height: 1086px;">
                <div class="fp-tableCell" style="height: 1086px;">
                    <div class="inner">
                        <img class="item" src="./img/logo.svg">
                        <div class="text">
                            <p class="item">원주가 기다리던 시그니춰 라이프 더테라스</p>
                            <span class="item">변화의 중심에 빛나는 명작이 찾아온다</span>
                        </div>
                        <a class="item"
                           href="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/bbs/content.php?co_id=brand"><span>브랜드 스토리</span><i
                                class="material-symbols-rounded">arrow_right_alt</i></a>
                    </div>
                </div>
            </section>


            <section class="section premium fp-section fp-table" style="height: 1086px;">
                <div class="fp-tableCell" style="height: 1086px;">
                    <div class="btn-wrap">
                        <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button"
                             aria-label="Previous slide" aria-controls="swiper-wrapper-2fb478ff178389d4"
                             aria-disabled="true"></div>
                        <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
                             aria-controls="swiper-wrapper-2fb478ff178389d4" aria-disabled="false"></div>
                    </div>
                    <div class="premium-slider swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                        <div class="swiper-wrapper" id="swiper-wrapper-2fb478ff178389d4" aria-live="off"
                             style="transition-duration: 0ms; transition-delay: 0ms;">
                            <div class="swiper-slide premium-1 swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                                 role="group" aria-label="1 / 4"
                                 style="width: 2297px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                <div class="img"><img src="./img/main-premium-01.jpg"></div>
                                <div class="cont">
                                    <div class="inner">
                                        <p class="tl item"><b>INFRA</b> PREMIUM</p>
                                        <p class="explain item">생활이 다채로운<br>
                                            <strong>편리한 라이프인프라</strong></p>
                                        <ul class="list item">
                                            <li>도보 3분거리 복합체육센터</li>
                                            <li>수변공원, 원주천 산책로를 즐기는 힐링 프리미엄</li>
                                            <li>혁신도시내 33개 공원과 먹거리</li>
                                            <li>도보 5~10분거리내 대형 쇼핑몰</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide premium-2 swiper-slide-next" role="group" aria-label="2 / 4"
                                 style="width: 2297px; opacity: 0; transform: translate3d(-2297px, 0px, 0px); transition-duration: 0ms;">
                                <div class="img"><img src="./img/main-premium-02.jpg"></div>
                                <div class="cont">
                                    <div class="inner">
                                        <p class="tl item"><b>BRAND</b> VALUE</p>
                                        <p class="explain item">미래가치가 높아지는<br>
                                            <strong>각종 개발호재
                                                초우량 투자가치</strong></p>
                                        <ul class="list item">
                                            <li>국민건강보험공단 2청사, 건강보험심사평가원 등 12개 공공기관 이전완료</li>
                                            <li>미래산업진흥원 출범으로 원주 미래산업 활성화</li>
                                            <li>치악산1.5km 케이블카 설치(예정)</li>
                                            <li>디지털 영상 컨텐츠 소프트웨어 진흥시설</li>
                                            <li>k컨텐츠의 메카가 될 할리우드 스튜디오 입점</li>
                                            <li>교육발전 특구 지정</li>
                                            <li>반곡역 공원조성</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide premium-3" role="group" aria-label="3 / 4"
                                 style="width: 2297px; opacity: 0; transform: translate3d(-4594px, 0px, 0px); transition-duration: 0ms;">
                                <div class="img"><img src="./img/main-premium-03.jpg"></div>
                                <div class="cont">
                                    <div class="inner">
                                        <p class="tl item"><b>EDUCATION</b> PREMIUM</p>
                                        <p class="explain item">도보거리 초중고<br>
                                            <strong>자녀교육을 위한
                                                우수한 교육환경</strong></p>
                                        <ul class="list item">
                                            <li>도보 3분 거리에 버들초등학교, 병설유치원 위치</li>
                                            <li>영어유치원, 유명학원가, 미리내도서관, 미리내 공원등을
                                                품안에 둔 탁월한 입지
                                            </li>
                                            <li>버들초, 버들중, 원주여고, 원주대학교, 연세대학교의
                                                우수한 프리미엄 학군
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide premium-4" role="group" aria-label="4 / 4"
                                 style="width: 2297px; opacity: 0; transform: translate3d(-6891px, 0px, 0px); transition-duration: 0ms;">
                                <div class="img"><img src="./img/main-premium-04.jpg"></div>
                                <div class="cont">
                                    <div class="inner">
                                        <p class="tl item"><b>TRAFFIC</b> PREMIUM</p>
                                        <p class="explain item">서울까지 빠르게 연결하는<br>
                                            <strong>광역 쾌속교통망</strong></p>
                                        <ul class="list item">
                                            <li>여주~원주복선전철 수서까지40분대</li>
                                            <li>판교역 강남역 환승으로 더욱 빨라지는 서울강남권 이동</li>
                                            <li>중앙고속도로, 영동고속도로을 연결하는 관설IC</li>
                                            <li>남원주IC와 함께 도심의 편리한 접근성</li>
                                            <li>ktx(경강선,중앙선,남원주), 원주공항, 제2영동고속도로, 서울/경기권 40분대 쾌속교통인프라</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </section>

            <section class="section contact fp-auto-height fp-section fp-table" style="height: 1086px;">
                <div class="fp-tableCell" style="height: 1086px;">
                    <div class="container">
                        <h2>CONTACT US</h2>
                        <div class="inner">
                            <div class="item">
                                <div class="map">
                                    <img src="./img/main_map1.svg">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        <p class="tl">사업지 오시는길</p>
                                        <p class="addr">강원특별자치도 원주시 반곡동 2042</p>
                                    </div>
                                    <a href="https://naver.me/Fnm6fc6Z" target="_blank" class="bt">네이버지도<span
                                            class="material-symbols-rounded">chevron_right</span></a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="map">
                                    <img src="./img/main_map2.svg">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        <p class="tl">홍보관 오시는길</p>
                                        <p class="addr">원주시 서원대로 438 (단구동997)</p>
                                    </div>
                                    <a href="https://naver.me/5S9Ucr5z" target="_blank" class="bt">네이버지도<span
                                            class="material-symbols-rounded">chevron_right</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section least fp-auto-height fp-section fp-table" style="height: 1086px;">
                <div class="fp-tableCell" style="height: 1086px;">
                    <div id="ft" class="footer">
                        <div class="copyright container">
                            <div class="info">
                                <p>분양문의 <strong>010-3235-0049</strong></p>
                                <p>지하3층 / 지상20층 총 640호실</p>
                            </div>
                            <div class="address">
                                <div class="left">
                                    <p>홍보관 : 강원특별자치도 원주시 서원대로 438(단구동997)</p>
                                    <p>사업지 : 강원특별자치도 원주시 반곡동 2042 </p>
                                    <p class="txt-dark">※ 본 홍보물에 사용된 CG, 이미지 등은 소비자의 이해를 돕기 위한 것으로 주변환경개발계획, 교통 여건 등이
                                        실제와 상이할 수 있습니다.</p>
                                </div>
                                <div class="right">
                                    <p><span class="txt-dark">시행</span><img src="./img/footer_1.svg"
                                                                            alt="뿌리깊은나무들(주)"></p>
                                    <p><span class="txt-dark">신탁</span><img src="./img/footer_2.svg"
                                                                            alt="신한자산신탁"></p>
                                    <p><span class="txt-dark">시공</span><img src="./img/footer_3.svg"
                                                                            alt="(주)태왕E&amp;C"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!--팝업 컨텐츠 영역-->
    <!-- <div id="popup-wrap">
        <div class="inner">
            <div class="popup" name="popup1">
                <img src="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/theme/redwoods/img/popup/long_5.jpg">
                <p><a href="#">무순위입주자공고 바로가기</a></p>
                <a href="#" class="btn_close">x</a>
                <span><input type="checkbox" name="today_close1" />오늘만 이 창을 열지 않음</span>
            </div>
            <div class="popup" name="popup2">
                <img src="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/theme/redwoods/img/popup/long_6.jpg">
                <a href="#" class="btn_close">x</a>
                <span><input type="checkbox" name="today_close3" />오늘만 이 창을 열지 않음</span>
            </div>
            <div class="popup" name="popup3">
                <img src="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/theme/redwoods/img/popup/long_3.jpg">
                <p><a href="/theme/honorsville/vr/" target="_blank">항공 VR보기</a></p>
                <a href="#" class="btn_close">x</a>
                <span><input type="checkbox" name="today_close4" />오늘만 이 창을 열지 않음</span>
            </div>
        </div>
    </div> -->

    <!--Fullpage -->
    <link rel="stylesheet" href="./css/jquery.fullPage.css">
    <script src="./js/jquery.fullPage.js"></script>

    <!--Swiper-->
    <script src="./js/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="./css/swiper-bundle.min.css">

    <!-- Bxslider -->
    <link rel="stylesheet" href="./css/jquery.bxslider.css">
    <script src="./js/jquery.bxslider.js"></script>

    <!-- WOW 라이브러리 불러오기-->
    <link rel="stylesheet" href="./css/animate.css">
    <script src="./js/wow.min.js"></script>

    <script type="text/javascript" src="./js/common.js"></script>

    <script>
        $(document).ready(function () {
            //풀페이지 스크롤
            $('#fullpage').fullpage({
                //options here
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  // 무료 사용시 해당 라이센스 카피할 것(반드시 있어야함)
                navigation: true,  //우측페이저유무
                navigationPosition: 'left', // left,right(default) 페이저 위치
                autoScrolling: true,
                scrollHorizontally: true,
                slidesNavigation: true, // 슬라이드섹션 네비게이션 유무
                slidesNavPosition: 'bottom', //네비게이션 위치 (top,bottom)
                // navigationTooltips: ['firstSlide', 'secondSlide'], //navigation active시 타이틀 노출여부(hover포함)
                // showActiveTooltip: true,  //네비게이션 hover(default:false)시 툴팁 표기
                fitToSection: true,
                fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
                keyboardScrolling: true, // 키보드 방향키로 스크롤 컨트롤 여부
                animateAnchor: true,
                // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'] // 섹션별 컬러
                /*
                afterRender: function () {
                    setInterval(function () {
                        $.fn.fullpage.moveSlideRight();
                    }, 5000);
                }
                */
                responsiveWidth: 1025,
            });

            //프리미엄7 슬라이드
            var swiper = new Swiper('.main-slider', {
                loop: true,
                navigation: {
                    nextEl: ".main-button-next",
                    prevEl: ".main-button-prev",
                },
                effect: 'fade',
                autoplay: {
                    delay: 10000
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            //프리미엄7 슬라이드
            var swiper = new Swiper('.premium-slider', {
                loop: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                effect: 'fade',
                autoplay: {
                    delay: 10000
                },
            });
        });

        $(window).resize();

        // 슬라이드 이미지 모바일에서 세로형 이미지로 변경
        function updateImages() {
            $('#mainslider .swiper-slide .img img').each(function () {
                var imgElement = $(this);
                var imgSrc = imgElement.attr('src');

                if ($(window).width() <= 500) {
                    // Check if '_m' is not already added to the filename
                    if (!imgSrc.includes('_m')) {
                        imgElement.attr('src', imgSrc.replace('.jpg', '_m.jpg'));
                    }
                } else {
                    // Revert to the original image if '_m' is present
                    if (imgSrc.includes('_m')) {
                        imgElement.attr('src', imgSrc.replace('_m.jpg', '.jpg'));
                    }
                }
            });
        }

        // Run on initial load
        updateImages();

        // Run on window resize
        $(window).resize(function () {
            updateImages();
        });

    </script>


    <!-- Javascript -->
    <script type="text/javascript">
        $(document).ready(function () {
            // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인
            var popup1 = getCookie('popup1');
            var popup2 = getCookie('popup2');
            var popup3 = getCookie('popup3');
            var popup4 = getCookie('popup4');
            var popup5 = getCookie('popup5');

            // 변수가 없을경우 팝업 출력
            if (!popup1) {
                popUpAction('popup1');
            }

            // 변수가 없을경우 팝업 출력
            if (!popup2) {
                popUpAction('popup2');
            }

            // 변수가 없을경우 팝업 출력
            if (!popup3) {
                popUpAction('popup3');
            }

            // 변수가 없을경우 팝업 출력
            if (!popup4) {
                popUpAction('popup4');
            }

            // 변수가 없을경우 팝업 출력
            if (!popup5) {
                popUpAction('popup5');
            }
        });

        // 쿠키 가져오기

        function getCookie(name) {
            var nameOfCookie = name + "=";
            var x = 0;
            while (x <= document.cookie.length) {
                var y = (x + nameOfCookie.length);
                if (document.cookie.substring(x, y) == nameOfCookie) {
                    if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                        endOfCookie = document.cookie.length;
                    return unescape(document.cookie.substring(y, endOfCookie));
                }
                x = document.cookie.indexOf(" ", x) + 1;
                if (x == 0)
                    break;
            }
            return "";
        }

        // 24시간 기준 쿠키 설정하기
        // expiredays 후의 클릭한 시간까지 쿠키 설정
        function setCookie24(name, value, expiredays) {
            var todayDate = new Date();
            todayDate.setDate(todayDate.getDate() + expiredays);
            document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
        }

        // 00:00 시 기준 쿠키 설정하기
        // expiredays 의 새벽 00:00:00 까지 쿠키 설정
        function setCookie00(name, value, expiredays) {
            var todayDate = new Date();
            todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
            if (todayDate > new Date()) {
                expiredays = expiredays - 1;
            }
            todayDate.setDate(todayDate.getDate() + expiredays);
            document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
        }

        // 팝업출력
        function popUpAction(name) {
            // name으로 해당 팝업창 열기
            $("div[name=" + name + "]").fadeIn();
        }

        // 닫기버튼 클릭 이벤트
        $('.btn_close').click(function () {
            $(this).parent('.popup').fadeOut();
            // 오늘하루 보지않기 체크 확인
            if ($("input:checkbox[name=today_close1]").is(":checked") == true) {
                setCookie00('popup1', "done", 1);
            }

            // 오늘하루 보지않기 체크 확인
            if ($("input:checkbox[name=today_close2]").is(":checked") == true) {
                setCookie00('popup2', "done", 1);
            }

            // 오늘하루 보지않기 체크 확인
            if ($("input:checkbox[name=today_close3]").is(":checked") == true) {
                setCookie00('popup3', "done", 1);
            }

            // 오늘하루 보지않기 체크 확인
            if ($("input:checkbox[name=today_close4]").is(":checked") == true) {
                setCookie00('popup4', "done", 1);
            }

            // 오늘하루 보지않기 체크 확인
            if ($("input:checkbox[name=today_close5]").is(":checked") == true) {
                setCookie00('popup5', "done", 1);
            }
            // name으로 해당 팝업창 닫기
            $(this).parent("div[name=" + name + "]").fadeOut();
        });

    </script>
</div>
<div id="fp-nav" class="left" style="margin-top: -53.5px;">
    <ul>
        <li><a href="#" class="active"><span></span></a></li>
        <li><a href="#"><span></span></a></li>
        <li><a href="#"><span></span></a></li>
        <li><a href="#"><span></span></a></li>
        <li><a href="#"><span></span></a></li>
    </ul>
</div>
</body>
</html>