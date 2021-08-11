import {createContext} from 'react'

const initalState = {
    FAQ:[
        {
            answer:'test',
            question:'test',
        }
    ],
    Income_Score:0
}

const Store = createContext(initalState);

export default Store