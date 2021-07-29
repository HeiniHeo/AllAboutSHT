const IncomeContents = [
    {
        id: '0',
        question: 'hello Income',
        answer: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        question: 'hello Income 1',
        answer: 'react cham djfuqek djfudnj1'
    }
]

const Income = () => {

    // console.log(btnCheck)
    const IncomeList = IncomeContents.map((v) => {
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