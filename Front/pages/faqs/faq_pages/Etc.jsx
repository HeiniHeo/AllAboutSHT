import Link from 'next/link'

const EtcContents = [
    {
        id: '0',
        title: 'hello Etc',
        contents: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        title: 'hello Etc1',
        contents: 'react cham djfuqek djfudnj1'
    }
]

const Etc = () => {

    const EtcList = EtcContents.map((v) => {
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
                        <th>Etc</th>
                    </tr>
                </thead>
                <tbody>
                    {EtcList}
                </tbody>
            </table>
        </>
    )
}

export default Etc