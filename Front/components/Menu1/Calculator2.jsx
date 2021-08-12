import { useState } from 'react'
import { postCalculator2 } from '../../api/api'
import AreaComponent from './Location/AreaComponent'
import { LocationComponent } from './Location/LocationComponent'
import data from './Location/data.json'

const Calculator2 = () => {

    const [Location, setLocation] = useState('군')
    const [Location2, setLocation2] = useState('1차')
    const [apply, setapply] = useState('.')
    const [dbLocation, setdbLocation] = useState('.')

    const [option1, setOption1] = useState('.')
    const [option2, setOption2] = useState('.')
    const [option3, setOption3] = useState('.')
    const [option4, setOption4] = useState('.')

    const [Result1, setResult1] = useState(0)
    const [Result1_Alert, setResult1_Alert] = useState('')
    const [Result2, setResult2] = useState(0)
    const [Result2_Alert, setResult2_Alert] = useState('')
    const [Result3, setResult3] = useState(0)
    const [Result3_Alert, setResult3_Alert] = useState('')
    const [Result4, setResult4] = useState(0)
    const [Result4_Alert, setResult4_Alert] = useState('')
    const [Result5_Alert, setResult5_Alert] = useState('')

    const [alert, setAlert] = useState('지원 가능 여부입니다')
    const [className, setClassName] = useState('')

    const Applying_Location = (e) => {
        setapply(e.target.value)
    }

    const changOption1 = (e) => {
        setOption1(e.target.value)
        console.log(option1)
    }

    const Result1_function = (e) => {
        setResult1(1),
            setResult1_Alert('')

    }
    const Result2_function = (e) => {
        setResult1(2),
            setResult1_Alert('')

    }
    const Result3_function = (e) => {
        setResult1(3),
            setResult1_Alert('')

    }
    const HandleResult1 = (e) => {
        {
            option1 == 1
                ? Result1_function()
                : (option1 == 2
                    ? Result2_function()
                    : (option1 >= 3
                        ? Result3_function()
                        : (option1 == '.'
                            ? setResult1_Alert('항목을 입력해주세요')
                            : '')
                    )
                )
        }
    }
    const changeOption3 = (e) => {
        setOption3(e.target.value)
    }
    const changOption2 = (e) => {
        setOption2(e.target.value)
    }
    const Result0_function = (e) => {
        setResult2(0),
            setResult2_Alert('')

    }
    const Result4_function = (e) => {
        setResult2(1),
            setResult2_Alert('')

    }
    const Result5_function = (e) => {
        setResult2(2),
            setResult2_Alert('')

    }
    const Result6_function = (e) => {
        setResult2(3),
            setResult2_Alert('')

    }
    const HandleResult2 = (e) => {
        {
            option2 == "-"
                ? Result0_function()
                : (option2 < 12
                    ? Result4_function()
                    : (option2 >= 12 && option2 < 36
                        ? Result5_function()
                        : (option2 >= 36
                            ? Result6_function()
                            : (option1 == '.'
                                ? setResult2_Alert('항목을 입력해주세요')
                                : '')
                        )
                    )
                )
        }
    }
    const changOption4 = (e) => {

        setOption4(e.target.value)
    }

    const Result7_function = (e) => {
        setResult4(0),
            setResult4_Alert('')

    }

    const Result8_function = (e) => {
        setResult4(1),
            setResult4_Alert('')

    }
    const Result9_function = (e) => {
        setResult4(2),
            setResult4_Alert('')

    }
    const Result10_function = (e) => {
        setResult4(3),
            setResult4_Alert('')

    }

    const HandleResult4 = (e) => {
        {
            option4 < 6
                ? Result7_function()
                : (option4 < 12
                    ? Result8_function()
                    : (option4 >= 12 && option4 < 24
                        ? Result9_function()
                        : (option4 >= 24
                            ? Result10_function()
                            : (option1 == '.'
                                ? setResult4_Alert('항목을 입력해주세요')
                                : '')
                        )
                    )
                )
        }
    }

    const ChangeLocation = (e) => {
        setLocation(e.target.value)
    }
    const ChangeLocation2 = (e) => {
        setLocation2(e.target.value)
    }

    const dbLocationset = (e) => {
        setdbLocation(e.target.value)
    }

    const HandleResult3 = (e) => {
        {
            Location == 'Incheon' && apply == '인천계양' && option3 >= 24
                ? setResult3(3)
                : (Location == 'Incheon' && apply == '인천계양' && option3 < 24 && option3 >= 12
                    ? setResult3(2)
                    : (Location == 'Incheon' && apply == '인천계양' && option3 < 12
                        ? setResult3(1)
                        : (Location == 'seoul' && apply == '동작구수방사' && option3 >= 24
                            ? setResult3(3)
                            : (Location == 'seoul' && apply == '동작구수방사' && option3 < 24 && option3 >= 12
                                ? setResult3(2)
                                : (Location == 'seoul' && apply == '동작구수방사' && option3 < 12
                                    ? setResult3(1)
                                    : (Location == 'GyeongGi' && apply != '동작구수방사' && apply != '인천계양' && option3 >= 24
                                        ? setResult3(3)
                                        : (Location == 'GyeongGi' && apply != '동작구수방사' && apply != '인천계양' && option3 < 24 && option3 >= 12
                                            ? setResult3(2)
                                            : (Location == 'GyeongGi' && apply != '동작구수방사' && apply != '인천계양' && option3 < 12
                                                ? setResult3(1)
                                                : (Location == '.' || apply == '.' || option3 == '.' || dbLocation == '.' || Location2 == '.'
                                                    ? setResult3_Alert('모든 항목을 입력해주세요')
                                                    : (
                                                        Location != '.' || apply != '.' || option3 != '.' || dbLocation != '.' || Location2 != '.'
                                                            ? setResult3_Alert('')
                                                            : setResult3(0)
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

    const ChangeAlert = (e) => {
        {
            apply == '인천계양' && Location == 'Incheon'
                ?
                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 237호 입니다.')
                : (apply == '인천계양' && Location != 'Incheon'
                    ?
                    setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 118호 입니다.')
                    : (apply == '남양주진접2' && Location == 'GyeongGi' && dbLocation == '남양주시' && option3 >= 12
                        ?
                        setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 305호 입니다.')
                        : (apply == '남양주진접2' && Location == 'GyeongGi' && dbLocation != '남양주시' && option3 >= 6
                            ?
                            setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 212호 입니다.')
                            : (apply == '남양주진접2' && Location != 'GyeongGi'
                                ?
                                setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 152호 입니다.')
                                : (apply == '성남복정1' && dbLocation == '성남시' && option3 >= 24
                                    ?
                                    setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 309호 입니다.')
                                    : apply == '성남복정1' && dbLocation != '성남시'
                                        ?
                                        setAlert('지원불가능합니다.')
                                        : (apply == '의왕청계2' && dbLocation == '의왕시' && option3 >= 24
                                            ?
                                            setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 212호 입니다.')
                                            : (apply == '의왕청계2' && dbLocation != '의왕시'
                                                ?
                                                setAlert('지원불가능합니다.')
                                                : (apply == '위례' && Location == 'GyeongGi' && dbLocation == '성남시' && option3 >= 24
                                                    ?
                                                    setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 291호 입니다.')
                                                    : (apply == '위례' && Location == 'GyeongGi' && dbLocation != '성남시' && option3 >= 24
                                                        ?
                                                        setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 203호 입니다.')
                                                        : (apply == '위례' && Location != 'GyeongGi' && option3 >= 24
                                                            ?
                                                            setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 146호 입니다.')
                                                            : (apply == '성남낙생' && dbLocation == '성남시' && option3 >= 24
                                                                ?
                                                                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 630호 입니다.')
                                                                : (apply == '성남낙생' && dbLocation != '성남시'
                                                                    ?
                                                                    setAlert('지원불가능합니다.')
                                                                    : (apply == '성남복정2' && dbLocation == '성남시' && option3 >= 24
                                                                        ?
                                                                        setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 420호 입니다.')
                                                                        : (apply == '성남복정2' && dbLocation != '성남시'
                                                                            ?
                                                                            setAlert('지원불가능합니다.')
                                                                            : (apply == '군포대야미' && dbLocation == '군포시' && option3 >= 24
                                                                                ?
                                                                                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 700호 입니다.')
                                                                                : (apply == '군포대야미' && dbLocation != '군포시'
                                                                                    ?
                                                                                    setAlert('지원불가능합니다.')
                                                                                    : apply == '의왕월암' && dbLocation == '의왕시' && option3 >= 24
                                                                                        ?
                                                                                        setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 560호 입니다.')
                                                                                        : (apply == '의왕월암' && dbLocation != '의왕시'
                                                                                            ?
                                                                                            setAlert('지원불가능합니다.')
                                                                                            : (apply == '수원당수' && Location == 'GyeongGi' && dbLocation == '수원시' && option3 >= 24
                                                                                                ?
                                                                                                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 350호 입니다.')
                                                                                                : apply == '수원당수' && Location == 'GyeongGi' && dbLocation != '수원시' && option3 >= 24
                                                                                                    ?
                                                                                                    setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 245호 입니다.')
                                                                                                    : (apply == '수원당수' && Location != 'GyeongGi'
                                                                                                        ?
                                                                                                        setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 175호 입니다.')
                                                                                                        : apply == '부천원종' && dbLocation == '부천시' && option3 >= 24
                                                                                                            ?
                                                                                                            setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 280호 입니다.')
                                                                                                            : (apply == '부천원종' && dbLocation != '부천시'
                                                                                                                ?
                                                                                                                setAlert('지원불가능합니다.')
                                                                                                                : (apply == '시흥하중' && dbLocation == '시흥시' && option3 >= 12
                                                                                                                    ?
                                                                                                                    setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 490호 입니다.')
                                                                                                                    : (apply == '시흥하중' && dbLocation != '시흥시'
                                                                                                                        ?
                                                                                                                        setAlert('당해 미달시 지원 가능합니다.')
                                                                                                                        : (apply == '과천주암' && dbLocation == '과천시' && option3 >= 24
                                                                                                                            ?
                                                                                                                            setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 980호 입니다.')
                                                                                                                            : (apply == '과천주암' && dbLocation != '과천시'
                                                                                                                                ?
                                                                                                                                setAlert('당해 미달시 지원 가능합니다.')
                                                                                                                                : (apply == '남양주왕숙2' && Location == 'GyeongGi' && dbLocation == '남양주시' && option3 >= 12
                                                                                                                                    ?
                                                                                                                                    setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 490호 입니다.')
                                                                                                                                    : (apply == '남양주왕숙2' && Location == 'GyeongGi' && dbLocation != '남양주시' && option3 >= 6
                                                                                                                                        ?
                                                                                                                                        setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 343호 입니다.')
                                                                                                                                        : (apply == '남양주왕숙2' && Location != 'GyeongGi'
                                                                                                                                            ?
                                                                                                                                            setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 245호 입니다.')
                                                                                                                                            : (apply == '부천대장' && Location == 'GyeongGi' && dbLocation == '부천시' && option3 >= 12
                                                                                                                                                ?
                                                                                                                                                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 700호 입니다.')
                                                                                                                                                : (apply == '부천대장' && Location == 'GyeongGi' && dbLocation != '부천시' && option3 >= 6
                                                                                                                                                    ?
                                                                                                                                                    setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 490호 입니다.')
                                                                                                                                                    : (apply == '부천대장' && Location != 'GyeongGi'
                                                                                                                                                        ?
                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 350호 입니다.')
                                                                                                                                                        : (apply == '고양창릉' && Location == 'GyeongGi' && dbLocation == '고양시' && option3 >= 12
                                                                                                                                                            ?
                                                                                                                                                            setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 420호 입니다.')
                                                                                                                                                            : (apply == '고양창릉' && Location == 'GyeongGi' && dbLocation != '고양시' && option3 >= 6
                                                                                                                                                                ?
                                                                                                                                                                setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 294호 입니다.')
                                                                                                                                                                : (apply == '고양창릉' && Location != 'GyeongGi'
                                                                                                                                                                    ?
                                                                                                                                                                    setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 210호 입니다.')
                                                                                                                                                                    : (apply == '부천역곡' && Location == 'GyeongGi' && dbLocation == '부천시' && option3 >= 12
                                                                                                                                                                        ?
                                                                                                                                                                        setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 630호 입니다.')
                                                                                                                                                                        : (apply == '부천역곡' && Location == 'GyeongGi' && dbLocation != '부천시' && option3 >= 6
                                                                                                                                                                            ?
                                                                                                                                                                            setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 441호 입니다.')
                                                                                                                                                                            : (apply == '부천역곡' && Location != 'GyeongGi'
                                                                                                                                                                                ?
                                                                                                                                                                                setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 315호 입니다.')
                                                                                                                                                                                : (apply == '시흥거모' && Location == 'GyeongGi' && dbLocation == '시흥시' && option3 >= 12
                                                                                                                                                                                    ?
                                                                                                                                                                                    setAlert('당해기준 충족자 이시네요!2단계 공급물량은 총 560호 입니다.')
                                                                                                                                                                                    : (apply == '시흥거모' && Location == 'GyeongGi' && dbLocation != '시흥시' && option3 >= 6
                                                                                                                                                                                        ?
                                                                                                                                                                                        setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 392호 입니다.')
                                                                                                                                                                                        : (apply == '시흥거모' && Location != 'GyeongGi'
                                                                                                                                                                                            ?
                                                                                                                                                                                            setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 280호 입니다.')
                                                                                                                                                                                            : (apply == '안산장상' && Location == 'GyeongGi' && dbLocation == '안산시' && option3 >= 12
                                                                                                                                                                                                ?
                                                                                                                                                                                                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 210호 입니다.')
                                                                                                                                                                                                : (apply == '안산장상' && Location == 'GyeongGi' && dbLocation != '안산시' && option3 >= 6
                                                                                                                                                                                                    ?
                                                                                                                                                                                                    setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 147호 입니다.')
                                                                                                                                                                                                    : (apply == '안산장상' && Location != 'GyeongGi'
                                                                                                                                                                                                        ?
                                                                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 105호 입니다.')
                                                                                                                                                                                                        : (apply == '안산신길2' && Location == 'GyeongGi' && dbLocation == '안산시' && option3 >= 12
                                                                                                                                                                                                            ?
                                                                                                                                                                                                            setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 420호 입니다.')
                                                                                                                                                                                                            : (apply == '안산신길2' && Location == 'GyeongGi' && dbLocation != '안산시' && option3 >= 6
                                                                                                                                                                                                                ?
                                                                                                                                                                                                                setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 294호 입니다.')
                                                                                                                                                                                                                : (apply == '안산신길2' && Location != 'GyeongGi'
                                                                                                                                                                                                                    ?
                                                                                                                                                                                                                    setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 210호 입니다.')
                                                                                                                                                                                                                    : (apply == '동작구수방사' && Location == 'seoul' && option3 >= 24
                                                                                                                                                                                                                        ?
                                                                                                                                                                                                                        setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 140호 입니다.')
                                                                                                                                                                                                                        : (apply == '동작구수방사' && Location != 'seoul'
                                                                                                                                                                                                                            ?
                                                                                                                                                                                                                            setAlert('당해 지원 미달시 지원 가능 합니다!')
                                                                                                                                                                                                                            : apply == '구리갈매역세권' && Location == 'GyeongGi' && dbLocation == '구리시' && option3 >= 24
                                                                                                                                                                                                                                ?
                                                                                                                                                                                                                                setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 770호 입니다.')
                                                                                                                                                                                                                                : (apply == '구리갈매역세권' && Location == 'GyeongGi' && dbLocation != '구리시' && option3 >= 24
                                                                                                                                                                                                                                    ?
                                                                                                                                                                                                                                    setAlert('경기도 거주자 이시네요! 2단계 공급물량은 총 539호 입니다.')
                                                                                                                                                                                                                                    : (apply == '구리갈매역세권' && Location != 'GyeongGi'
                                                                                                                                                                                                                                        ?
                                                                                                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 2단계 공급물량은 총 385호 입니다.')
                                                                                                                                                                                                                                        : (apply == '성남금토' && dbLocation == '성남시' && option3 >= 24
                                                                                                                                                                                                                                            ?
                                                                                                                                                                                                                                            setAlert('당해기준 충족자 이시네요! 2단계 공급물량은 총 490호 입니다.')
                                                                                                                                                                                                                                            : apply == '성남금토' && dbLocation != '성남시'
                                                                                                                                                                                                                                                ?
                                                                                                                                                                                                                                                setAlert('지원불가능합니다.')
                                                                                                                                                                                                                                                :
                                                                                                                                                                                                                                                ''))))))))))))))))))))))))))))))))))))))))))))))))))

        }
    }

    const successSubmit = (e) => {
        setResult5_Alert('결과가 저장되었습니다!'),
            setClassName('blue'),
            postCalculator2({ Number_Of_Children: Result1, Resident_period: Result3, Resident_Location1: Location, Resident_Location2: dbLocation, Period_Of_HomeLessness: Result2, Number_Of_Payment: Result4, Applying_Location: apply })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        {
            Result1_Alert == '항목을 입력해주세요' || Result2_Alert == '항목을 입력해주세요' || Result3_Alert == '모든 항목을 입력해주세요' || Result4_Alert == '항목을 입력해주세요' || Result1 == 0 || Result2 == 0 || Result4 == 0 || Location == '.' || apply == '.' || option3 == '.' || dbLocation == '.' || Location2 == '.'
                ? setResult5_Alert('모든 항목의 점수를 내주세요')
                : successSubmit()
        }

    }

    return (
        <>
            <div className="subscription_wrap w100">
                <div className="subscription w1200">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="calculator_content2">
                                <div className="option1">
                                    <h5>(1) 미성년 자녀수</h5>
                                    <div className="inline-block">
                                        <input onChange={changOption1} type="text" />명
                                    </div>
                                    <input onClick={HandleResult1} className="BTN" type="button" value="점수 계산" />
                                    <div className="score">점수 : <span className="option1_result">{Result1}</span><span className="red">{Result1_Alert}</span></div>
                                </div>
                                <div className="option2">
                                    <h5>(2) 무주택기간</h5>
                                    <div className="inline-block">
                                        <input onChange={changOption2} type="text" />개월
                                    </div>
                                    <input onClick={HandleResult2} className="BTN" type="button" value="점수 계산" />
                                    <p className="small_font red">공고일 기준 만30세 미만이면서 혼인한 적이 없는 분은 "-"입력, 가점선택 불가하여 0점처리</p>
                                    <div className="score">점수 : <span className="option1_result">{Result2}</span><span className="red">{Result2_Alert}</span></div>
                                </div>
                                <div className="option4">
                                    <h5>(3) 주택청약종합저축 납입인정 횟수</h5>
                                    <div className="inline-block">
                                        <input onChange={changOption4} type="text" />회
                                    </div>
                                    <input onClick={HandleResult4} className="BTN subbtn" type="button" value="점수 계산" />
                                    <div className="score">점수 : <span className="option1_result">{Result4}</span><span className="red">{Result4_Alert}</span></div>
                                </div>
                                <div className="option3">
                                    <h5>(4) 해당 시*도 연속 거주기간</h5><input onClick={HandleResult3} className="BTN" type="button" value="점수 계산" />
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
                                        <div className=""><input onChange={changeOption3} type="text" />개월</div>
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
                                        data.filter(v => Location2 == v.session)
                                        .map((v, k) => <option key={k} value={v.name} >{v.name}</option>)
                                    }
                                </select>
                                <div className="score">점수 : <span className="option1_result">{Result3}</span><span className="red">{Result3_Alert}</span></div>
                                <div className="block"><div className="score totalScore inline-block">총점 : <span className="total_result">{Result1 + Result2 + Result3 + Result4}</span>/12</div><input onClick={ChangeAlert} className="submitBTN" value="결과 보기" type="submit" /></div>
                                <div className="result5_alert red"><span className={className}>{Result5_Alert}</span></div>
                            </div>
                            <div className="LocationBox">{alert}</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator2