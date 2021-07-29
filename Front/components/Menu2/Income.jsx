const Income = () =>{
    return(
        <>
            <div className="office_worker">
                <div>
                    <h3>근로소득자 소득조회</h3>
                    <p><a href="https://www.nhis.or.kr/nhis/index.do"><img src="https://cdn.imweb.me/thumbnail/20210402/f39e94abe2c65.png" /></a>국민건강보험사이트에서 보수월액 조회</p>
                </div>
            </div>
            <div className="entrepreneur">
                <div>
                    <h3>사업소득자 소득조회</h3>
                    <p><a href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml">국세청 홈택스 사이트</a>에서 종합소득세 조회</p>
                    <p>조회된 종합소득세의 12분의 1로 나눈 것이 월평균 소득</p>
                </div>
            </div>
            <div className="entrepreneur">
                <div>
                    <h3>금융소득 소득조회</h3>
                    <p><a href="https://www.nts.go.kr">국세청 홈택스 사이트</a>에서 종합소득세 조회</p>
                    <p>조회된 종합소득세의 12분의 1로 나눈 것이 월평균 소득</p>
                </div>
            </div>
            <div className="entrepreneur">
                <div>
                    <h3>기타 소득조회</h3>
                    <p><a href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml">국세청 홈택스 사이트</a>에서 종합소득세 조회</p>
                    <p>조회된 종합소득세의 12분의 1로 나눈 것이 월평균 소득</p>
                </div>
            </div>
        </>
    )
}

export default Income