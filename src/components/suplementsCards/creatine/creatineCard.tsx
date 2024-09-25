import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../card";
import { DataApi } from "@/utils/interfaceSuplements";


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
            <div className="flex gap-8">
                {data.map((item) => (
                <Card 
                key={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
                />
                ))}
            </div>
        </div>
    )
}

export default CreatineCard