import { ShoppingCartIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useCart } from "@/context/cartContext"; 
import formatCurrency from "@/utils/formatCurrency";

const CartSheet: React.FC = () => {
    const { cart } = useCart(); 

    const totalItems = cart.reduce((acc, item) => acc + item.quanty, 0);

    const totalPrice = cart.reduce((acc, item) => {
        return acc + (Number(item.price) * item.quanty);
    }, 0);

    return (
        <Sheet>
            <SheetTrigger>
            <div className="relative">
                    {/* Ícone do Carrinho */}
                    <ShoppingCartIcon />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                            {totalItems}
                        </span>
                    )}
                </div>
            </SheetTrigger>
            <SheetContent className="bg-white">
                <SheetHeader>
                    <SheetTitle className="text-[30px]">Seu carrinho</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                    {cart.length > 0 ? (
                        <>
                            {cart.map((item, index) => (
                                <div key={index} className="flex justify-between items-center border-b p-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                    <div className="flex-1 ml-4">
                                        <h4 className="font-bold">{item.name}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                    <span className="text-lg font-semibold">
                                        {formatCurrency(Number(item.price), "BRL")} 
                                    </span>
                                    <span className="ml-2">unidades: {item.quanty}</span> 
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between items-center  font-bold">
                                <span>Total:</span>
                                <span>{formatCurrency(totalPrice, "BRL")}</span> 
                            </div>
                        </>
                    ) : (
                        <p>Seu carrinho está vazio</p>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartSheet;
