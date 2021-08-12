import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../../Store/context'
import { faqurl } from '../../../Store/Allurl'

const Etc = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch(`${faqurl}etc`)
        const data = await response.json()
        dispatch({ type: 'FAQ_GET', payload: data })
    }, [])

    const EtcList = state.FAQ.map((v,k) => {
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
                {EtcList}
            </tbody>
        </>
    )
}

export default Etc