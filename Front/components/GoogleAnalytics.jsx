import { useEffect } from "react";
import Head from 'next/head'

const GoogleAnalytics = () => {
    useEffect(()=>{
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-H9ZLC0JM12');
    },[])
    return (
        <>
        <Head>
            <title>신희타가점도우미</title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-H9ZLC0JM12"></script>
            <meta property="og:image" content="/신가도아이콘.png" />
        </Head>
       
        </>
    )
}

export default GoogleAnalytics;