import React,{useContext,useReducer,useEffect,useState} from 'react'
import Store from '../../Store/context'
import reducer from '../../Store/reducer'
import {postCalculator1} from '../../api/api'

const Calculator1 = ()=>{
    const {state,dispatch} = useContext(Store)

    const [Location, setLocation] = useState(1)
    const [Location2, setLocation2] = useState(1)
    const [apply, setapply] = useState(1)

    const [Income, setIncome] = useState(1)
    const [Person, setPerson] = useState(1)
    const [Cost, setCost] = useState(1)

    const [option3, setOption3] = useState(1)
    const [Result1, setResult1] = useState(1)
    const [Result3, setResult3] = useState(1)

    const changOption3 = (e) => {
        setOption3(e.target.value)

    }
    const ChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    const ChangeIncome = (e) => {
        setIncome(e.target.value)
    }

    const ChangePerson = (e) => {
        setPerson(e.target.value)
    }
    const ChangeCost = (e) => {
        setCost(e.target.value)
    }

    const HandleResult3 = (e) => {
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

    
    const HandleResult1 = (e) => {
        {
            Income == "two" && Person == "three" && Cost <= 4824128
            ? setResult1(3)
            : ( Income == "one" && Person == "three" && Cost <= 4221112
                ? setResult1(3)
                : ( Income == "two" && Person == "three" && Cost > 4824128 && Cost <= 6633176
                    ? setResult1(2)
                    : ( Income == "one" && Person == "three" && Cost > 4221112 && Cost <= 6030160
                    ? setResult1(2)
                    : ( Income == "two" && Person == "three" && Cost > 6633176
                    ? setResult1(1)
                    : ( Income == "one" && Person == "three" && Cost > 6030160
                    ? setResult1(1)
                    : ( Income == "two" && Person == "four" && Cost <= 5675364 || Income == "two" && Person == "five" && Cost <= 5675364
                    ? setResult1(3)
                    : ( Income == "one" && Person == "four" && Cost <= 4965944 || Income == "one" && Person == "five" && Cost <= 4965944
                    ? setResult1(3)
                    : ( Income == "two" && Person == "four" && Cost > 5675364 && Cost <= 7803626 || Income == "two" && Person == "five" && Cost > 5675364 && Cost <= 7803626
                    ? setResult1(2)
                    : ( Income == "one" && Person == "four" && Cost > 4965944 && Cost <= 7094205 || Income == "one" && Person == "five" && Cost > 4965944 && Cost <= 7094205
                    ? setResult1(2)
                    : ( Income == "two" && Person == "four" && Cost > 7803626 || Income == "two" && Person == "five" && Cost > 7803626
                    ? setResult1(1)
                    : ( Income == "one" && Person == "four" && Cost > 7094205 || Income == "one" && Person == "five" && Cost > 7094205
                    ? setResult1(1)
                    : ( Income == "two" && Person == "six" && Cost <= 5914918
                    ? setResult1(3)
                    : ( Income == "one" && Person == "six" && Cost <= 5175553
                    ? setResult1(3)
                    : ( Income == "two" && Person == "six" && Cost > 5914918 && Cost <= 8133012
                    ? setResult1(2)
                    : ( Income == "one" && Person == "six" && Cost > 5175553 && Cost <= 7393647
                    ? setResult1(2)
                    : ( Income == "two" && Person == "six" && Cost > 8133012
                    ? setResult1(1)
                    : ( Income == "one" && Person == "six" && Cost > 7393647
                    ? setResult1(1)
                    : ( Income == "two" && Person == "seven" && Cost <= 6222418
                    ? setResult1(3)
                    : ( Income == "one" && Person == "seven" && Cost <= 5444616
                    ? setResult1(3)
                    : ( Income == "two" && Person == "seven" && Cost > 6222418 && Cost <= 8555825
                    ? setResult1(2)
                    : ( Income == "one" && Person == "seven" && Cost > 5444616 && Cost <= 7778023
                    ? setResult1(2)
                    : ( Income == "two" && Person == "seven" && Cost > 8555825 
                    ? setResult1(1)
                    : ( Income == "one" && Person == "seven" && Cost > 7778023 
                    ? setResult1(1)
                    : ( Income == "two" && Person == "eight" && Cost <= 6529919 
                    ? setResult1(3)
                    : ( Income == "one" && Person == "eight" && Cost <= 5713679 
                    ? setResult1(3)
                    : ( Income == "two" && Person == "eight" && Cost > 6529919 && Cost <= 8978639 
                    ? setResult1(2)
                    : ( Income == "one" && Person == "eight" && Cost > 5713679 && Cost <= 8162399 
                    ? setResult1(2)
                    : ( Income == "two" && Person == "eight" && Cost > 8978639 
                    ? setResult1(1)
                    : ( Income == "one" && Person == "eight" && Cost > 8162399 
                    ? setResult1(1)
                    : ''
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    ))
                    ))
                
    }}

    const ChangeLocation2 = (e) => {
        setLocation2(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postCalculator1({income:Result1,Resident_period:1,Resident_Location:'d',Number_Of_Payment:Result3,Applying_Location:apply})

    }

    const Applying_Location = (e) => {
        setapply(e.target.value)
    }

    return(
        <>
            <div class = "subscription_wrap w100">
                <div class = "subscription w1200">
                    <div class>
                    <form onSubmit = {handleSubmit}>
                        <div class = "calculator_content1">
                            <div class = "option1">
                                <h5>(1) 가구소득</h5><input onClick = {HandleResult1} class = "BTN" type = "button" value = "결과"/>
                                <h6>1. 배우자 소득 유무</h6>
                                <select onClick = {ChangeIncome}>
                                    <option value = "two">맞벌이</option>
                                    <option value = "one">외벌이</option>
                                    <option value = "zero">둘 다 무직</option>
                                </select>
                                <h6>2. 가구 수</h6>
                                <select onClick = {ChangePerson}>
                                    <option value = "three">3인 이하</option>
                                    <option value = "four">4인</option>
                                    <option value = "five">5인</option>
                                    <option value = "six">6인</option>
                                    <option value = "seven">7인</option>
                                    <option value = "eight">8인</option>
                                </select>
                                <h6>3. 소득금액</h6>
                                    <div><input class = "option1" type = "text" onChange = {ChangeCost}/>원</div>
                                <div class = "score">점수 : <span class = "option1_result">{Result1}</span></div>
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
                                <h5>(3) 주택청약종합저축 납입인정 횟수</h5><input onClick = {HandleResult3} class = "BTN" type = "button" value = "결과"/>
                                <div>
                                    <input onChange = {changOption3} type = "text" />회
                                </div>
                                <div class = "score">점수 : <span class = "option3_result">{Result3}</span></div>
                            </div>
                            <div class = "score totalScore inline-block">총점 : <span class = "total_result">{Result1+Result3}</span></div><input class = "submitBTN" value = "저장하고 지원내역 보기" type = "submit"/>
                            <div class = "score totalScore">지원 지역</div>
                            <select class = "Select_Box" onClick = {ChangeLocation2}>
                                <option value = "first">1차 지원(7월)</option>
                                <option value = "second">2차 지원(10월)</option>
                                <option value = "third">3차 지원(11월)</option>
                                <option value = "fourth">4차 지원(12월)</option>
                            </select>
                            <select class = "Select_Box" onClick = {Applying_Location}>
                                {
                                    Location2 == 'first'
                                    ? <>
                                    <option value = "인천계양">인천계양</option>
                                    <option value = "남양주진접2">남양주진접2</option>
                                    <option value = "성남복정1">성남복정1</option>
                                    <option value = "의왕청계2">의왕청계2</option>
                                    <option value = "위례">위례</option></>
                                    : (
                                        Location2 == 'second'
                                        ? <>
                                             <option value = "남양주왕숙2">남양주왕숙2</option>
                                    <option value = "성남신촌">성남신촌</option>
                                    <option value = "성남낙생">성남낙생</option>
                                    <option value = "성남복정2">성남복정2</option>
                                    <option value = "의정부우정">의정부우정</option>
                                    <option value = "군포대야미">군포대야미</option>
                                    <option value = "의왕월암">의왕월암</option>
                                    <option value = "수원당수">수원당수</option>
                                    <option value = "부천원종">부천원종</option>
                                    <option value = "인천검단">인천검단</option>
                                    <option value = "파주운정3">파주운정3</option></>
                                        : (
                                            Location2 == 'third'
                                            ? <>
                                            <option value = "하남교산">하남교산</option>
                                   <option value = "시흥하중">시흥하중</option>
                                   <option value = "양주회천">양주회천</option>
                                   <option value = "과천주암">과천주암</option></>
                                            : (
                                                Location2 == 'fourth'
                                                ? <> <option value = "남양주왕숙">남양주왕숙</option>
                                                <option value = "부천대장">부천대장</option>
                                                <option value = "고양창릉">고양창릉</option>
                                                <option value = "부천역곡">부천역곡</option>
                                                <option value = "시흥거모">시흥거모</option>
                                                <option value = "안산장상">안산장상</option>
                                                <option value = "안산신길2">안산신길2</option>
                                                <option value = "동작구수방사">동작구수방사</option>
                                                <option value = "구리갈매역세권">구리갈매역세권</option>
                                                <option value = "고앙장항">고앙장항</option></>
                                                :'bye'
                                            )
                                        )
                                    )
                                }
                            </select>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator1