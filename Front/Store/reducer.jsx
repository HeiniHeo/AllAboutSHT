const reducer = (state,action) => {
    switch(action.type){
        case "FAQ_GET": 
    

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

        case "FAQ_GET2": 
        const payloadLength2 = Object.entries(action.payload)

        const result2 = [];
        for(let i=0; i<payloadLength2.length; i++){
            result2.push(payloadLength2[i][1])
        }
        
        const rst2 = result2.map(v=>{
            return {id:v.id,question:v.Question,answer:v.Answer}
        })
        // []
            return {
                ...state,
                FAQ2: [...rst2]
            
                
            }
        default:
            return state
    }
}

export default reducer 