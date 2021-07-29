
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

