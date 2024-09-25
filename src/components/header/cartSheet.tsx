import { ShoppingCartIcon } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"


const CartSheet = () => {
    return(
        <Sheet>
          <SheetTrigger><ShoppingCartIcon /></SheetTrigger>
            <SheetContent  className="bg-white">
              <SheetHeader>
                <SheetTitle className="text-[30px]">Seu carrinho</SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
          </SheetContent>
        </Sheet>
    )
}

export default CartSheet