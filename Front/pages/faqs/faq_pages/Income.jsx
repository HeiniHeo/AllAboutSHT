import { useEffect,useContext,useCallback } from 'react'
import Store from '../../../Store/context'
import { faqurl } from '../../../Store/Allurl'

const Income = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch(`${faqurl}income`)
        const data = await response.json()
        dispatch({ type: 'FAQ_GET', payload: data })
    }, [])

    const IncomeList = state.FAQ.map((v,k) => {
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
                {IncomeList}
            </tbody>
        </>
    )
}

export default Income