import {useState} from 'react'
import {postFeedback} from '../api/api'

const FeedBack = () => {

    const [feedback, setFeedback] = useState(false)
    const handleFeedback = () => {
        setFeedback(!feedback)
    }

    const [feedbackcontent, setfeedbackcontent] = useState('')

    const handleFeedbackContent = (e) => {
        setfeedbackcontent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postFeedback({feedbackcontent:feedbackcontent})

    }

    return(
        <>
            <button class = "FeedBack" onClick = {handleFeedback}>피드백</button>
            {feedback
            ?
            <div class = "Feedbackcontent"><input onChange = {handleFeedbackContent} class = "inputcontent" type = "text"></input>
            <div class = "feedbackSubmitBtn"><input onClick = {handleSubmit} type = "submit" value = "의견 보내기"/></div></div>
            : ''
            }
        </>
    )
}

export default FeedBack
