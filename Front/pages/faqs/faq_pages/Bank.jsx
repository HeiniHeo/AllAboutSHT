const BankContents = [
    {
        id: '0',
        question: 'hello Bank',
        answer: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        question: 'hello Bank 1',
        answer: 'react cham djfuqek djfudnj1'
    }
]

const Bank = () => {

    const BankList = BankContents.map((v) => {
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