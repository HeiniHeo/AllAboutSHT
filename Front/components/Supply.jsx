import {useState} from 'react'

const Supply = () =>{
    const [supply, setSupply] = useState(false)

    const supplyOpen = ()=>{
        setSupply(!supply)
    }
        return(
            <div className="supply_header">
                <button className="supply" onClick={supplyOpen}><img src="https://cdn.icon-icons.com/icons2/1744/PNG/128/3643769-building-home-house-main-menu-start_113416.png" /><br/>3기신도시 신희타 <br/>물량공급표</button>
                    {supply 
                    ?
                    <img className="supply_img" src="/공급표.png" />
                    :''
                    }
            </div>
        )

}


export default Supply