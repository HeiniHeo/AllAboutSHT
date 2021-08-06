import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../../Store/context'

const Property = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch('http://api.jebaldangcheom.com/faqs/property')
        const data = await response.json()
        dispatch({ type: 'FAQ_GET', payload: data })
    }, [])

    const PropertyList = state.FAQ.map((v,k) => {
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
                {PropertyList}
            </tbody>

        </>
    )
}

export default Property