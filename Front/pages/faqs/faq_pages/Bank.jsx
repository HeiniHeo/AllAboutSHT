import Link from 'next/link'

const BankContents = [
    {
        id: '0',
        title: 'hello Bank',
        contents: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        title: 'hello Bank 1',
        contents: 'react cham djfuqek djfudnj1'
    }
]

const Bank = () => {

    const BankList = BankContents.map((v) => {
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
                        <th>Bank</th>
                    </tr>
                </thead>
                <tbody>
                    {BankList}
                </tbody>
            </table>
        </>
    )

}

export default Bank