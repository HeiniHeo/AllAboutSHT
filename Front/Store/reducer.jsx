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
            return {id:v.id,question:v.question,answer:v.answer}
        })
        // []
            return {
                ...state,
                FAQ: [...rst]
            
                
            }

        case "Income_Score": 
    
            return {
                ...state,
                Income_Score: action.payload
            
                
            }
        default:
            return state
    }
}

export default reducer 