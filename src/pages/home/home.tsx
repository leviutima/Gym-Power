import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import bannerOne from '@/assets/banner/suplements.webp'
import bannerTwo from '@/assets/banner/suplementstwo.webp'
import CreatineCard from "@/components/suplementsCards/creatineCard"

const Home = () => {
    return (
        <div className="flex flex-col gap-16">
            {/* banner */}
            <Carousel className="w-[100vw] h-[50vh]">
                <CarouselContent className="">
                    <CarouselItem>
                        <img src={bannerOne} className="w-[100vw] h-[50vh] object-cover object-bottom "/>
                    </CarouselItem>
                    <CarouselItem>
                    <img src={bannerTwo} className="w-[100vw] h-[50vh] object-cover object-bottom "/>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/1 text-white bg-[#6C4E31]"/>
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#6C4E31]"/>
            </Carousel>
            <div className="flex items-center justify-center"> 
                <h3 className="text-[32px]">Produtos em destaque</h3>
                <div>
                    <CreatineCard />
                </div>
            </div>
        </div>
    )
}

export default Home;
