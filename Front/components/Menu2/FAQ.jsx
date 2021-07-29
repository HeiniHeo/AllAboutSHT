import Styled from "styled-components"
import Link from 'next/link'

const menu = [
    {
        id: '1',
        category: '소득',
        url: '/faqs/income'
    },
    {
        id: '2',
        category: '자산',
        url: '/faqs/property'
    },
    {
        id: '3',
        category: '청약통장',
        url: '/faqs/bank'
    },
    {
        id: '4',
        category: '기타',
        url: '/faqs/etc'
    }
]

const FAQ = () => {
    const category = menu.map((v) => {
        return <div className="FaqList" key={v.id}><Link href={v.url}><a>{v.category}</a></Link></div>
    })

    return (
        <>
            {category}
        </>
    )
}

export default FAQ