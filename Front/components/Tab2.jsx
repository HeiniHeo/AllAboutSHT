import { useState } from 'react'
import Income from './Menu2/Income'
import Subscription from './Menu2/Subscription'
import FAQ from './Menu2/FAQ'

const Tab2 = () => {
    const [tabBtn, setTabBtn] = useState(1)

    const btn1 = () => {
        setTabBtn(1)
    }

    const btn2 = () => {
        setTabBtn(2)
    }

    const btn3 = () => {
        setTabBtn(3)
    }
    return (
        <>
            <div className="tab_right">
                <div className="btn_array">
                    <button onClick={btn1}>소득금액 조회 사이트</button>
                    <button onClick={btn2}>청약 자격 조회 사이트</button>
                    <button onClick={btn3}>자주 물어보는 질문</button>
                </div>
                {
                    tabBtn === 1
                        ? <Income/>
                        : (tabBtn === 2
                            ? <Subscription/>
                            : <FAQ/>
                        )
                }
            </div>
        </>
    )
}

export default Tab2;