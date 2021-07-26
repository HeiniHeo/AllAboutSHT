import { useState } from 'react'

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
                        ? ' 첫번째 내용'
                        : (tabBtn === 2
                            ? '두번째 내용'
                            : '세번째 내용'
                        )
                }
            </div>
        </>
    )
}

export default Tab2;