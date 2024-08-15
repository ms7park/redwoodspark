<?php
    include "common/_top.php"
?>

<!--내용관리 php 구문 삽입-->
<!-- skin : theme/customer --><!-- e: sub-visual subbg-1 -->
<div class="boxy-warp sub-contents">
	<div class="r-sub-con">
		
		<section id="bo_w">
				<!-- <h2 class="sound_only">관심고객등록 글쓰기</h2> -->

				<!-- 게시물 작성/수정 시작 { -->
				<form name="fwrite" id="fwrite" action="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/bbs/write_update.php" onsubmit="return fwrite_submit(this);" method="post" enctype="multipart/form-data" autocomplete="off" style="width:100%">
				<input type="hidden" name="uid" value="2024081511282859">
				<input type="hidden" name="w" value="">
				<input type="hidden" name="bo_table" value="customer">
				<input type="hidden" name="wr_id" value="0">
				<input type="hidden" name="sca" value="">
				<input type="hidden" name="sfl" value="">
				<input type="hidden" name="stx" value="">
				<input type="hidden" name="spt" value="">
				<input type="hidden" name="sst" value="">
				<input type="hidden" name="sod" value="">
				<input type="hidden" name="page" value="">
				<div id="customer" class="moPd">
    <section class="personal">
        <h3>개인정보 수집 및 이용에 대한 안내</h3>
        <div class="scroll">
            <strong>1. 수집하는 개인정보 항목</strong>
            <p>당사는 고객님의 정보를 중요시하며, 개인정보보호법을 준수하고 있습니다. 수집된 개인정보는 분양 및 청약 관련 이벤트를 효율적으로 운영하기 위한 목적으로 활용되며 최소한의 범위 내에서 개인정보를 수집하고 있습니다.
            - 개인정보 수집항목 : 이름 , 휴대전화번호, 주소, 서비스 이용기록 , 접속 로그 , 쿠키 , 접속 IP 정보 등
            - 개인정보 수집 및 이용목적 : 분양정보 제공(전화, 문자)
            - 개인정보 수집방법 : 홈페이지(관심고객등록)
            또한, 귀하께서 본 홈페이지의 개인정보 수집/이용, 개인정보 처리위탁의 내용에 대해 각각 「동의함」버튼 또는 「동의하지 않음」버튼을 클릭할 수 있는 절차를 마련하여, 각각의 「동의함」버튼을 클릭하면 해당 사항</p>
            <strong>1. 수집하는 개인정보 항목</strong>
            <p>더테라스by레드우즈파크 홈페이지는 서비스 이용을 위해 필요한 최소한의 범위로 개인정보를 수집합니다.
            - 개인정보 수집항목 : 이름 , 휴대전화번호, 주소, 서비스 이용기록 , 접속 로그 , 쿠키 , 접속 IP 정보 등
            - 개인정보 수집 및 이용목적 : 분양정보 제공(전화, 문자)
            - 개인정보 수집방법 : 홈페이지(관심고객등록)
            또한, 귀하께서 본 홈페이지의 개인정보 수집/이용, 개인정보 처리위탁의 내용에 대해 각각 「동의함」버튼 또는 「동의하지 않음」버튼을 클릭할 수 있는 절차를 마련하여, 각각의 「동의함」버튼을 클릭하면 해당 사항</p>
            <strong>1. 수집하는 개인정보 항목</strong>
            <p>더테라스by레드우즈파크 홈페이지는 서비스 이용을 위해 필요한 최소한의 범위로 개인정보를 수집합니다.
            - 개인정보 수집항목 : 이름 , 휴대전화번호, 주소, 서비스 이용기록 , 접속 로그 , 쿠키 , 접속 IP 정보 등
            - 개인정보 수집 및 이용목적 : 분양정보 제공(전화, 문자)
            - 개인정보 수집방법 : 홈페이지(관심고객등록)
            또한, 귀하께서 본 홈페이지의 개인정보 수집/이용, 개인정보 처리위탁의 내용에 대해 각각 「동의함」버튼 또는 「동의하지 않음」버튼을 클릭할 수 있는 절차를 마련하여, 각각의 「동의함」버튼을 클릭하면 해당 사항</p>
        </div>
        <div class="check">
			<label for="wr_2"><input type="checkbox" name="wr_2" value="1" class="checkbox"><span class="label"></span> 동의합니다(동의하셔야 등록이 가능합니다.)</label>
        </div>
    </section>

    <section class="info mt80">
        <h3>'더테라스by레드우즈파크' 분양정보 제공에 관한 동의(선택사항)</h3>
        <div class="scroll">
            <ul>
                <li>해당 고객정보의 수집 및 이용은 '더테라스by레드우즈파크 홈페이지'의 분양정보 제공 목적 외 사용되지 않습니다.</li>
                <li>수집하는 개인정보 항목 : SMS/전화상담 수신여부</li>
                <li>수집 및 이용 목적 : 더테라스by레드우즈파크 홈페이지 분양정보 안내</li>
                <li>보유 및 이용기간 : 더테라스by레드우즈파크 홈페이지 분양종료 시 까지</li>
                <li>위 개인정보 수집 및 이용에 대해서 부동의하셔도 관심고객 등록은 가능하나 분양정보 제공에 제약이 있을 수 있습니다. (※ 부동의에 따른 고지사항)</li>
            </ul>
        </div>
        <div class="check">
            <!-- <label><input type="radio" name="wr_3" id="wr_3" value="동의" class="radio" required><span class="label"></span>동의</label>
            <label><input type="radio" name="wr_3" id="wr_3" value="미동의" class="radio" checked="" required><span class="label"></span>미동의</label> -->
			<label for="wr_3"><input type="checkbox" name="wr_3" value="1" class="checkbox"><span class="label"></span> 동의합니다(동의하지 않을 경우 분양정보를 제공 받을 수 없습니다.)</label>
        </div>
    </section>

    <section class="write mt80">
        <h3>개인정보 취급 위탁동의</h3>
        <table class="writeTable">
            <colgroup>
                <col width="20%">
                <col width="80%">
            </colgroup>
            <tbody>
                <tr class="name">
                    <th>성명</th>
                    <td>
													<input id="sname" class="type-text" type="text" style="width:266px;" maxlength="10" name="wr_name" value="" placeholder="이름" required="">
											</td>
                </tr>
                <tr>
                    <th>연령대</th>
                    <td>
					<label><input type="radio" name="wr_6" id="wr_6" value="20대" class="radio" required=""><span class="label"></span>20대</label>
					<label><input type="radio" name="wr_6" id="wr_6" value="30대" class="radio" required=""><span class="label"></span>30대</label>
					<label><input type="radio" name="wr_6" id="wr_6" value="40대" class="radio" required=""><span class="label"></span>40대</label>
					<label><input type="radio" name="wr_6" id="wr_6" value="50대" class="radio" required=""><span class="label"></span>50대</label>
					<label><input type="radio" name="wr_6" id="wr_6" value="60대이상" class="radio" required=""><span class="label"></span>60대이상</label>
                    </td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td>
					<label><input type="radio" name="wr_7" id="wr_7" value="남성" class="radio" required=""><span class="label"></span>남성</label>
					<label><input type="radio" name="wr_7" id="wr_7" value="여성" class="radio" required=""><span class="label"></span>여성</label>
                </td></tr>
                <tr class="tel">
                    <th>연락처</th>
                    <td>
						<input type="text" name="hp[0]" value="" class="frm_input" size="10" maxlength="4" required=""> - <input type="text" name="hp[1]" value="" class="frm_input" size="10" maxlength="4" required=""> - <input type="text" name="hp[2]" value="" class="frm_input" size="10" maxlength="4" required="">
                    </td>
                </tr>
                <tr class="adr">
                    <th>거주지</th>
                    <td>
                        <!-- <span class="select-wrapper">
                            <select name="hADDR1" id="hADDR1" style="width:200px;">
                                <option value="">시/도</option>
                                <option value="서울특별시">서울특별시</option>
                                <option value="경기도">경기도</option>
                                <option value="강원도">강원도</option>
                                <option value="경상남도">경상남도</option>
                                <option value="경상북도">경상북도</option>
                                <option value="광주광역시">광주광역시</option>
                                <option value="대구광역시">대구광역시</option>
                                <option value="대전광역시">대전광역시</option>
                                <option value="부산광역시">부산광역시</option>
                                <option value="울산광역시">울산광역시</option>
                                <option value="인천광역시">인천광역시</option>
                                <option value="세종특별자치시">세종특별자치시</option>
                                <option value="전라남도">전라남도</option>
                                <option value="전라북도">전라북도</option>
                                <option value="제주특별자치도">제주특별자치도</option>
                                <option value="충청남도">충청남도</option>
                                <option value="충청북도">충청북도</option>
                            </select>
                        </span>
                        <span class="select-wrapper">
                            <select name="hADDR2" id="hADDR2" style="width:200px;">
                                <option value="">구/군</option>
                            </select>
                        </span>
                        <span class="select-wrapper">
                            <select name="hADDR3" id="hADDR3" style="width:200px;">
                                <option value="">읍/면/동</option>
                            </select>
                        </span>
                        <span id="sidoMsg" style="color:#f00; display:none; font-size:12px;">※ [세종특별자치시]일 경우 구/군 데이터는 존재하지 않습니다.</span> -->

						<div class="write_div">
							<label for="ex_zip" class="sound_only">우편번호</label>
							<input type="text" name="ex_zip" value="" id="ex_zip" class="frm_input" size="6" maxlength="6" required="">
							<button type="button" class="btn_frmline" onclick="win_zip(&#39;fwrite&#39;, &#39;ex_zip&#39;, &#39;ex_addr1&#39;, &#39;ex_addr2&#39;, &#39;ex_addr3&#39;, &#39;ex_jibeon&#39;);">주소 검색</button><br>
							<input type="text" name="ex_addr1" value="" id="ex_addr1" class="frm_input frm_address" size="50">
							<label for="ex_addr1">기본주소</label><br>
							<input type="text" name="ex_addr2" value="" id="ex_addr2" class="frm_input frm_address" size="50" required="">

						</div>
                    </td>
                </tr>
                <!-- <tr>
                    <th>관심주택형<span>(중복선택가능)</span></th>
                    <td>
                        <label><input type="checkbox" name="check[]" value="아파트" class="checkbox"><span class="label"></span> 아파트</label>
                        <label><input type="checkbox" name="check[]" value="오피스텔" class="checkbox"><span class="label"></span> 오피스텔</label>
                    </td>
                </tr> -->
            </tbody>
        </table>
    </section>
    <input type="submit" value="관심고객등록" id="btn_submit" accesskey="s" class="btn btn_register">

							<!-- <a href="./board.php?bo_table=customer" class="btn_cancel btn">취소</a> -->
						
</div>
				
				<div class="">


				<!-- 비밀번호 숨기기
											<label for="wr_password" class="sound_only">비밀번호<strong>필수</strong></label>
						<input type="password" name="wr_password" id="wr_password" required class="frm_input required" placeholder="비밀번호">
				 -->
				<!-- 옵션 숨기기 				
								<div class="option-box">
						<span class="sound_only">옵션</span>
						
<input type="checkbox" id="html" name="html" onclick="html_auto_br(this);" value="" >
<label for="html">HTML</label>				</div>
				 -->

				<div class="bo_w_tit write_div">
						<!-- <label for="wr_subject" class="sound_only">제목<strong>필수</strong></label> -->

						<div id="autosave_wrapper write_div">
								<input type="text" name="wr_subject" value="님이 관심등록하였습니다." id="wr_subject" required="" class="frm_input full_input required" size="50" maxlength="255" placeholder="제목" hidden="">
														</div>

				</div>

				<div class="write_div" style="display:none">
						<!-- <label for="wr_content" class="sound_only">내용<strong>필수</strong></label> -->
						<div class="wr_content ">
																<span class="sound_only">웹에디터 시작</span>
<textarea id="wr_content" name="wr_content" class="" maxlength="65536" style="width:100%;height:300px">.</textarea>
<span class="sound_only">웹 에디터 끝</span>														</div>

				</div>

				<!-- 				
								<div class="bo_w_link write_div">
						<label for="wr_link1"><i class="xi-link"></i><span class="sound_only"> 링크  #1</span></label>
						<input type="text" name="wr_link1" value="" id="wr_link1" class="frm_input full_input" size="50">
				</div>
								<div class="bo_w_link write_div">
						<label for="wr_link2"><i class="xi-link"></i><span class="sound_only"> 링크  #2</span></label>
						<input type="text" name="wr_link2" value="" id="wr_link2" class="frm_input full_input" size="50">
				</div>
				
								<div class="bo_w_flie write_div">
						<div class="file_wr write_div">
								<label for="bf_file_1" class="lb_icon"><i class="xi-file-add-o"></i><span class="sound_only"> 파일 #1</span></label>
								<input type="file" name="bf_file[]" id="bf_file_1" title="파일첨부 1 : 용량 1,048,576 바이트 이하만 업로드 가능" class="frm_file ">
						</div>
						
						
				</div>
								<div class="bo_w_flie write_div">
						<div class="file_wr write_div">
								<label for="bf_file_2" class="lb_icon"><i class="xi-file-add-o"></i><span class="sound_only"> 파일 #2</span></label>
								<input type="file" name="bf_file[]" id="bf_file_2" title="파일첨부 2 : 용량 1,048,576 바이트 이하만 업로드 가능" class="frm_file ">
						</div>
						
						
				</div>
				 -->

				<!-- 자동등록방지 없애기
								<div class="write_div">
						
<script>var g5_captcha_url  = "http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/plugin/kcaptcha";</script>
<script src="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/plugin/kcaptcha/kcaptcha.js"></script>
<fieldset id="captcha" class="captcha">
<legend><label for="captcha_key">자동등록방지</label></legend>
<img src="http://xn--9m1b22au1d9pl83bx1fvpfhtqo1bg6g.kr/plugin/kcaptcha/img/dot.gif" alt="" id="captcha_img"><input type="text" name="captcha_key" id="captcha_key" required class="captcha_box required" size="6" maxlength="6">
<button type="button" id="captcha_mp3"><span></span>숫자음성듣기</button>
<button type="button" id="captcha_reload"><span></span>새로고침</button>
<span id="captcha_info">자동등록방지 숫자를 순서대로 입력하세요.</span>
</fieldset>				</div>
								-->
				
				

				<script>
								function html_auto_br(obj)
				{
						if (obj.checked) {
								result = confirm("자동 줄바꿈을 하시겠습니까?\n\n자동 줄바꿈은 게시물 내용중 줄바뀐 곳을<br>태그로 변환하는 기능입니다.");
								if (result)
										obj.value = "html2";
								else
										obj.value = "html1";
						}
						else
								obj.value = "";
				}

				function fwrite_submit(f)
				{


					if (!f.wr_2.checked) {
						alert("개인정보수집이용에 동의하셔야 작성할 수 있습니다.");
						f.wr_2.focus();
						return false;
					}

					if (!f.wr_3.checked) {
						alert("개인정보 취급 위탁동의 하셔야 작성할 수 있습니다.");
						f.wr_3.focus();
						return false;
					}

					var flag = false;
					$("input[name='check[]']").each( function () {
						if (this.checked) {
							flag = !flag; 
							return false;
						}
					});

					// if (!flag) {
					// 	alert("관심주택형 종류는 하나 이상 체크해주세요.");
					// 	return false;
					// }


						var wr_content_editor = document.getElementById('wr_content');
if (!wr_content_editor.value) { alert("내용을 입력해 주십시오."); wr_content_editor.focus(); return false; }

						var subject = "";
						var content = "";
						$.ajax({
								url: g5_bbs_url+"/ajax.filter.php",
								type: "POST",
								data: {
										"subject": f.wr_subject.value,
										"content": f.wr_content.value
								},
								dataType: "json",
								async: false,
								cache: false,
								success: function(data, textStatus) {
										subject = data.subject;
										content = data.content;
								}
						});

						if (subject) {
								alert("제목에 금지단어('"+subject+"')가 포함되어있습니다");
								f.wr_subject.focus();
								return false;
						}

						if (content) {
								alert("내용에 금지단어('"+content+"')가 포함되어있습니다");
								if (typeof(ed_wr_content) != "undefined")
										ed_wr_content.returnFalse();
								else
										f.wr_content.focus();
								return false;
						}

						if (document.getElementById("char_count")) {
								if (char_min > 0 || char_max > 0) {
										var cnt = parseInt(check_byte("wr_content", "char_count"));
										if (char_min > 0 && char_min > cnt) {
												alert("내용은 "+char_min+"글자 이상 쓰셔야 합니다.");
												return false;
										}
										else if (char_max > 0 && char_max < cnt) {
												alert("내용은 "+char_max+"글자 이하로 쓰셔야 합니다.");
												return false;
										}
								}
						}



						document.getElementById("btn_submit").disabled = "disabled";

						return true;
				}
				</script>
		</div></form></section>
		<!-- } 게시물 작성/수정 끝 -->
	</div>
</div>


</div><!-- end .sub_con -->
</section> <!-- End #sub -->

<?php
    include "common/_tail.php"
?>