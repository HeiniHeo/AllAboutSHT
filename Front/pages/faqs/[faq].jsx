import { useRouter } from "next/dist/client/router"

const FaqList = ()=>{
    const router = useRouter()
    const {faq} = router.query 

    return(
        <>
            {faq} 리스트
        </>
    )
}

export default FaqList