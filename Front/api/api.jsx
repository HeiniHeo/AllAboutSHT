import {base_url} from '../Store/Allurl'

export const postCalculator1 = async (body) => {
    //code block
    //fetch 
    // fetch(url:stirng , option:object)
    // request method 'POST'
    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }
    const response = await fetch(`${base_url}/calculator1`,options) //restful api 

}

export const postCalculator2 = async (body) => {
//code block
//fetch 
// fetch(url:stirng , option:object)
// request method 'POST'
const options = {
    method:'POST',
    headers:{
        'Content-type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(body)
}
const response = await fetch(`${base_url}/calculator2`,options) //restful api 

}

export const postFeedback = async (body) => {

    const options = {
        method:'POST',
        headers:{
            'Content-type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(body)
    }
    const response = await fetch(`${base_url}/Feedback`,options) //restful api 
}

export const getFAQIncome = async () => {
    //code block
    //fetch 
    // fetch(url:stirng , option:object)
    // request method 'POST'

    let options = {
        method:'GET'
    }
        const response = await fetch(`${base_url}/getFAQIncome`,options) //restful api 
        const data = await response.json()

        const result = data.map( obj => {
            return {...obj, question:obj.question, answer:obj.answer}
        } )       

        dispatch({type:'GET_FAQ',payload:result})
}
    

