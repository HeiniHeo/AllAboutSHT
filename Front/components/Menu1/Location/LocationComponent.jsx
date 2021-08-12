export const 군 = ['군/구']
export const 서울특별시 = ['군/구', '종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중량구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']
export const 부산특별시 = ['군/구', "중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"]
export const 대구광역시 = ['군/구', "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"]
export const 인천광역시 = ['군/구', "중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"]
export const 광주광역시 = ['군/구', "동구", "서구", "남구", "북구", "광산구"]
export const 대전광역시 = ['군/구', "동구", "중구", "서구", "유성구", "대덕구"]
export const 울산광역시 = ['군/구', "중구", "남구", "동구", "북구", "울주군"]
export const 세종특별자치시 = ['군/구', "세종특별자치시"]
export const 경기도 = ['군/구', "수원시", "성남시", "고양시", "용인시", "부천시", "안산시", "안양시", "남양주", "화성시", "평택시", "의정부", "시흥시", "파주시", "광명시", "김포시", "군포시", "광주시", "이천시", "양주시", "오산시", "구리시", "안성시", "포천시", "의왕시", "하남시", "여주시", "양평군", "동두천", "과천시", "가평군", "연천군"]
export const 강원도 = ['군/구', "춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군", "인제군", "고성군", "양양군"]
export const 충청북도 = ['군/구', "청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "진천군", "괴산군", "음성군", "단양군", "증평군"]
export const 충청남도 = ['군/구', "천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"]
export const 전라북도 = ['군/구', "전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"]
export const 전라남도 = ['군/구', "목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"]
export const 경상북도 = ['군/구', "포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "군위군", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"]
export const 경상남도 = ['군/구', "창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "의령군", "함안군", "창녕군", "고성군", "하동군", "남해군", "산청군", "함양군", "거창군", "합천군"]
export const 제주특별자치도 = ['군/구', "제주특별자치도"]

// export const LocationCalcul = (props) =>{
//     switch(props.location){
//         case '.':
//             return <LocationComponent location={군}/>
//         case 'seoul':
//             return (
//                 <LocationComponent location={서울특별시}/>
//             )
//         case 'busan':
//             return (
//                 <LocationComponent location={부산특별시}/>
//             )
//         case 'dagu' :
//             return (
//                 <LocationComponent location={대구광역시}/>
//             )
//         case 'GwangJu' :
//             return 광주광역시
//         case 'Daejeon' :
//             return 대전광역시
//         case 'Ulsan' : 
//             return 울산광역시
//         case 'Incheon' :
//             return 인천광역시
//         case 'SaeJeon' :
//             return 세종특별자치시
//         case 'GyeonGi' :
//             return 경기도
//         case 'GangWon' :
//             return 강원도
//         case 'ChungCheong1':
//             return 충청북도
//         case 'ChungCheong2':
//             return 충청남도
//         case 'JeongLa1' : 
//             return 전라북도
//         case 'JeongLa2' :
//             return 전라남도
//         case 'GyeongSang1' :
//             return 경상북도
//         case 'GyeongSang2':
//             return 경상남도
//         case 'Jeju' :
//             return 제주특별자치도
//     }
// }



export const LocationComponent = (props) => {
    let locationArr = [군, 서울특별시, 부산특별시, 대구광역시, 인천광역시, 광주광역시, 대전광역시, 울산광역시];
    let search = {}

    locationArr.forEach(v => {
        let locationName = `${v}`
        console.log(v,"++++++++++++v")
        let obj = { [locationName]: v }
        console.log(obj,"=========obj")
        search = { ...search, ...obj }
    });
    const { location } = props
    const result = 서울특별시.map((v, k) => {
        return <option key={k} value={v}>{v}</option>
    })
    return result
}