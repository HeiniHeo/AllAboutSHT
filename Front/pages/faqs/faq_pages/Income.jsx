import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../../Store/context'

const Income = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch('http://localhost:4000/getFAQIncome')
        const data = await response.json()
        dispatch({ type: 'FAQ_GET', payload: data })
    }, [])

    const IncomeList = state.FAQ.map((v) => {
        return (
            <tr key={v.id}>
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