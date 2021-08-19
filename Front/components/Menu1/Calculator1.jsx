import React, { useContext, useReducer, useEffect, useState } from 'react'
import Store from '../../Store/context'
import reducer from '../../Store/reducer'
import AreaComponent from './Location/AreaComponent'
import { LocationComponent } from './Location/LocationComponent'
import { postCalculator1 } from '../../api/api'
// import LocationComponent from './Location/LocationComponent'
import { base_url } from '../../Store/Allurl'
import { localurl } from '../../Store/Allurl'
import data from './Location/data.json'



const Calculator1 = ()=>{
    const {state,dispatch} = useContext(Store)

    const [Location, setLocation] = useState('군')
    const [Location2, setLocation2] = useState('2차')
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

    const ChangeAlert = async (e) => {

        let options1 = {
            method:'GET'
        }

        let result1 = await fetch(`${base_url}/apply_alert1_1?apply=${apply}&Location=${Location}&dbLocation=${dbLocation}&option2=${option2}`,options1)
        const data1 = await result1.json()
        console.log(data1)
        dispatch({ type: 'apply_alert', payload: data1[0].apply_alert1 })

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
            Location != '.' && apply != '.' && option2 != '.' && dbLocation != '.' && Location2 != '.'
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

        let result = await fetch(`${base_url}/IncomeScores?Income=${Income}&Person=${Person}&Cost=${Cost}`, options)
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
            postCalculator1({ income: state.Income_Score, Resident_period: Result2, Resident_Location1: Location, Resident_Location2: dbLocation, Number_Of_Payment: Result3, Applying_Location: apply })

    }
    const handleSubmit = (e) => {

        e.preventDefault()
        {
            Result1_Alert == '모든 항목을 입력해주세요' || Result2_Alert == '모든 항목을 입력해주세요' || Result3_Alert == '모든 항목을 입력해주세요'|| state.Income_Score == 0 || Location == '.' || apply == '.' || option3 == '.' || dbLocation == '.' || Location2 == '.'
                ? setResult4_Alert('모든 항목의 점수를 내주세요')
                : successSubmit()
        }

    }
    return(
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
                                            <option value="two">선택</option>
                                            <option value="two">맞벌이</option>
                                            <option value="one">외벌이</option>
                                            <option value="zero">둘 다 무직</option>
                                        </select>
                                    </div>
                                    <div className="inline-block margin-left">
                                        <h6>2. 가구 수</h6>
                                        <select onChange={ChangePerson}>
                                            <option value="two">선택</option>
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
                                    <div className = "score">점수 : <span className = "option1_result">{state.Income_Score}</span><span className = "red">{Result1_Alert}</span></div>
                                </div>
                                <div className="option3">
                                    <h5>(2) 주택청약종합저축 납입인정 횟수</h5>
                                    <div className="inline-block">
                                        <input onChange={changOption3} type="text" />회
                                    </div>
                                    <input onClick={HandleResult3} className="BTN subbtn" type="button" value="점수 계산" />
                                    <div className = "score">점수 : <span className = "option1_result">{Result3}</span><span className = "red">{Result3_Alert}</span></div>
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
                            </div>
                            <div className = "score totalScore apply">지원 지역</div>
                            <select className = "Select_Box" onChange = {ChangeLocation2}  defaultValue={"2차"} >
                                <option value="2차">사전청약2차(10월)</option>
                                <option value="3차">사전청약3차(11월)</option>
                                <option value="4차">사전청약4차(12월)</option>
                                <option value = "본청약">본청약</option>
                            </select>
                            <select className="Select_Box" onChange={Applying_Location}>
                                    <option>내용을선택해주세요.</option>
                                    {
                                        data.filter(v => Location2 == v.session)
                                        .map((v, k) => <option key={k} value={v.name} >{v.name}</option>)
                                    }
                            </select>
                            <div className = "score">점수 : <span className = "option1_result">{Result2}</span><span className = "red">{Result2_Alert}</span></div>
                            <div className = "block"><div className = "score totalScore inline-block">총점 : <span className = "total_result">{state.Income_Score+Result2+Result3}</span>/9</div><input className = "submitBTN" value = "결과 보기" onClick = {ChangeAlert} type = "submit"/></div>
                            <div className = "result4_alert red"><span className = {className}>{Result4_Alert}</span></div>
                        <div className = "LocationBox2">{state.apply_alert1}</div>
                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator1