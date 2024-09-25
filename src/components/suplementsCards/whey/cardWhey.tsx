import { DataApi } from "@/utils/interfaceSuplements"
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../card"

const CardWhey = () => {
    const [data, setData] = useState<DataApi[]>([])

    useEffect(() => {
        const callApi = async () => {
            try{
                const response = await axios.get("http://localhost:3000/whey")
                setData(response.data)
            }
            catch(error) {
              console.log(error)
            }
        }
        callApi()
    })

    return(
        <div className="flex gap-8">
            {data.map((item) => (
                <Card key={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                />
            ))}
        </div>
    )
}

export default CardWhey