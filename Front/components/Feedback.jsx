import { useState } from 'react'
import { postFeedback } from '../api/api'

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
        setFeedback(!feedback)
        postFeedback({ feedbackcontent: feedbackcontent })
        setfeedbackcontent('')
    }

    return (
        <>
            <button className={feedback ? "FeedBack_close" : "FeedBack_open"} onClick={handleFeedback}>피드백</button>
            {/* {feedback
            ?
            <div className = "Feedbackcontent"><input onChange = {handleFeedbackContent} class = "inputcontent" type = "text"></input>
            <div className = "feedbackSubmitBtn"><input onClick = {handleSubmit} type = "submit" value = "의견 보내기"/></div></div>
            : ''
            } */}

            <div className={feedback ? "feedbackClose" : "feedbackOpen"}>
                <input onChange={handleFeedbackContent} className="inputcontent" type="text" value={feedbackcontent}></input>
                <input onClick={handleSubmit} className="feedback_submit_btn" type="submit" value="의견 보내기" />
            </div>
        </>
    )
}

export default FeedBack
