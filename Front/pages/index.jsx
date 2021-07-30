import Tab from '../components/Tab'
import Tab2 from '../components/Tab2'
import Notice from '../components/Notice'
import Supply from '../components/Supply'

const Index = () => {
    return (
        <div className="site_wrap">
            <h1>🏡 신희타 가점 도우미 🏡</h1>
            <Supply />
            <Notice />
            <div className="wrap">
                <Tab />
                <Tab2 />
            </div>
        </div>
    )
}

export default Index