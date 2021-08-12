import FinIncome from '../FinIncome'

const Income = () =>{
    return(
        <>
            <p className="sub_income">* 소득 : 근로소득 + 사업소득 + 재산소득 + 기타소득</p>
            <div className="office_worker">
                <div>
                    <h3>근로소득자 : 국민건강보험사이트에서 보수월액 조회</h3>
                    <p><a href="https://www.nhis.or.kr/nhis/index.do"><img src="/국민건강보험.png" /></a></p>
                    <p className="income_info">근로소득자의 경우 보수월액이 월평균소득이 됩니다. <br />가점계산시 적는 소득금액은 본인 및 배우자 월평균소득 합산하여 기재</p>
                </div>
            </div>
            <div className="entrepreneur">
                <div>
                    <h3>사업소득자 : 국세청 홈택스 사이트에서 종합소득 조회</h3>
                    <p><a href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml"><img src="hometax.png"/></a></p>
                    <p className="income_info">조회된 종합소득의 12분의 1로 나눈 것이 월평균 소득</p>
                </div>
            </div>
            <div className="entrepreneur">
                <FinIncome />
            </div>
            <div className="EtcIncome">
                <div>
                    <h3>기타소득 : 공적이전소득</h3>
                    <p className="middle_font">공적이전소득이란? <br />
                    각종 법령의 규정에 의해 정기적으로 지급되는 각종 수당․연금․급여․기타금품</p>
                    <p className="small_font">공적이전소득 예시: 국민연금급여,사학퇴직연금급여,공무원퇴직연금급여,국방부퇴직연금급여,별정우체국연금,한국고용정보원 실업급여,근로복지공단 산재보험급여, 보훈처 보훈대상자 보상급여 및 보훈대상자 명예수당 등 </p>
                    <p className="middle_font"><a href="http://www.mohw.go.kr">보건복지부</a>, <a href="https://www.nps.or.kr">국민연금</a>, <a href="https://www.tp.or.kr">사학연금</a>, <a href="https://www.geps.or.kr">공무원연금</a>, <a href="https://m.geps.or.kr/">군인연금관리공단</a>, <a href="https://www.kcomwel.or.kr">근로복지공단</a>, <a href="https://www.mpva.go.kr">보훈처</a></p>
                </div>
            </div>
        </>
    )
}

export default Income