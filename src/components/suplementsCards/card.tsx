import { Button } from "../ui/button";
import { useCart } from "@/context/cartContext";
import formatCurrency from "@/utils/formatCurrency";
import { Produto } from "@/utils/interfaceProduto";

const Card: React.FC<Produto> = ({ name, description, image, price }) => {
    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart({ name, description, image, price }); 
    };

    return (
        <div className="flex flex-col gap-12 items-center justify-center p-4 shadow-md border border-stone-300 h-[430px] w-[400px]">
            <img src={image} alt={name} className="w-[130px]" />
            <div className="flex flex-col items-start gap-10">
                <div>
                    <h3 className="font-bold text-[30px]">{name}</h3>
                    <p className="">{description}</p>
                </div>
                <div className="flex items-center gap-28">
                    <span>{formatCurrency(Number(price), "BRL")}</span>
                    <Button 
                        className="bg-green-700 text-white h-[4.5vh] rounded-[5px]"
                        onClick={handleAddToCart} 
                    >
                        Adicionar ao carrinho
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
