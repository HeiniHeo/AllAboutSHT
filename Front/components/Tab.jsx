import { useState } from 'react'
import Calculator1 from './Menu1/Calculator1'
import Calculator2 from './Menu1/Calculator2'

const color = { "background": "#1e65a3", "color": "#fff" }

const Tab = () => {

    const [tabBtn, setTabBtn] = useState(1)

    const btn1 = () => {
        setTabBtn(1)
    }

    const btn2 = () => {
        setTabBtn(2)
    }

    return (
        <>
            <div className="tab_left">
                <div className="btn_array">
                    <button style={(tabBtn === 1) ? color : {}} onClick={btn1}>신혼희망타운(1단계)</button>
                    <button style={(tabBtn === 2) ? color : {}} onClick={btn2}>신혼희망타운(2단계)</button>
                </div>

                {
                    tabBtn === 1
                        ? <Calculator1 />
                        : <Calculator2 />
                }
            </div>
        </>
    )
}

export default Tab;