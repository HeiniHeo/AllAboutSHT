import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import Income from './faq_pages/Income'
import Property from "./faq_pages/Property"
import Bank from "./faq_pages/Bank"
import Etc from "./faq_pages/Etc"
import Link from 'next/link'

const menuOpen = (faq) => {
    switch(faq){
        case "income":
            return 1
        case "property":
            return 2
        case "bank":
            return 3
        case "etc":
            return 4
    }
}

const color = {"background":"#1e65a3","color":"#fff"}

const FaqList = () => {
    const router = useRouter()
    const { faq } = router.query
    const Open = menuOpen(faq)
    
    const [boardNum, setBoardNum] = useState(Open)

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
            <div className="FaqBoardWrap">
                <Link href="/"><a className="homeBtn">홈으로</a></Link>
                <div className="FaqBoard">
                    <div className="btn_array">
                        <button style={ (boardNum === 1) ? color : {}  } onClick={() => { boardBtn(1) }}>소득</button>
                        <button style={ (boardNum === 2) ? color : {}  } onClick={() => { boardBtn(2) }}>자산</button>
                        <button style={ (boardNum === 3) ? color : {}  } onClick={() => { boardBtn(3) }}>청약통장</button>
                        <button style={ (boardNum === 4) ? color : {}  } onClick={() => { boardBtn(4) }}>기타</button>
                    </div>
                    <table className="FaqTable">
                        <thead>
                            <tr>
                                <th>질문</th>
                                <th>답변</th>
                            </tr>
                        </thead>
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
                    </table>


                </div>
            </div>
        </>
    )
}

export default FaqList