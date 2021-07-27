const Calculator2 = ()=>{
    return(
        <>
            <div class = "subscription_wrap w100">
                <div class = "subscription w1200">
                    <div class>
                        <div class = "calculator_content2">
                            <div class = "option1">
                                <h5>(1) 미성년 자녀수</h5>
                                <div>
                                    <input type = "text" />명
                                </div>
                                <div class = "score">점수 : <span class = "option1_result"></span></div>
                            </div>
                            <div class = "option2">
                                <h5>(2) 무주택기간</h5>
                                <div>
                                    <input type = "text" />개월
                                </div>
                                <div class = "score">점수 : <span class = "option2_result"></span></div>
                            </div>
                            <div class = "option3">
                                <h5>(3) 해당 시*도 연속 거주기간</h5>
                                <h6>1. 거주 지역</h6>
                                <select>
                                    <option>
                                        도
                                    </option>
                                    <option>
                                        인천
                                    </option>
                                    <option>
                                        남양
                                    </option>
                                    <option>
                                        성남
                                    </option>
                                    <option>
                                        의왕
                                    </option>
                                    <option>
                                        위례
                                    </option>
                                    <option>
                                        성남
                                    </option>
                                    <option>
                                        의정부
                                    </option>
                                    <option>
                                        군포
                                    </option>
                                    <option>
                                        의왕
                                    </option>
                                    <option>
                                        수원
                                    </option>
                                    <option>
                                        부천
                                    </option>
                                    <option>
                                        인천
                                    </option>
                                    <option>
                                        파주
                                    </option>
                                    <option>
                                        하남
                                    </option>
                                    <option>
                                        시흥
                                    </option>
                                    <option>
                                        양주
                                    </option>
                                    <option>
                                        과천
                                    </option>
                                    <option>
                                        남양주
                                    </option>
                                    <option>
                                        부천
                                    </option>
                                    <option>
                                        고양
                                    </option>
                                    <option>
                                        부천
                                    </option>
                                    <option>
                                        시흥
                                    </option>
                                    <option>
                                        안산
                                    </option>
                                    <option>
                                        동작구
                                    </option>
                                    <option>
                                        고양
                                    </option>
                                </select>   
                                <select>
                                    <option>
                                        시
                                    </option>
                                    <option>
                                        계양
                                    </option>
                                    <option>
                                        주진접2
                                    </option>
                                    <option>
                                        복정1
                                    </option>
                                    <option>
                                        복정2
                                    </option>
                                    <option>
                                        청계2
                                    </option>
                                    <option>
                                        주왕숙2
                                    </option>
                                    <option>
                                        신촌
                                    </option>
                                    <option>
                                        낙생
                                    </option>
                                    <option>
                                        우정
                                    </option>
                                    <option>
                                        대야미
                                    </option>
                                    <option>
                                        월암
                                    </option>
                                    <option>
                                        당수
                                    </option>
                                    <option>
                                        원종
                                    </option>
                                    <option>
                                        검단
                                    </option>
                                    <option>
                                        운정3
                                    </option>
                                    <option>
                                        교산
                                    </option>
                                    <option>
                                        하중
                                    </option>
                                    <option>
                                        회천
                                    </option>
                                    <option>
                                        주암
                                    </option>
                                    <option>
                                        왕숙
                                    </option>
                                    <option>
                                        대장
                                    </option>
                                    <option>
                                        창릉
                                    </option>
                                    <option>
                                        역곡
                                    </option>
                                    <option>
                                        거모
                                    </option>
                                    <option>
                                        장상
                                    </option>
                                    <option>
                                        신길2
                                    </option>
                                    <option>
                                        수방사
                                    </option>
                                    <option>
                                        장항
                                    </option>
                                    <option>
                                        구리갈매역세권
                                    </option>
                                </select>
                                <h6>2. 거주 기간</h6>
                                <div class = ""><input type = "text"/>개월</div>
                                <div>점수 : <span class = "option3_result"></span></div>
                            </div>
                            <div class = "option4">
                                <h5>(4) 주택청약종합저축 납입인정 횟수</h5>
                                <div>
                                    <input type = "text" />회
                                </div>
                                <div class = "score">점수 : <span class = "option4_result"></span></div>
                            </div>
                            <div class = "score totalScore">총점 : <span class = "total_result"></span></div>
                        </div>
                    </div>   
                </div>                
            </div>
        </>
    )
}

export default Calculator2