import Link from 'next/link'

const IncomeContents = [
    {
        id: '0',
        title: 'hello Income',
        contents: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        title: 'hello Income 1',
        contents: 'react cham djfuqek djfudnj1'
    }
]

const Income = () => {

    const IncomeList = IncomeContents.map((v) => {
        return (
            <tr key={v.id}>
                <td>{v.id}</td>
                <td><Link href=""><a>{v.title}</a></Link></td>
            </tr>
        )
    })

    return (
        <>
            <table className="FaqTable">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>FAQ</th>
                    </tr>
                </thead>
                <tbody>
                    {IncomeList}
                </tbody>
            </table>
        </>
    )
}

export default Income