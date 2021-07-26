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
                    <button onClick={btn1}>버튼1</button>
                    <button onClick={btn2}>버튼2</button>
                    <button onClick={btn3}>버튼3</button>
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