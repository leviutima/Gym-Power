import logo from '@/assets/logo.png'
import { Button } from '../ui/button'
import { Search, Truck } from 'lucide-react'

const Header = () => {
    return(
        <>
        <div className='bg-white flex gap-2 items-center justify-center'>
            <span className='text-[14px]'>Frete grátis acima de R$200</span>
            <Truck size={20}/>
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
                <div>
                    <Button variant='ghost' className=''>Entrar</Button>
                    <Button variant='ghost'>Cadastrar</Button>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header