
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartDrawer = ({ cart, isOpen, onCartDisplayChange, onProductQuantityChange, onOrderFinish, totalValue }) => {

    return(
        <div className={`
            fixed md:w-[30%]
            pb-24
            top-12
            bottom-0
            left-[-1]
            right-0
            overflow-y-scroll
            overflow-x-hidden 
            transition-transform
            h-full 
            bg-red-700 z-10 
            md:mt-10 mt-6 
            ${isOpen ? '' : 'hidden'}
        `}>
            <button className="mt-2 mx-2" onClick={onCartDisplayChange}><AiOutlineCloseCircle size={25}/></button>
            <ul className="mt-2 mx-2">
                <h1 className="text-center text-2xl border-b-2 border-slate-100">Seu carrinho de compras</h1>
                {
                    cart.length === 0 &&
                    <div>
                        <span className="text-xl">
                            Nenhum produto adicionado...
                        </span>
                        <br/>
                        <span className="text-xl">
                            Bora adicionar?
                        </span>
                    </div>
                }
                {
                    cart.map((item) => {
                        return(
                            <li key={item.id} className="mt-5 border-white border-2 p-2 rounded">
                                <div className="">
                                    <img
                                        placeholder="blur"
                                        className="max-h-[150px]" 
                                        width={150} 
                                        height={250} 
                                        src={item.image} 
                                        alt="Foto do produto" 
                                    />
                                </div>
                                <div className="flex-col">
                                    <div className="flex-row">
                                        {item.name}
                                    </div>
                                    <div className="flex-row my-1">
                                        <p className="text-xs">{item.description}</p>
                                    </div>
                                    <div className="flex-row my-1">
                                        {item.price} $
                                    </div>
                                </div>
                                <div className="flex justify-end items-end">
                                    <button className="mx-1" onClick={() => { onProductQuantityChange(item.id, item.quantity + 1) }}>+</button>
                                        <span className="">{item.quantity}</span>
                                    <button className="mx-1" onClick={() => { onProductQuantityChange(item.id, item.quantity - 1) }}>-</button>
                                </div>
                            </li>
                        )
                    })
                }
                <li>Total: {totalValue} $</li>
            </ul>
            <button className="mx-2 my-4 border-2 p-1 rounded" onClick={onOrderFinish}>Finalizar pedido</button>
        </div>
    );
}

export default CartDrawer;