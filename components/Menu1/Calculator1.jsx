import { useState } from 'react'

const Calculator1 = ()=>{

    const [Location, setLocation] = useState(1)
    const [option3, setOption3] = useState(1)

    const [Result3, setResult3] = useState(1)

    const changOption3 = (e) => {
        setOption3(e.target.value)
        {
            option3 < 12
            ? setResult3(1)
            : ( option3 >= 12 && option3 < 24
                ? setResult3(2)
                : ( option3 >= 24
                    ? setResult3(3)
                    : ''
                    )
                )
        }
    }
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
                                    <option value = "Incheon">
                                        인천광역시
                                    </option>
                                    <option value = "GwangJu">
                                        광주광역시
                                    </option>
                                    <option value = "Daejeon">
                                        대전광역시
                                    </option>
                                    <option value = "Ulsan">
                                        울산광역시
                                    </option>
                                    <option value = "SaeJong">
                                        세종특별자치시
                                    </option>
                                    <option value = "GyeongGi">
                                        경기도
                                    </option>
                                    <option value = "GangWon">
                                        강원도
                                    </option>
                                    <option value = "ChungCheong1">
                                        충청북도
                                    </option>
                                    <option value = "ChungCheong2">
                                        충청남도
                                    </option>
                                    <option value = "JeongLa1">
                                        전라북도
                                    </option>
                                    <option value = "JeongLa2">
                                        전라남도
                                    </option>
                                    <option value = "GyeongSang1">
                                        경상북도
                                    </option>
                                    <option value = "GyeongSang2">
                                        경상남도
                                    </option>
                                    <option value = "Jeju">
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
                                                    <option>서구</option>
                                                    <option>남구</option>
                                                    <option>북구</option>
                                                    <option>수성구</option>
                                                    <option>달서구</option>
                                                    <option>달성군</option>
                                                    </>
                                                    : ( Location === 'GwangJu'
                                                    ? <>
                                                    <option>동구</option>
                                                    <option>서구</option>
                                                    <option>남구</option>
                                                    <option>북구</option>
                                                    <option>광산구</option>
                                                    </>
                                                    : ( Location === 'Daejeon'
                                                    ? <>
                                                    <option>동구</option>
                                                    <option>중구</option>
                                                    <option>서구</option>
                                                    <option>유성구</option>
                                                    <option>대덕구</option>
                                                    </>
                                                    : ( Location === 'Ulsan'
                                                    ? <>
                                                    <option>증구</option>
                                                    <option>남구</option>
                                                    <option>동구</option>
                                                    <option>북구</option>
                                                    <option>울주군</option>
                                                    </>
                                                    : ( Location === 'Incheon'
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
                                                    : ( Location === 'SaeJong'
                                                    ? <>
                                                    <option>세종특별자치시</option>
                                                    </>
                                                    : ( Location === 'GyeongGi'
                                                    ? <>
                                                    <option>수원시</option>
                                                    <option>성남시</option>
                                                    <option>고양시</option>
                                                    <option>용인시</option>
                                                    <option>부천시</option>
                                                    <option>안산시</option>
                                                    <option>안양시</option>
                                                    <option>남양주시</option>
                                                    <option>화성시</option>
                                                    <option>평택시</option>
                                                    <option>의정부시</option>
                                                    <option>시흥시</option>
                                                    <option>파주시</option>
                                                    <option>광명시</option>
                                                    <option>김포시</option>
                                                    <option>군포시</option>
                                                    <option>광주시</option>
                                                    <option>이천시</option>
                                                    <option>양주시</option>
                                                    <option>오산시</option>
                                                    <option>구리시</option>
                                                    <option>안성시</option>
                                                    <option>포천시</option>
                                                    <option>의왕시</option>
                                                    <option>하남시</option>
                                                    <option>여주시</option>
                                                    <option>양평군</option>
                                                    <option>동두천시</option>
                                                    <option>과천시</option>
                                                    <option>가평군</option>
                                                    <option>연천군</option>
                                                    </>
                                                    : ( Location === 'GangWon'
                                                    ? <>
                                                    <option>춘천시</option>
                                                    <option>원주시</option>
                                                    <option>강릉시</option>
                                                    <option>동해시</option>
                                                    <option>태백시</option>
                                                    <option>속초시</option>
                                                    <option>삼척시</option>
                                                    <option>홍천군</option>
                                                    <option>횡성군</option>
                                                    <option>영월군</option>
                                                    <option>평창군</option>
                                                    <option>정선군</option>
                                                    <option>철원군</option>
                                                    <option>화천군</option>
                                                    <option>양구군</option>
                                                    <option>인제군</option>
                                                    <option>고성군</option>
                                                    <option>양양군</option>
                                                    </>
                                                    : ( Location === 'ChungCheong1'
                                                    ? <>
                                                    <option>청주시</option>
                                                    <option>충주시</option>
                                                    <option>제천시</option>
                                                    <option>보은군</option>
                                                    <option>옥천군</option>
                                                    <option>영동군</option>
                                                    <option>진천군</option>
                                                    <option>괴산군</option>
                                                    <option>음성군</option>
                                                    <option>단양군</option>
                                                    <option>증평군</option>
                                                    </>
                                                    : ( Location === 'ChungCheong2'
                                                    ? <>
                                                    <option>천안시</option>
                                                    <option>공주시</option>
                                                    <option>보령시</option>
                                                    <option>아산시</option>
                                                    <option>서산시</option>
                                                    <option>논산시</option>
                                                    <option>계룡시</option>
                                                    <option>당진시</option>
                                                    <option>금산군</option>
                                                    <option>부여군</option>
                                                    <option>서천군</option>
                                                    <option>청양군</option>
                                                    <option>홍성군</option>
                                                    <option>예산군</option>
                                                    <option>태안군</option>
                                                    </>
                                                    : ( Location === 'JeongLa1'
                                                    ? <>
                                                    <option>전주시</option>
                                                    <option>군산시</option>
                                                    <option>익산시</option>
                                                    <option>정읍시</option>
                                                    <option>남원시</option>
                                                    <option>김제시</option>
                                                    <option>완주군</option>
                                                    <option>진안군</option>
                                                    <option>무주군</option>
                                                    <option>장수군</option>
                                                    <option>임실군</option>
                                                    <option>순창군</option>
                                                    <option>고창군</option>
                                                    <option>부안군</option>
                                                    </>
                                                    : ( Location === 'JeongLa2'
                                                    ? <>
                                                    <option>목포시</option>
                                                    <option>여수시</option>
                                                    <option>순천시</option>
                                                    <option>나주시</option>
                                                    <option>광양시</option>
                                                    <option>담양군</option>
                                                    <option>곡성군</option>
                                                    <option>구례군</option>
                                                    <option>고흥군</option>
                                                    <option>보성군</option>
                                                    <option>화순군</option>
                                                    <option>장흥군</option>
                                                    <option>강진군</option>
                                                    <option>해남군</option>
                                                    <option>영암군</option>
                                                    <option>무안군</option>
                                                    <option>함평군</option>
                                                    <option>영광군</option>
                                                    <option>장성군</option>
                                                    <option>완도군</option>
                                                    <option>진도군</option>
                                                    <option>신안군</option>
                                                    </>
                                                    : ( Location === 'JeongLa2'
                                                    ? <>
                                                    <option>목포시</option>
                                                    <option>여수시</option>
                                                    <option>순천시</option>
                                                    <option>나주시</option>
                                                    <option>광양시</option>
                                                    <option>담양군</option>
                                                    <option>곡성군</option>
                                                    <option>구례군</option>
                                                    <option>고흥군</option>
                                                    <option>보성군</option>
                                                    <option>화순군</option>
                                                    <option>장흥군</option>
                                                    <option>강진군</option>
                                                    <option>해남군</option>
                                                    <option>영암군</option>
                                                    <option>무안군</option>
                                                    <option>함평군</option>
                                                    <option>영광군</option>
                                                    <option>장성군</option>
                                                    <option>완도군</option>
                                                    <option>진도군</option>
                                                    <option>신안군</option>
                                                    </>
                                                    : ( Location === 'GyeongSang1'
                                                    ? <>
                                                    <option>포항시</option>
                                                    <option>경주시</option>
                                                    <option>김천시</option>
                                                    <option>안동시</option>
                                                    <option>구미시</option>
                                                    <option>영주시</option>
                                                    <option>영천시</option>
                                                    <option>상주시</option>
                                                    <option>문경시</option>
                                                    <option>경산시</option>
                                                    <option>군위군</option>
                                                    <option>의성군</option>
                                                    <option>청송군</option>
                                                    <option>영양군</option>
                                                    <option>영덕군</option>
                                                    <option>청도군</option>
                                                    <option>고령군</option>
                                                    <option>성주군</option>
                                                    <option>칠곡군</option>
                                                    <option>예천군</option>
                                                    <option>봉화군</option>
                                                    <option>울진군</option>
                                                    <option>울릉군</option>
                                                    </>
                                                    : ( Location === 'GyeongSang2'
                                                    ? <>
                                                    <option>창원시</option>
                                                    <option>진주시</option>
                                                    <option>통영시</option>
                                                    <option>사천시</option>
                                                    <option>김해시</option>
                                                    <option>밀양시</option>
                                                    <option>거제시</option>
                                                    <option>양산시</option>
                                                    <option>의령군</option>
                                                    <option>함안군</option>
                                                    <option>창녕군</option>
                                                    <option>고성군</option>
                                                    <option>하동군</option>
                                                    <option>남해군</option>
                                                    <option>산청군</option>
                                                    <option>함양군</option>
                                                    <option>거창군</option>
                                                    <option>합천군</option>
                                                    </>
                                                    : ( Location === 'Jeju'
                                                    ? <>
                                                    <option>제주특별자치도</option>
                                                    </>
                                                    : 'GyeongSang1')))))))))))))))))
                                        }
                                </select>
                                <h6>2. 거주 기간</h6>
                                <div class = ""><input type = "text"/>개월</div>
                                <div class = "score">점수 : <span class = "option2_result"></span></div>
                            </div>
                            <div class = "option3">
                                <h5>(3) 주택청약종합저축 납입인정 횟수</h5>
                                <div>
                                    <input onChange = {changOption3} type = "text" />회
                                </div>
                                <div class = "score">점수 : <span class = "option3_result">{Result3}</span></div>
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