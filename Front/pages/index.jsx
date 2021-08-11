import Tab from '../components/Tab'
import Tab2 from '../components/Tab2'
import Notice from '../components/Notice'
import Supply from '../components/Supply'
import Feedback from '../components/Feedback'

const Index = () => {
    return (
        <>
            <div className="site_wrap">
                <h1 className="indexTitle">🏡 신희타 가점 도우미 🏡</h1>
                <Supply />
                <Notice />
                <div className="wrap">
                    <Tab />
                    <Tab2 />
                </div>
                <a href="https://apply.lh.or.kr/#"><input className="GoTo" type="button" value="청약하러가기" /></a>
                <Feedback />
            </div>
            <div className="site_wrap">
                <h1 className="indexTitle">🏡신희타 가점 도우미🏡</h1>
                <Supply />
                <Notice />
                <div className="wrap">
                    <Tab />
                    <Tab2 />
                </div>
            </div>
        </>
    )
}

export default Index
