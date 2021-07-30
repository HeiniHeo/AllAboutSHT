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
    const response = await fetch('http://localhost:4000/calculator1',options) //restful api 

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
const response = await fetch('http://localhost:4000/calculator2',options) //restful api 

}

export const getFAQIncome = async () => {
    //code block
    //fetch 
    // fetch(url:stirng , option:object)
    // request method 'POST'

    let options = {
        method:'GET'
    }
        const response = await fetch('http://localhost:4000/getFAQIncome',options) //restful api 
        const data = await response.json()

        const result = data.map( obj => {
            return {...obj, Question:obj.question, Answer:obj.answer}
        } )       

        dispatch({type:'GET_FAQ',payload:result})
}
    

