const EtcContents = [
    {
        id: '0',
        question: 'hello Etc',
        answer: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        question: 'hello Etc1',
        answer: 'react cham djfuqek djfudnj1'
    }
]

const Etc = () => {

    const EtcList = EtcContents.map((v) => {
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
                {EtcList}
            </tbody>
        </>
    )
}

export default Etc