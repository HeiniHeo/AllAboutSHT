import Tab from '../components/Tab'
import Tab2 from '../components/Tab2'
import Notice from '../components/Notice'

const Index = () => {
    return (
        <>
            <h1>신희타 가점 도우미</h1>
            <Notice />
            <div className="wrap">
                <Tab />
                <Tab2 />
            </div>
        </>
    )
}

export default Index