import '../css/index.css'
import '../css/tab.css'
import '../css/Calculator.css'
import '../css/Subscription.css'
import '../css/Income.css'
import '../css/Notice.css'
import '../css/Supply.css'
import '../css/Faq.css'
import Head from 'next/head'

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <Component />
        </>
    )
}

export default App