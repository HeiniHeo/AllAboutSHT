import React, { useContext, useReducer, useEffect, useState } from 'react'
import Store from '../../Store/context'
import reducer from '../../Store/reducer'
import AreaComponent from './Location/AreaComponent'
import { LocationComponent } from './Location/LocationComponent'
import { postCalculator1 } from '../../api/api'
// import LocationComponent from './Location/LocationComponent'
import { base_url } from '../../Store/Allurl'
import data from './Location/data.json'

const Calculator1 = () => {
    const { state, dispatch } = useContext(Store)

    const [Location, setLocation] = useState('군')
    const [Location2, setLocation2] = useState('1차')
    const [apply, setapply] = useState('.')
    const [dbLocation, setdbLocation] = useState('.')


    const [Income, setIncome] = useState('.')
    const [Person, setPerson] = useState('.')
    const [Cost, setCost] = useState('.')



    const [option2, setOption2] = useState('.')
    const [option3, setOption3] = useState('.')

    const [Result1, setResult1] = useState(0)
    const [Result1_Alert, setResult1_Alert] = useState('')
    const [Result2, setResult2] = useState(0)
    const [Result2_Alert, setResult2_Alert] = useState('')
    const [Result3, setResult3] = useState(0)
    const [Result3_Alert, setResult3_Alert] = useState('')

    const [Result4_Alert, setResult4_Alert] = useState('')


    const [alert, setAlert] = useState('지원 가능 여부입니다')
    const [className, setClassName] = useState('')

    const ChangeAlert = (e) => {
        {
            apply == '인천계양' && Location == 'Incheon'
                ?
                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 104호 입니다.')
                : (apply == '인천계양' && Location != 'Incheon'
                    ?
                    setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 52호 입니다.')
                    : (apply == '남양주진접2' && Location == 'GyeongGi' && dbLocation == '남양주시' && option2 >= 12
                        ?
                        setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 134호 입니다.')
                        : (apply == '남양주진접2' && Location == 'GyeongGi' && dbLocation != '남양주시' && option2 >= 6
                            ?
                            setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 94호 입니다.')
                            : (apply == '남양주진접2' && Location != 'GyeongGi'
                                ?
                                setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 67호 입니다.')
                                : (apply == '성남복정1' && dbLocation == '성남시' && option2 >= 24
                                    ?
                                    setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 134호 입니다.')
                                    : apply == '성남복정1' && dbLocation != '성남시'
                                        ?
                                        setAlert('지원불가능합니다.')
                                        : (apply == '의왕청계2' && dbLocation == '의왕시' && option2 >= 24
                                            ?
                                            setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 92호 입니다.')
                                            : (apply == '의왕청계2' && dbLocation != '의왕시'
                                                ?
                                                setAlert('지원불가능합니다.')
                                                : (apply == '위례' && Location == 'GyeongGi' && dbLocation == '성남시' && option2 >= 24
                                                    ?
                                                    setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 127호 입니다.')
                                                    : (apply == '위례' && Location == 'GyeongGi' && dbLocation != '성남시' && option2 >= 24
                                                        ?
                                                        setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 89호 입니다.')
                                                        : (apply == '위례' && Location != 'GyeongGi' && option2 >= 24
                                                            ?
                                                            setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 63호 입니다.')
                                                            : (apply == '성남낙생' && dbLocation == '성남시' && option2 >= 24
                                                                ?
                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 270호 입니다.')
                                                                : (apply == '성남낙생' && dbLocation != '성남시'
                                                                    ?
                                                                    setAlert('지원불가능합니다.')
                                                                    : (apply == '성남복정2' && dbLocation == '성남시' && option2 >= 24
                                                                        ?
                                                                        setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 180호 입니다.')
                                                                        : (apply == '성남복정2' && dbLocation != '성남시'
                                                                            ?
                                                                            setAlert('지원불가능합니다.')
                                                                            : (apply == '군포대야미' && dbLocation == '군포시' && option2 >= 24
                                                                                ?
                                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 300호 입니다.')
                                                                                : (apply == '군포대야미' && dbLocation != '군포시'
                                                                                    ?
                                                                                    setAlert('지원불가능합니다.')
                                                                                    : apply == '의왕월암' && dbLocation == '의왕시' && option2 >= 24
                                                                                        ?
                                                                                        setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 240호 입니다.')
                                                                                        : (apply == '의왕월암' && dbLocation != '의왕시'
                                                                                            ?
                                                                                            setAlert('지원불가능합니다.')
                                                                                            : (apply == '수원당수' && Location == 'GyeongGi' && dbLocation == '수원시' && option2 >= 24
                                                                                                ?
                                                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 150호 입니다.')
                                                                                                : apply == '수원당수' && Location == 'GyeongGi' && dbLocation != '수원시' && option2 >= 24
                                                                                                    ?
                                                                                                    setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 105호 입니다.')
                                                                                                    : (apply == '수원당수' && Location != 'GyeongGi'
                                                                                                        ?
                                                                                                        setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 75호 입니다.')
                                                                                                        : apply == '부천원종' && dbLocation == '부천시' && option2 >= 24
                                                                                                            ?
                                                                                                            setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 120호 입니다.')
                                                                                                            : (apply == '부천원종' && dbLocation != '부천시'
                                                                                                                ?
                                                                                                                setAlert('지원불가능합니다.')
                                                                                                                : (apply == '시흥하중' && dbLocation == '시흥시' && option2 >= 12
                                                                                                                    ?
                                                                                                                    setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 210호 입니다.')
                                                                                                                    : (apply == '시흥하중' && dbLocation != '시흥시'
                                                                                                                        ?
                                                                                                                        setAlert('당해 미달시 지원 가능합니다.')
                                                                                                                        : (apply == '과천주암' && dbLocation == '과천시' && option2 >= 24
                                                                                                                            ?
                                                                                                                            setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 420호 입니다.')
                                                                                                                            : (apply == '과천주암' && dbLocation != '과천시'
                                                                                                                                ?
                                                                                                                                setAlert('당해 미달시 지원 가능합니다.')
                                                                                                                                : (apply == '남양주왕숙2' && Location == 'GyeongGi' && dbLocation == '남양주시' && option2 >= 12
                                                                                                                                    ?
                                                                                                                                    setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 210호 입니다.')
                                                                                                                                    : (apply == '남양주왕숙2' && Location == 'GyeongGi' && dbLocation != '남양주시' && option2 >= 6
                                                                                                                                        ?
                                                                                                                                        setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 147호 입니다.')
                                                                                                                                        : (apply == '남양주왕숙2' && Location != 'GyeongGi'
                                                                                                                                            ?
                                                                                                                                            setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 105호 입니다.')
                                                                                                                                            : (apply == '부천대장' && Location == 'GyeongGi' && dbLocation == '부천시' && option2 >= 12
                                                                                                                                                ?
                                                                                                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 300호 입니다.')
                                                                                                                                                : (apply == '부천대장' && Location == 'GyeongGi' && dbLocation != '부천시' && option2 >= 6
                                                                                                                                                    ?
                                                                                                                                                    setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 210호 입니다.')
                                                                                                                                                    : (apply == '부천대장' && Location != 'GyeongGi'
                                                                                                                                                        ?
                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 150호 입니다.')
                                                                                                                                                        : (apply == '고양창릉' && Location == 'GyeongGi' && dbLocation == '고양시' && option2 >= 12
                                                                                                                                                            ?
                                                                                                                                                            setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 180호 입니다.')
                                                                                                                                                            : (apply == '고양창릉' && Location == 'GyeongGi' && dbLocation != '고양시' && option2 >= 6
                                                                                                                                                                ?
                                                                                                                                                                setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 126호 입니다.')
                                                                                                                                                                : (apply == '고양창릉' && Location != 'GyeongGi'
                                                                                                                                                                    ?
                                                                                                                                                                    setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 90호 입니다.')
                                                                                                                                                                    : (apply == '부천역곡' && Location == 'GyeongGi' && dbLocation == '부천시' && option2 >= 12
                                                                                                                                                                        ?
                                                                                                                                                                        setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 270호 입니다.')
                                                                                                                                                                        : (apply == '부천역곡' && Location == 'GyeongGi' && dbLocation != '부천시' && option2 >= 6
                                                                                                                                                                            ?
                                                                                                                                                                            setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 189호 입니다.')
                                                                                                                                                                            : (apply == '부천역곡' && Location != 'GyeongGi'
                                                                                                                                                                                ?
                                                                                                                                                                                setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 135호 입니다.')
                                                                                                                                                                                : (apply == '시흥거모' && Location == 'GyeongGi' && dbLocation == '시흥시' && option2 >= 12
                                                                                                                                                                                    ?
                                                                                                                                                                                    setAlert('당해기준 충족자 이시네요!1단계 공급물량은 총 240호 입니다.')
                                                                                                                                                                                    : (apply == '시흥거모' && Location == 'GyeongGi' && dbLocation != '시흥시' && option2 >= 6
                                                                                                                                                                                        ?
                                                                                                                                                                                        setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 168호 입니다.')
                                                                                                                                                                                        : (apply == '시흥거모' && Location != 'GyeongGi'
                                                                                                                                                                                            ?
                                                                                                                                                                                            setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 120호 입니다.')
                                                                                                                                                                                            : (apply == '안산장상' && Location == 'GyeongGi' && dbLocation == '안산시' && option2 >= 12
                                                                                                                                                                                                ?
                                                                                                                                                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 90호 입니다.')
                                                                                                                                                                                                : (apply == '안산장상' && Location == 'GyeongGi' && dbLocation != '안산시' && option2 >= 6
                                                                                                                                                                                                    ?
                                                                                                                                                                                                    setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 63호 입니다.')
                                                                                                                                                                                                    : (apply == '안산장상' && Location != 'GyeongGi'
                                                                                                                                                                                                        ?
                                                                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 45호 입니다.')
                                                                                                                                                                                                        : (apply == '안산신길2' && Location == 'GyeongGi' && dbLocation == '안산시' && option2 >= 12
                                                                                                                                                                                                            ?
                                                                                                                                                                                                            setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 180호 입니다.')
                                                                                                                                                                                                            : (apply == '안산신길2' && Location == 'GyeongGi' && dbLocation != '안산시' && option2 >= 6
                                                                                                                                                                                                                ?
                                                                                                                                                                                                                setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 126호 입니다.')
                                                                                                                                                                                                                : (apply == '안산신길2' && Location != 'GyeongGi'
                                                                                                                                                                                                                    ?
                                                                                                                                                                                                                    setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 90호 입니다.')
                                                                                                                                                                                                                    : (apply == '동작구수방사' && Location == 'seoul' && option2 >= 24
                                                                                                                                                                                                                        ?
                                                                                                                                                                                                                        setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 60호 입니다.')
                                                                                                                                                                                                                        : (apply == '동작구수방사' && Location != 'seoul'
                                                                                                                                                                                                                            ?
                                                                                                                                                                                                                            setAlert('당해 지원 미달시 지원 가능 합니다!')
                                                                                                                                                                                                                            : apply == '구리갈매역세권' && Location == 'GyeongGi' && dbLocation == '구리시' && option2 >= 24
                                                                                                                                                                                                                                ?
                                                                                                                                                                                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 330호 입니다.')
                                                                                                                                                                                                                                : (apply == '구리갈매역세권' && Location == 'GyeongGi' && dbLocation != '구리시' && option2 >= 24
                                                                                                                                                                                                                                    ?
                                                                                                                                                                                                                                    setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 231호 입니다.')
                                                                                                                                                                                                                                    : (apply == '구리갈매역세권' && Location != 'GyeongGi'
                                                                                                                                                                                                                                        ?
                                                                                                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 165호 입니다.')
                                                                                                                                                                                                                                        : (apply == '성남금토' && dbLocation == '성남시' && option3 >= 24
                                                                                                                                                                                                                                            ?
                                                                                                                                                                                                                                            setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 210호 입니다.')
                                                                                                                                                                                                                                            : apply == '성남금토' && dbLocation != '성남시'
                                                                                                                                                                                                                                                ?
                                                                                                                                                                                                                                                setAlert('지원불가능합니다.')
                                                                                                                                                                                                                                                :
                                                                                                                                                                                                                                                ''))))))))))))))))))))))))))))))))))))))))))))))))))

        }
    }

    const changOption3 = (e) => {
        setOption3(e.target.value)

    }
    const changeOption2 = (e) => {
        setOption2(e.target.value)
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

    const option3_function0 = (e) => (
        setResult3(0),
        setResult3_Alert('')
    )

    const option3_function1 = (e) => (
        setResult3(1),
        setResult3_Alert('')
    )

    const option3_function2 = (e) => (
        setResult3(2),
        setResult3_Alert('')
    )

    const option3_function3 = (e) => (
        setResult3(3),
        setResult3_Alert('')
    )
    const HandleResult3 = (e) => {
        {
            option3 < 6
                ? option3_function0()
                : (option3 < 12
                    ? option3_function1()
                    : (option3 >= 12 && option3 < 24
                        ? option3_function2()
                        : (option3 >= 24
                            ? option3_function3()
                            : (option3 == '.'
                                ? setResult3_Alert('항목을 입력해주세요')
                                : ''
                            )

                        )
                    )
                )
        }
    }

    const HandleResult2 = (e) => {
        {
            Location == 'Incheon' && apply == '인천계양' && option2 >= 24
            ? setResult2(3)
            : (Location == 'Incheon' && apply == '인천계양' && option2 < 24 && option2 >= 12
            ? setResult2(2)
            : (Location == 'Incheon' && apply == '인천계양' && option2 < 12
            ? setResult2(1)
            : (Location == 'seoul' && apply == '동작구수방사' && option2 >= 24
            ? setResult2(3)
            : (Location == 'seoul' && apply == '동작구수방사' && option2 < 24 && option2 >= 12
            ? setResult2(2)
            : (Location == 'seoul' && apply == '동작구수방사' && option2 < 12
            ? setResult2(1)
            : (Location == 'GyeongGi' && apply != '동작구수방사' && apply != '인천계양' && option2 >= 24
            ? setResult2(3)
            : (Location == 'GyeongGi' && apply != '동작구수방사' && apply != '인천계양' && option2 < 24 && option2 >= 12
            ? setResult2(2)
            : (Location == 'GyeongGi' && apply != '동작구수방사' && apply != '인천계양' && option2 < 12
            ? setResult2(1)
            : (Location == '.' || apply == '.' || option2 == '.' || dbLocation == '.' || Location2 == '.'
            ? setResult2_Alert('모든 항목을 입력해주세요')
            : (
            Location != '.' || apply != '.' || option2 != '.' || dbLocation != '.' || Location2 != '.'
            ? setResult2_Alert('')
            : setResult2(0)
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
        }
    }

    const HandleResult1 = (e) => {
        HandleResult11()
            , HandleResult12()
    }
    const HandleResult11 = async (e) => {

        let options = {
            method: 'GET'
        }

        let result = await fetch(`http://localhost/IncomeScores?Income=${Income}&Person=${Person}&Cost=${Cost}`, options)
        const data = await result.json()

        dispatch({ type: 'Income_Score', payload: data[0].Income_Score })
        console.log(data[0].Income_Score)


    }

    const HandleResult12 = (e) => {
        {
            Income != "." && Person != "." && Cost != '.'
                ? setResult1_Alert('')
                : (Income == 0 || Person == 0 || Cost == '.'
                    ? setResult1_Alert('모든 항목을 입력해주세요')
                    : '')
        }
    }


    const ChangeLocation2 = (e) => {
        setLocation2(e.target.value)
    }

    const Applying_Location = (e) => {
        setapply(e.target.value)
    }

    const dbLocationset = (e) => {
        setdbLocation(e.target.value)
    }


    const successSubmit = (e) => {
        setResult4_Alert('결과가 저장되었습니다!'),
            setClassName('blue'),
            postCalculator1({ income: Result1, Resident_period: Result2, Resident_Location1: Location, Resident_Location2: dbLocation, Number_Of_Payment: Result3, Applying_Location: apply })

    }
    const handleSubmit = (e) => {

        e.preventDefault()
        {
            Result1_Alert == '모든 항목을 입력해주세요' || Result2_Alert == '모든 항목을 입력해주세요' || Result3_Alert == '모든 항목을 입력해주세요' || Result1 == 0 || Result3 == 0 || Location == '.' || apply == '.' || option3 == '.' || dbLocation == '.' || Location2 == '.'
                ? setResult4_Alert('모든 항목의 점수를 내주세요')
                : successSubmit()
        }

    }

    return (
        <>
            <div className="subscription_wrap w100">
                <div className="subscription w1200">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="calculator_content1">
                                <div className="option1">
                                    <h5>(1) 가구소득</h5><input onClick={HandleResult1} className="BTN" type="button" value="점수 계산" />
                                    <div>

                                    </div>
                                    <div className="inline-block">
                                        <h6>1. 배우자 소득 유무</h6>

                                        <select onChange={ChangeIncome}>
                                            <option value="two">맞벌이</option>
                                            <option value="one">외벌이</option>
                                            <option value="zero">둘 다 무직</option>
                                        </select>
                                    </div>
                                    <div className="inline-block margin-left">
                                        <h6>2. 가구 수</h6>
                                        <select onChange={ChangePerson}>
                                            <option value="three">3인 이하</option>
                                            <option value="four">4인</option>
                                            <option value="five">5인</option>
                                            <option value="six">6인</option>
                                            <option value="seven">7인</option>
                                            <option value="eight">8인</option>
                                        </select>
                                    </div>
                                    <div className="inline-block margin-left">
                                        <h6>3. 소득금액</h6>
                                        <div><input className="option1" type="text" onChange={ChangeCost} />원</div>
                                    </div>
                                    <div className="score">점수 : <span className="option1_result">{Result1}</span></div>
                                </div>
                                <div className="option3">
                                    <h5>(2) 주택청약종합저축 납입인정 횟수</h5>
                                    <div className="inline-block">
                                        <input onChange={changOption3} type="text" />회
                                    </div>
                                    <input onClick={HandleResult3} className="BTN" type="button" value="점수 계산" />
                                    <div className="score">점수 : <span className="option3_result">{Result3}</span></div>
                                </div>
                                <div className="option2">
                                    <h5>(3) 해당 시*도 연속 거주기간</h5><input onClick={HandleResult2} className="BTN" type="button" value="점수 계산" />
                                    <div></div>
                                    <div className="inline-block">
                                        <h6>1. 거주 지역</h6>
                                        <select defaultValue={"시/도"} onChange={ChangeLocation}>
                                            <AreaComponent />
                                        </select>
                                        <select defaultValue={"군"} onChange={dbLocationset}>
                                            <LocationComponent location={Location} />
                                        </select>
                                    </div>
                                    <div className="inline-block margin-left">
                                        <h6>2. 거주 기간</h6>
                                        <div className=""><input onChange={changeOption2} type="text" />개월</div>
                                    </div>
                                </div>
                                <div className="score totalScore apply">지원 지역</div>
                                <select className="Select_Box" defaultValue={"1차"} onChange={ChangeLocation2}>
                                    <option value="1차">1차 지원(7월)</option>
                                    <option value="2차">2차 지원(10월)</option>
                                    <option value="3차">3차 지원(11월)</option>
                                    <option value="4차">4차 지원(12월)</option>
                                </select>
                                <select className="Select_Box" onChange={Applying_Location}>
                                    <option>내용을선택해주세요.</option>
                                    {
                                       data.filter(v => Location2 == v.session )
                                       .map((v,k)=><option key={k} value={v.name} >{v.name}</option>)  
                                    }
                                </select>
                                <div className="score">점수 : <span className="option1_result">{Result2}</span><span className="red">{Result2_Alert}</span></div>
                                <div className="block"><div className="score totalScore inline-block">총점 : <span className="total_result">{Result1 + Result2 + Result3}</span>/9</div><input className="submitBTN" value="결과 보기" onClick={ChangeAlert} type="submit" /></div>
                                <div className="result4_alert red"><span className={className}>{Result4_Alert}</span></div>
                            </div>
                            <div className="LocationBox2">{alert}</div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator1