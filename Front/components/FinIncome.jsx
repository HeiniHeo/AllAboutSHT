import {useState} from 'react'

const FinIncome = () =>{
    const [finincome, setFinIncome] = useState(false)

    const FinIncomeOpen = ()=>{
        setFinIncome(!finincome)
    }
        return(
            <div className="finincome_header">
                <button onClick={FinIncomeOpen}>도움말</button>
                    {finincome 
                    ?
                    <div>
                        <p className="finincome">
                            공고문 기준으로 해석하면, <br />금융소득은 국세청에서 조회되는금액을 기준으로 금융소득을 산정합니다. 
                            <br />그런데 연 금융소득 2000만원 미만에 대해서는 국세청에서 조회가 안되므로 금융소득 산정시 반영되지 않는 것으로 추정됩니다.
                            LH 상담사와 통화시에도 2000만원 미만에 대해서는 종합과세 처리되지 않아 국세청에 정보가 뜨지 않는다는 것을 말씀드렸더니
                            그러면 소득으로 안잡히는게 맞을것이라는 답변을 받았습니다. <br />
                            다만 LH 상담사마다 답변이 다르고 본인들도 정확히 판단여부를 모르기에<br />
                            금융소득에 대한 계산은 좀 더 정보를 찾아보고 하시는 것을 추천드립니다. 
                        </p>
                    </div>
                    :
                    <div className="finincome2">
                        <h3>재산소득 중 금융소득(이자소득,배당소득 등) : <br />홈택스에서 금융소득 조회</h3>
                        <p><a href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml"><img src="hometax.png"/></a></p>
                    </div>
                    }
            </div>
        )

}


export default FinIncome