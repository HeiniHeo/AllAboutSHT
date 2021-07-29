import Link from 'next/link'

const PropertyContents = [
    {
        id: '0',
        title: 'hello property',
        contents: 'react cham djfuqek djfudnj'
    }, {
        id: '1',
        title: 'hello property 1',
        contents: 'react cham djfuqek djfudnj1'
    }
]

const Property = () => {

    const PropertyList = PropertyContents.map((v) => {
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
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    {PropertyList}
                </tbody>
            </table>
        </>
    )
}

export default Property