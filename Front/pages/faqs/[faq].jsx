import { useRouter } from "next/dist/client/router"
import { useState, useMemo, useCallback } from "react"
import Income from './faq_pages/Income'
import Property from "./faq_pages/Property"
import Bank from "./faq_pages/Bank"
import Etc from "./faq_pages/Etc"
import Link from 'next/link'
import Styled from "styled-components"


const LinkCss = Styled.a`
    cursor: pointer;
    width: 100%;
    height:50px;
    border:none;
    background-color:#fff;
    padding: 30px 0px 0px 0px;
    border-left: 1px solid rgb(0,91,172);
    border-bottom: 3px solid rgb(0,91,172);
    font-size:20px;
    font-family: "LH_M";
    text-align:center;

    &:hover {
        background-color: rgb(40, 140, 228);
        color:aliceblue;
    }
`

const color = {"background":"#1e65a3","cursor":"pointer"}

const FaqList = () => {

    const router = useRouter()
    const { faq } = router.query

    const renderComponent = () => {
        switch (faq) {
            case "income":
                return <Income />
            case "property":
                return <Property />
            case "bank":
                return <Bank />
            case "etc":
                return <Etc />
            default:
        }
    }

    const titleComponent = () => {
        switch (faq) {
            case "income":
                return <h1>자산</h1>
            case "property":
                return <h1>소득</h1>
            case "bank":
                return <h1>청약통장</h1>
            case "etc":
                return <h1>기타</h1>
            default:
        }
    }    

    return (
        <>

            {titleComponent()}
            <div className="FaqBoardWrap">
                <Link href="/"><a className="homeBtn">홈으로</a></Link>
                <div className="FaqBoard">
                    <div className="btn_array">
                        <Link href="http://localhost:3001/faqs/income"><LinkCss style={(faq === "income") ? color : {} }>소득</LinkCss></Link>
                        <Link href="http://localhost:3001/faqs/property"><LinkCss style={(faq === "property") ? color : {} }>자산</LinkCss></Link>
                        <Link href="http://localhost:3001/faqs/bank"><LinkCss style={(faq === "bank") ? color : {} }>청약통장</LinkCss></Link>
                        <Link href="http://localhost:3001/faqs/etc"><LinkCss style={(faq === "etc") ? color : {} }>기타</LinkCss></Link>
                    </div>
                    <table className="FaqTable">
                        <thead>
                            <tr>
                                <th>질문</th>
                                <th>답변</th>
                            </tr>
                        </thead>
                        {
                            <>
                                {renderComponent()}
                            </>
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

FaqList.getInitialProps = (appContext) => {
    return { id: appContext.query.id }
}

export default FaqList