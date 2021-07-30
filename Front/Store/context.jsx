import {createContext} from 'react'

const initalState = {
    FAQ:[
        {
            answer:'test',
            question:'test',
        }
    ]
}

const Store = createContext(initalState);

export default Store