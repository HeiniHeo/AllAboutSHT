import { useState } from 'react'

const Calculator1 = ()=>{

    const [Location, setLocation] = useState(1)
    const ChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    return(
        <>
            <div class = "subscription_wrap w100">
                <div class = "subscription w1200">
                    <div class>
                        <div class = "calculator_content1">
                            <div class = "option1">
                                <h5>(1) 가구소득</h5>
                                <h6>1. 배우자 소득 유무</h6>
                                <ul>
                                    <li><input type = "checkbox"/>맞벌이</li>
                                    <li><input type = "checkbox"/>외벌이</li>
                                    <li><input type = "checkbox"/>둘 다 무직</li>
                                </ul>
                                <h6>2. 가구 수</h6>
                                <ul>
                                    <li><input type = "checkbox"/>3인 이하</li>
                                    <li><input type = "checkbox"/>4인</li>
                                    <li><input type = "checkbox"/>5인</li>
                                    <li><input type = "checkbox"/>6인</li>
                                    <li><input type = "checkbox"/>7인</li>
                                    <li><input type = "checkbox"/>8인</li>
                                </ul>
                                <h6>3. 소득금액</h6>
                                    <div><input class = "option1" type = "text"/>원</div>
                                <div class = "score">점수 : <span class = "option1_result"></span></div>
                            </div>
                            <div class = "option2">
                                <h5>(2) 해당 시*도 연속 거주기간</h5>
                                <h6>1. 거주 지역</h6>
                                <select onClick = {ChangeLocation}>
                                    <option>
                                        시/도
                                    </option>
                                    <option value = "seoul">
                                        서울특별시
                                    </option>
                                    <option value = "busan">
                                        부산광역시
                                    </option>
                                    <option value = "dagu">
                                        대구광역시
                                    </option>
                                    <option value = "GwangJu">
                                        인천광역시
                                    </option>
                                    <option>
                                        광주광역시
                                    </option>
                                    <option>
                                        대전광역시
                                    </option>
                                    <option>
                                        울산광역시
                                    </option>
                                    <option>
                                        세종특별자치시
                                    </option>
                                    <option>
                                        경기도
                                    </option>
                                    <option>
                                        강원도
                                    </option>
                                    <option>
                                        충청북도
                                    </option>
                                    <option>
                                        충청남도
                                    </option>
                                    <option>
                                        전라북도
                                    </option>
                                    <option>
                                        전라남도
                                    </option>
                                    <option>
                                        경상북도
                                    </option>
                                    <option>
                                        경상남도
                                    </option>
                                    <option>
                                        제주특별자치도
                                    </option>
                                </select>   
                                <select>
                                    <option>
                                        군/구
                                    </option>
                                        {
                                            Location === 'seoul'
                                            ? <>
                                                <option>종로구</option>
                                                <option>중구</option>
                                                <option>용산구</option>
                                                <option>성동구</option>
                                                <option>광진구</option>
                                                <option>동대문구</option>
                                                <option>중량구</option>
                                                <option>성북구</option>
                                                <option>강북구</option>
                                                <option>도봉구</option>
                                                <option>노원구</option>
                                                <option>은평구</option>
                                                <option>서대문구</option>
                                                <option>마포구</option>
                                                <option>양천구</option>
                                                <option>강서구</option>
                                                <option>구로구</option>
                                                <option>금천구</option>
                                                <option>영등포구</option>
                                                <option>동작구</option>
                                                <option>관악구</option>
                                                <option>서초구</option>
                                                <option>강남구</option>
                                                <option>송파구</option>
                                                <option>강동구</option>
                                                </>
                                                : ( Location === 'busan'
                                                    ? <>
                                                    <option>중구</option>
                                                    <option>서구</option>
                                                    <option>동구</option>
                                                    <option>영도구</option>
                                                    <option>부산진구</option>
                                                    <option>동래구</option>
                                                    <option>남구</option>
                                                    <option>북구</option>
                                                    <option>해운대구</option>
                                                    <option>사하구</option>
                                                    <option>금정구</option>
                                                    <option>강서구</option>
                                                    <option>연제구</option>
                                                    <option>수영구</option>
                                                    <option>사상구</option>
                                                    <option>기장군</option>
                                                    </>
                                                    : ( Location === 'dagu'
                                                    ? <>
                                                    <option>중구</option>
                                                    <option>동구</option>
                                                    <option>미추홀구</option>
                                                    <option>연수구</option>
                                                    <option>남동구</option>
                                                    <option>부평구</option>
                                                    <option>계양구</option>
                                                    <option>서구</option>
                                                    <option>강화군</option>
                                                    <option>옹진군</option>
                                                    </>
                                                    : ( Location === 'GwangJu'
                                                    ? <>
                                                    <option>동구</option>
                                                    <option>서구</option>
                                                    <option>남구</option>
                                                    <option>북구</option>
                                                    <option>광산구</option>
                                                    </>
                                                    : 'df')))
                                        }
                                </select>
                                <h6>2. 거주 기간</h6>
                                <div class = ""><input type = "text"/>개월</div>
                                <div class = "score">점수 : <span class = "option2_result"></span></div>
                            </div>
                            <div class = "option3">
                                <h5>(3) 주택청약종합저축 납입인정 횟수</h5>
                                <div>
                                    <input type = "text" />회
                                </div>
                                <div class = "score">점수 : <span class = "option3_result"></span></div>
                            </div>
                            <div class = "score totalScore">총점 : <span class = "total_result"></span></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator1