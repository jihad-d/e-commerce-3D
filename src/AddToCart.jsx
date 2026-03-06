import React, { useState } from 'react'
import useCartStore from './store/useCartStore';

function AddToCart({ product }) {

    const [added, setAdded] = useState(false);
    const [count, setCount] = useState(1);
    const addToCart = useCartStore(s => s.addToCart);
    const cartItems = useCartStore(s => s.cartItems);

    function handleAdd() {
        addToCart({ ...product, quantity: count });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

    return (
        <button
            onClick={handleAdd}
            className={[
                'w-full py-4 rounded-xl font-bold',
                'transition-all duration-300',
                added
                    ? 'bg-green-500 text-white scale-105'
                    : 'bg-amber-400 text-slate-900',
            ].join(' ')}
        >
            {added ? 'Ajouté au panier !' : 'Ajouter au panier'}
        </button>
    )
}

export default AddToCart
