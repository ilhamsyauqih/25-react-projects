import { useEffect, useState } from "react"

export default function LoadMoreData(){

    const [loading, setLoading] = useState(false)
    const [produtcs, setProducts] = useState([])
    const [count, setCount] = useState(0)
    
    async function fetchProduts(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json();

            if(result && result.produtcs && result.produtcs.length){
                setProducts(result.produtcs)
                setLoading(false)
            }
            
            
        }catch(error){
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProduts();
    }, [])

    if(loading){
        return <div>Loading data! Please wait</div>
    }

    return <div className="container">
        
    </div>
}