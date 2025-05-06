const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">


    <div style="text-align:-webkit-center;">
        <div  style="border:1px solid #000;max-width:570px;padding:10px">
          <span class="timer" style="font-weight:bold;font-size:20px;">
              [ 신청 마감 | <span id="day1" style="font-weight:bold;"></span> ]<br>[ <span id="countdown1" style="font-weight:bold;"></span>]
          </span><br><br>
         <b style="font-size:20px;">현재  [ <span class="counter blink" style="bottom:0px;font-weight:bold;color:blue;">7</span> / 150 명 ] 남았습니다.</b>
      </a></div></div><br><br><br>
    <h1 class="form-top-title">특별 이벤트 & 무료 전화 상담 신청하기</h1>

    <div class="form-box-inner">

        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
          <input type="hidden" name="entry.190995572" value="매체미정"> <!--★★구글폼 유입경로★-->
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                     <!--  <tr id="select_lic">
                            <th>성별<br></th>
                            <td>

                                <select name='entry.1818522882' id='mf' class="form-control" placeholder="성별">

                                    <option value="성별" selected disabled>성별 선택</option>
                                        <option value="여성">여성</option>
                                        <option value="남성">남성</option>
                                        
                                      
                                </select>

                           
                            </td>
                        </tr> -->
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.1777433148' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                  
                    <tr>
                        <th>원하는 차종</th>
                        <td>
                            <input type='text' name='entry.113453114' id='carname' class="form-control" placeholder="원하는 차종">
                           
                        </td>
                    </tr>
                  
            <tr>
              <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
              <td>
                  <input type='text' name='entry.2022906720' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
              </td>
          </tr>
                    <!-- <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr> -->
                   <!-- <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.1817436242' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr> -->
                   
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:block;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:block;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>




<section id="dbscf" style="display:block;">
<form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/new/mct/ifr/ifr_save.php" target="hidden_iframe12">
<input type="hidden" name="ms" value="S00274859Q" />
<input type="hidden" name="ca" value="C05740702D" />
<input type="hidden" name="auto_defense" />
<div class="input_form_area" >
	

	<div class="input_list">
		<table width=100%>
			<tr>
								<td class="input_title">
					이름
				</td>
				
				<td class="pb10">
					<input type="text" name="name" class="input_text" >
				</td>
			</tr>
			
			
			<tr>
								<td class="input_title">
					연락처
				</td>
				
				<td class="pb10">
					<input type="tel" name="tel" id = "tel"  maxlength=11 class="input_text" >
					

				</td>
			</tr>

			<tr>
								<td class="input_title">
					희망모델
				</td>
				
				<td class="pb10">
					<input type="text" name="item1" class="input_text" >
				</td>
			</tr>
			
		</table>
	</div>
	<div class="argee_area">
		<p style="text-align:center;">
			<input type="checkbox"  name="agree" id="agreement" checked>
			<span >
			<a href='javascript:dbdb_pri_popup();void(0);'>개인정보 수집 및 이용</a> 에 동의합니다
			</span>
		</p>
	</div>
	<div style="text-align:center;">
		<button class="input_button" onclick="OnSubmit(document.f1);return false" style="cursor:pointer;" >
			무료견적신청
		</button>
	</div>
</div>
</form>
  
  
  </section>


`;

document.body.appendChild(form.content);