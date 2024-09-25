// Exemplo de CartContext.tsx
import { createContext, useContext, useState } from 'react';
import { Produto } from '@/utils/interfaceProduto';

interface CartContextType {
    cart: Produto[];
    addToCart: (product: Produto) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Produto[]>([]);

    const addToCart = (product: Produto) => {
        setCart((prev) => {
            const existingProduct = prev.find(item => item.name === product.name);
            if (existingProduct) {
                return prev.map(item =>
                    item.name === product.name
                        ? { ...item, quanty: item.quanty + 1 } 
                        : item
                );
            } else {
                return [...prev, { ...product, quanty: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("contexto sendo usado de maneira errada");
    }
    return context;
};
