const Income = () =>{
    return(
        <>
            <div>
                <h3>근로소득자 조회 방법</h3>
                <p><a href="https://www.nhis.or.kr/nhis/index.do">국민건강보험사이트</a>에서 보수월액 조회</p>
            </div>
            <div>
                <h3>사업소득자 방법</h3>
                <p><a href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml">국세청 홈택스 사이트</a>에서 종합소득세 조회</p>
                <p>조회된 종합소득세의 12분의 1로 나눈 것이 월평균 소득</p>
            </div>
        </>
    )
}

export default Income