import axios from "axios"
import { useEffect, useState } from "react"

interface DataApi {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    stock: number;
    image: string;
}

const CreatineCard = () => {
    const [data, setData] = useState<DataApi[]>([])

    useEffect(() => {
        const apiCreatine = async () => {
        try{
            const response = await axios.get('http://localhost:3000/creatine')
            setData(response.data)
        }
        catch(error) {
            console.log(error)
        }
    }
    apiCreatine()
})

    return(
        <div>
            <div className="shadow-lg">
                {data.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 items-center justify-center">
                    <img src={item.image} className="w-[60px]"></img>
                    <div>
                        <h3 className="w-[300]">{item.name}</h3>
                        <p className="w-[300px]">{item.description}</p>
                    </div>
                </div> 
                ))}
            </div>
        </div>
    )
}

export default CreatineCard