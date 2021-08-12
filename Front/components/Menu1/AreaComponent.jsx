const AreaList = [
    {"시/도":"시/도"},
    { "seoul": "서울특별시" },
    { "busan": "부산광역시" },
    { "dagu": "대구광역시" },
    { "Incheon": "인천광역시" },
    { "GwangJu": "광주광역시" },
    { "Daejeon": "대전광역시" },
    { "Ulsan": "울산광역시" },
    { "SaeJong": "세종특별자치시" },
    { "GyeongGi": "경기도" },
    { "GangWon": "강원도" },
    { "ChungCheong1": "충청북도" },
    { "ChungCheong2": "충청남도" },
    { "JeongLa1": "전라북도" },
    { "JeongLa2": "전라남도" },
    { "GyeongSang1": "경상북도" },
    { "GyeongSang2": "경상남도" },
    { "Jeju": "제주특별자치도" },
]

const AreaComponent = () => {

    const result = AreaList.map((v,k)=>{
        const areaKey = Object.keys(v)
        const areaValue = Object.values(v)
        return <option key={k} value={areaKey}>{areaValue}</option>
    })

    return(
        <>
                {result}
        </>
    )
}

export default AreaComponent