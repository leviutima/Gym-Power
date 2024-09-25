interface CardProps {
    name: string;
    description: string;
    image: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ name, description, image, price }) => {
    return (
        <div className="flex flex-col gap-12 items-center justify-center p-4 shadow-md border border-stone-300 h-[430px] w-[400px]">
            <img src={image} alt={name} className="w-[130px]" />
            <div className="flex flex-col items-start gap-10">
                <div>
                    <h3 className="font-bold text-[30px]">{name}</h3>
                    <p className="">{description}</p>
                </div>
                <span>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </div>
    );
};
 
export default Card