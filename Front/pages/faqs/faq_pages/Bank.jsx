import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../../Store/context'

const Bank = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch('http://localhost:4000/faqs/bank')
        const data = await response.json()
        dispatch({ type: 'FAQ_GET2', payload: data })
    }, [])

    const BankList = state.FAQ2.map((v) => {
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
                {BankList}
            </tbody>
        </>
    )

}

export default Bank