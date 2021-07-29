const PropertyContents = [
    {
        id: '0',
        question: 'hello property',
        answer: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        question: 'hello property 1',
        answer: 'react cham djfuqek djfudnj1'
    }
]

const Property = () => {

    const PropertyList = PropertyContents.map((v) => {
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
                {PropertyList}
            </tbody>

        </>
    )
}

export default Property