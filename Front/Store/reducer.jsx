const reducer = (state,action) => {
    switch(action.type){
        case "FAQ_GET": 
    
        const {question,answer} = action.payload

        const payloadLength = Object.entries(action.payload)

        const result = [];
        for(let i=0; i<payloadLength.length; i++){
            result.push(payloadLength[i][1])
        }
        
        const rst = result.map(v=>{
            return {id:v.id,question:v.Question,answer:v.Answer}
        })
        // []
            return {
                ...state,
                FAQ: [...rst]
            
                
            }
        default:
            return state
    }
}

export default reducer 