import { useState } from 'react'

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
                    <button onClick={btn1}>버튼1</button>
                    <button onClick={btn2}>버튼2</button>
                </div>

                {
                    tabBtn === 1
                        ? '첫번째 내용들'
                        : '두번째 내용들'
                }
            </div>
        </>
    )
}

export default Tab;