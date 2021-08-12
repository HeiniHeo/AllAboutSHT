import React, { useContext, useReducer, useEffect, useState } from 'react'
import Store from '../../Store/context'
import reducer from '../../Store/reducer'
import { postCalculator1 } from '../../api/api'
import AreaComponent from './AreaComponent'
import { SeoulLocation,BusanLocation,DaeguLocation,IncheonLocation,GwangjuLocation,DaejeonLocation,UlsanLocation,SejongLocation,GyeongiLocation,GangwonLocation,ChungCheong1Location,ChungCheong2Location,JeonLa1Location,JeonLa2Location,GyeongSang1Location,GyeongSang2Location,JejuLocation } from './LocationComponent'

const Calculator1 = () => {
    const { state, dispatch } = useContext(Store)

    const [Location, setLocation] = useState(1)
    const [Location2, setLocation2] = useState(1)
    const [apply, setapply] = useState(1)
    const [dbLocation, setdbLocation] = useState(1)


    const [Income, setIncome] = useState(1)
    const [Person, setPerson] = useState(1)
    const [Cost, setCost] = useState(1)

    const [option2, setOption2] = useState(1)
    const [option3, setOption3] = useState(1)
    const [Result1, setResult1] = useState(1)
    const [Result2, setResult2] = useState(1)
    const [Result3, setResult3] = useState(1)


    const [alert, setAlert] = useState('지원 가능 여부입니다')

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
                                                                                                                                                                                                                            setAlert('지원 미달시 지원 가능 합니다!')
                                                                                                                                                                                                                            : apply == '구리갈매역세권' && Location == 'GyeongGi' && dbLocation == '구리시' && option2 >= 24
                                                                                                                                                                                                                                ?
                                                                                                                                                                                                                                setAlert('당해기준 충족자 이시네요! 1단계 공급물량은 총 330호 입니다.')
                                                                                                                                                                                                                                : (apply == '구리갈매역세권' && Location == 'GyeongGi' && dbLocation != '구리시' && option2 >= 24
                                                                                                                                                                                                                                    ?
                                                                                                                                                                                                                                    setAlert('경기도 거주자 이시네요! 1단계 공급물량은 총 231호 입니다.')
                                                                                                                                                                                                                                    : (apply == '구리갈매역세권' && Location != 'GyeongGi'
                                                                                                                                                                                                                                        ?
                                                                                                                                                                                                                                        setAlert('기타지역 거주자 이시네요! 1단계 공급물량은 총 165호 입니다.')
                                                                                                                                                                                                                                        : '')))))))))))))))))))))))))))))))))))))))))))))))))

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

    const HandleResult3 = (e) => {
        {
            option3 < 12
                ? setResult3(1)
                : (option3 >= 12 && option3 < 24
                    ? setResult3(2)
                    : (option3 >= 24
                        ? setResult3(3)
                        : ''
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
                                                : setResult2(0)

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
        {
            Income == "two" && Person == "three" && Cost <= 4824128
                ? setResult1(3)
                : (Income == "one" && Person == "three" && Cost <= 4221112
                    ? setResult1(3)
                    : (Income == "two" && Person == "three" && Cost > 4824128 && Cost <= 6633176
                        ? setResult1(2)
                        : (Income == "one" && Person == "three" && Cost > 4221112 && Cost <= 6030160
                            ? setResult1(2)
                            : (Income == "two" && Person == "three" && Cost > 6633176
                                ? setResult1(1)
                                : (Income == "one" && Person == "three" && Cost > 6030160
                                    ? setResult1(1)
                                    : (Income == "two" && Person == "four" && Cost <= 5675364 || Income == "two" && Person == "five" && Cost <= 5675364
                                        ? setResult1(3)
                                        : (Income == "one" && Person == "four" && Cost <= 4965944 || Income == "one" && Person == "five" && Cost <= 4965944
                                            ? setResult1(3)
                                            : (Income == "two" && Person == "four" && Cost > 5675364 && Cost <= 7803626 || Income == "two" && Person == "five" && Cost > 5675364 && Cost <= 7803626
                                                ? setResult1(2)
                                                : (Income == "one" && Person == "four" && Cost > 4965944 && Cost <= 7094205 || Income == "one" && Person == "five" && Cost > 4965944 && Cost <= 7094205
                                                    ? setResult1(2)
                                                    : (Income == "two" && Person == "four" && Cost > 7803626 || Income == "two" && Person == "five" && Cost > 7803626
                                                        ? setResult1(1)
                                                        : (Income == "one" && Person == "four" && Cost > 7094205 || Income == "one" && Person == "five" && Cost > 7094205
                                                            ? setResult1(1)
                                                            : (Income == "two" && Person == "six" && Cost <= 5914918
                                                                ? setResult1(3)
                                                                : (Income == "one" && Person == "six" && Cost <= 5175553
                                                                    ? setResult1(3)
                                                                    : (Income == "two" && Person == "six" && Cost > 5914918 && Cost <= 8133012
                                                                        ? setResult1(2)
                                                                        : (Income == "one" && Person == "six" && Cost > 5175553 && Cost <= 7393647
                                                                            ? setResult1(2)
                                                                            : (Income == "two" && Person == "six" && Cost > 8133012
                                                                                ? setResult1(1)
                                                                                : (Income == "one" && Person == "six" && Cost > 7393647
                                                                                    ? setResult1(1)
                                                                                    : (Income == "two" && Person == "seven" && Cost <= 6222418
                                                                                        ? setResult1(3)
                                                                                        : (Income == "one" && Person == "seven" && Cost <= 5444616
                                                                                            ? setResult1(3)
                                                                                            : (Income == "two" && Person == "seven" && Cost > 6222418 && Cost <= 8555825
                                                                                                ? setResult1(2)
                                                                                                : (Income == "one" && Person == "seven" && Cost > 5444616 && Cost <= 7778023
                                                                                                    ? setResult1(2)
                                                                                                    : (Income == "two" && Person == "seven" && Cost > 8555825
                                                                                                        ? setResult1(1)
                                                                                                        : (Income == "one" && Person == "seven" && Cost > 7778023
                                                                                                            ? setResult1(1)
                                                                                                            : (Income == "two" && Person == "eight" && Cost <= 6529919
                                                                                                                ? setResult1(3)
                                                                                                                : (Income == "one" && Person == "eight" && Cost <= 5713679
                                                                                                                    ? setResult1(3)
                                                                                                                    : (Income == "two" && Person == "eight" && Cost > 6529919 && Cost <= 8978639
                                                                                                                        ? setResult1(2)
                                                                                                                        : (Income == "one" && Person == "eight" && Cost > 5713679 && Cost <= 8162399
                                                                                                                            ? setResult1(2)
                                                                                                                            : (Income == "two" && Person == "eight" && Cost > 8978639
                                                                                                                                ? setResult1(1)
                                                                                                                                : (Income == "one" && Person == "eight" && Cost > 8162399
                                                                                                                                    ? setResult1(1)
                                                                                                                                    : (Income == "zero"
                                                                                                                                        ? setResult1(3)
                                                                                                                                        : '')
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

        }
    }

    const ChangeLocation2 = (e) => {
        setLocation2(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postCalculator1({ income: Result1, Resident_period: Result2, Resident_Location1: Location, Resident_Location2: dbLocation, Number_Of_Payment: Result3, Applying_Location: apply })

    }

    const Applying_Location = (e) => {
        setapply(e.target.value)
    }

    const dbLocationset = (e) => {
        setdbLocation(e.target.value)
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

                                        <select onClick={ChangeIncome}>
                                            <option value="two">맞벌이</option>
                                            <option value="one">외벌이</option>
                                            <option value="zero">둘 다 무직</option>
                                        </select>
                                    </div>
                                    <div className="inline-block margin-left">
                                        <h6>2. 가구 수</h6>
                                        <select onClick={ChangePerson}>
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
                                        <select onClick={ChangeLocation}>
                                            <AreaComponent />
                                        </select>
                                        <select onClick={dbLocationset}>
                                            <option>
                                                군/구
                                            </option>
                                            {
                                                Location === 'seoul'
                                                    ? <SeoulLocation/>
                                                    : (Location === 'busan'
                                                        ? <BusanLocation/>
                                                        : (Location === 'dagu'
                                                            ? <DaeguLocation/>
                                                            : (Location === 'GwangJu'
                                                                ? <GwangjuLocation/>
                                                                : (Location === 'Daejeon'
                                                                    ? <DaejeonLocation/>
                                                                    : (Location === 'Ulsan'
                                                                        ? <UlsanLocation/>
                                                                        : (Location === 'Incheon'
                                                                            ? <IncheonLocation/>
                                                                            : (Location === 'SaeJong'
                                                                                ? <SejongLocation/>
                                                                                : (Location === 'GyeongGi'
                                                                                    ? <GyeongiLocation/>
                                                                                    : (Location === 'GangWon'
                                                                                        ? <GangwonLocation/>
                                                                                        : (Location === 'ChungCheong1'
                                                                                            ? <ChungCheong1Location/>
                                                                                            : (Location === 'ChungCheong2'
                                                                                                ? <ChungCheong2Location/>
                                                                                                : (Location === 'JeongLa1'
                                                                                                    ? <JeonLa1Location/>
                                                                                                    : (Location === 'JeongLa2'
                                                                                                        ? <JeonLa2Location/>
                                                                                                            : (Location === 'GyeongSang1'
                                                                                                                ? <GyeongSang1Location/>
                                                                                                                : (Location === 'GyeongSang2'
                                                                                                                    ? <GyeongSang2Location/>
                                                                                                                    : (Location === 'Jeju'
                                                                                                                        ? <JejuLocation/>
                                                                                                                        : 'GyeongSang1'))))))))))))))))
                                            }
                                        </select>
                                    </div>
                                    <div className="inline-block margin-left">
                                        <h6>2. 거주 기간</h6>
                                        <div className=""><input onChange={changeOption2} type="text" />개월</div>
                                    </div>
                                </div>
                                <div className="score totalScore apply">지원 지역</div>
                                <select className="Select_Box" onClick={ChangeLocation2}>
                                    <option value="first">1차 지원(7월)</option>
                                    <option value="second">2차 지원(10월)</option>
                                    <option value="third">3차 지원(11월)</option>
                                    <option value="fourth">4차 지원(12월)</option>
                                </select>
                                <select className="Select_Box" onClick={Applying_Location}>
                                    {
                                        Location2 == 'first'
                                            ? <>
                                                <option value="인천계양">인천계양</option>
                                                <option value="남양주진접2">남양주진접2</option>
                                                <option value="성남복정1">성남복정1</option>
                                                <option value="의왕청계2">의왕청계2</option>
                                                <option value="위례">위례</option></>
                                            : (
                                                Location2 == 'second'
                                                    ? <>
                                                        <option value="성남낙생">성남낙생</option>
                                                        <option value="성남복정2">성남복정2</option>
                                                        <option value="군포대야미">군포대야미</option>
                                                        <option value="의왕월암">의왕월암</option>
                                                        <option value="수원당수">수원당수</option>
                                                        <option value="부천원종">부천원종</option></>
                                                    : (
                                                        Location2 == 'third'
                                                            ? <>
                                                                <option value="시흥하중">시흥하중</option>
                                                                <option value="과천주암">과천주암</option></>
                                                            : (
                                                                Location2 == 'fourth'
                                                                    ? <> <option value="남양주왕숙2">남양주왕숙2</option>
                                                                        <option value="부천대장">부천대장</option>
                                                                        <option value="고양창릉">고양창릉</option>
                                                                        <option value="부천역곡">부천역곡</option>
                                                                        <option value="시흥거모">시흥거모</option>
                                                                        <option value="안산장상">안산장상</option>
                                                                        <option value="안산신길2">안산신길2</option>
                                                                        <option value="동작구수방사">동작구수방사</option>
                                                                        <option value="구리갈매역세권">구리갈매역세권</option></>
                                                                    : 'bye'
                                                            )
                                                    )
                                            )
                                    }
                                </select>
                                <div className="score">점수 : <span className="option2_result">{Result2}</span></div>
                                <div className="block"><div className="score totalScore inline-block">총점 : <span className="total_result">{Result1 + Result2 + Result3}</span>/9</div><input className="submitBTN" value="결과 보기" onClick={ChangeAlert} type="submit" /></div>
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