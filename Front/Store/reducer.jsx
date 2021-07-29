export const postCalculator1 = async (dispatch,body) => {
    dispatch({type:'postCalculator1'})
    try{
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
        const response = await fetch('http://localhost:4000/',options) //restful api 
        const data = await response.json()
        const result = {...data,date:data.updatedAt.substr(0,10)}

        dispatch({type:'POST_COMMENT_SUCCESS',payload:result})
    } catch(e) {
        dispatch({type:'POST_COMMENT_ERROR'})
    }
}

// 댓글 수정
export const patchComment = async (dispatch) => {}

// 댓글 삭제 
export const deleteComment = async (dispatch) => {}