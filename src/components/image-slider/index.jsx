import { useEffect, useState } from "react"


export default function ImageSlider({url, page = 1, limit = 5}){

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    async function fetchImages(getUrl){
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data)
                setLoading(false)
            }
        } catch(error){
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    console.log(images);
    

    useEffect(()=>{
        if(url !== '') fetchImages(url)
    }, [url])

    if(loading){
        return <div>Loading! please wait</div>
    }

    if(errorMsg !== null){
        return <div>Error Ocurred! {errorMsg}</div>
    }

    return <div className="container">

    </div>
}