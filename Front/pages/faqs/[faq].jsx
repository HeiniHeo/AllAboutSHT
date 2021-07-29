import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import Income from './faq_pages/Income'
import Property from "./faq_pages/Property"
import Bank from "./faq_pages/Bank"
import Etc from "./faq_pages/Etc"

const FaqList = () => {
    const router = useRouter()
    const { faq } = router.query
    const [boardNum, setBoardNum] = useState(1)

    const boardBtn = (num) => {
        setBoardNum(num)
    }

    return (
        <>
            {
                boardNum === 1
                    ? <h1>소득</h1>
                    : (boardNum === 2
                        ? <h1>자산</h1>
                        : boardNum === 3
                            ? <h1>청약통장</h1>
                            : <h1>기타</h1>
                    )
            }

            {/* 1250px margin 0 auto */}

            <div className="FaqBoard">
                <div className="btn_array">
                    <button onClick={() => { boardBtn(1) }}>소득</button>
                    <button onClick={() => { boardBtn(2) }}>자산</button>
                    <button onClick={() => { boardBtn(3) }}>청약통장</button>
                    <button onClick={() => { boardBtn(4) }}>기타</button>
                </div>
                {
                    boardNum === 1
                        ? <Income />
                        : (boardNum === 2
                            ? <Property />
                            : boardNum === 3
                                ? <Bank />
                                : <Etc />
                        )
                }
            </div>
        </>
    )
}

export default FaqList