import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../../Store/context'
import { faqurl } from '../../../Store/Allurl'

const Bank = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch(`${faqurl}bank`)
        const data = await response.json()
        dispatch({ type: 'FAQ_GET', payload: data })
    }, [])

    const BankList = state.FAQ.map((v,k) => {
        return (
            <tr key={k}>
                <td>{v.question}</td>
                <td>{v.answer}</td>
            </tr>
        )
    })

    return (
        <>
            <tbody>
                {BankList}
            </tbody>
        </>
    )

}

export default Bank