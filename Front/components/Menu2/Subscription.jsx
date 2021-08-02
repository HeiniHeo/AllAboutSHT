const Subscription = () => {
    return(
        <>
            <div className="applyhome">
                <h3>방법1. 청약홈 홈페이지 방문하여 조회</h3>
                <a href="https://www.applyhome.co.kr/co/coa/selectMainView.do"><img className="applyhome_img" src="applyhome.png"/></a>
            </div>
            <div className="bank_site">
            <h3>방법2. 청약저축통장 가입은행 방문하여 개인로그인 후 납입횟수 조회</h3>
                <ul>
                    <li className="kb"><a href="https://okbfex.kbstar.com/quics?page=onhouse#loading"><img src="/KB.png" /></a></li>
                    <li className="sh"><a href="https://mybank.ibk.co.kr/uib/jsp/index.jsp"><img src="/IBK.png" /></a></li>
                    <li className="nh"><a href="https://banking.nonghyup.com/servlet/content/ip/ph/IPPH0001M.thtml"><img src="/NH.png" /></a></li>
                    <li className="woori"><a href="https://svc.wooribank.com/svc/Dream?withyou=hb"><img src="/WOORI.png" /></a></li>
                    <li className="ibk"><a href="https://mybank.ibk.co.kr/uib/jsp/index.jsp"><img src="/sh.jpg" /></a></li>
                    <li className="keb"><a href="https://www.kebhana.com/cont/houd/houd01/houd0103/index.jsp"><img src="/KEB.png" /></a></li>
                    <li className="bnk"><a href="https://www.knbank.co.kr/ib20/mnu/BHP000000000001"><img src="/bnk.png.crdownload" /></a></li>
                    <li className="bnk_b"><a href="https://www.busanbank.co.kr/ib20/mnu/BHPHUG0010001"><img src="/bnk_busan.jpg" /></a></li>
                    <li className="dgb"><a href="https://www.doksamo.co.kr/cms/fsv/sdb_8/sdb_81/1215901_4841.html"><img src="/dgb.jpg" /></a></li>
                </ul>
            </div>
        </>
    )
}

export default Subscription