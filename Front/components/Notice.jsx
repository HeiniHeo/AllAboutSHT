import {useState} from 'react'

const Notice = () =>{
    const [notice, setNotice] = useState(false)

    const noticeOpen = ()=>{
        setNotice(!notice)
    }
        return(
            <div className="notice_header">
                <button className="notice" onClick={noticeOpen}><img src="https://thema25.dubuplus.com/template/s150319001001/images/m_ban_icon2.png" />공지사항</button>
                    {notice 
                    ?
                    <img className="notice_img" src="/신혼희망타운팝업.png" />
                    :''
                    }
            </div>
        )

}


export default Notice