import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        function calculateTotalValue() {
            let totalValue = 0;
            
            cart.forEach((item) => {
                totalValue += Number.parseFloat(item.price) * item.quantity;
            });
            
            setTotalValue(totalValue.toFixed(2));
        }

        calculateTotalValue();
    }, [cart]);

    function handleProductAdded(product) {
        let productOnCartIndex = cart.findIndex(item => item.id === product.id);

        if(productOnCartIndex === -1) {
            const addedProduct = Object.assign(product, {quantity: 1});
            setCart((previousCartState) => {
                return previousCartState.concat(addedProduct);
            });
        } else {
            const addedQuantity = product.quantity + 1;
            handleQuantityChanged(product.id, addedQuantity);
        }
    }

    function handleQuantityChanged(productId, changedQuantity) {
        let productOnCartIndex = cart.findIndex(item => item.id === productId);

        if(productOnCartIndex === -1) {
            return;
        }

        let updatedCart = cart;

        if(changedQuantity === 0) {
            handleProductRemoved(productId);
            return;
        }

        updatedCart[productOnCartIndex].quantity = changedQuantity;
        setCart([...updatedCart]);
    }

    function handleCartDisplay() {
        setIsCartOpen(!isCartOpen);
    }
  
    function handleProductRemoved(productId) {
      setCart((previousCartState) => {
        return previousCartState.filter(product => {
            return product.id !== productId
        });
      });
    }

    function finishOrder() {
        proceedToWhatsapp();
        clearStates();
    }

    function clearStates() {
        setIsCartOpen(false);
        setCart([]);
    }
    
    function proceedToWhatsapp() {
        let selectedProducts = getSelectedProductsString();
        let whatsAppNumber = "5531995411115";
        let message = encodeURI(`Olá, vi o seu site e gostaria de fazer o seguinte pedido: \n ${selectedProducts} \n Totalizando ${totalValue} R$`);
        let apiLink = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${message}`;

        let anchor = document.createElement('a');
        anchor.target="_blank";
        anchor.href=apiLink;
        anchor.click();
    }

    function getSelectedProductsString() {
        let output = '';

        cart.forEach((item) => {
            output += `\n Produto: ${item.name} - Preço: ${item.price} - Quantidade: ${item.quantity} \n`;
        });

        return output;
    }

    const context = {
        cart: cart,
        isCartOpen: isCartOpen,
        handleCartDisplay: handleCartDisplay,
        totalItems: cart.length,
        addProduct: handleProductAdded,
        changeQuantity: handleQuantityChanged,
        totalValue: totalValue,
        finishOrder: finishOrder
    }

    return(
        <CartContext.Provider value={context}>
            { children }
        </CartContext.Provider>
    );
}