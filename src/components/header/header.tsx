import logo from '@/assets/logo.png'
import { Search, Truck, User } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay";
import CartSheet from './cartSheet';

const Header = () => {
    return(
        <>
        <div className='bg-white flex gap-2 items-center justify-center'>
        <Carousel className="" 
        opts={{
            loop: true
        }} 
        plugins={[
            Autoplay({
                delay: 3000,
            })
        ]}>
                <CarouselContent className="">
                    <CarouselItem>
                    <div className='flex items-center justify-center gap-2'>
                        <span className='text-[14px]'>Frete grátis acima de R$200</span>
                        <Truck size={20}/>
                    </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className='flex items-center justify-center gap-2'>
                        <span className='text-[14px]'>Entrega imediata para todas 
                            as regiões de São Paulo</span>
                    </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
        <header className='bg-[#6C4E31]'>
            <nav className='flex items-center justify-around'>
                <img src={logo} className='w-20'/>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="pl-2 pr-2 py-2 border rounded-[30px] w-[25vw]"
                    />
                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className='flex gap-12 items-center'>
                    <div className='flex items-center'>
                        <User size={30}/>
                        <div className='flex flex-col text-[12px]'>
                            <span>Bem vindo,</span>
                            <span>Acesse seu perfil</span>
                        </div>
                    </div>
                    <CartSheet />
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header