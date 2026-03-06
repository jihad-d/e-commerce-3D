import useCartStore from '../../store/useCartStore';
import VariantSelector from '../../VariantSelector';
import AddToCart from '../../AddToCart';
import { PRODUCTS } from '../../utils/products';

function ProductInfo() {

    const selectedProduct = useCartStore(s => s.selectedProduct);
    const product = PRODUCTS[selectedProduct];

    return (
        <div className='flex flex-col justify-center
                    p-8 lg:p-12 bg-slate-900 space-y-6'>

            {/* En-tete produit */}
            <div>
                <p className='text-amber-400 text-sm uppercase'>
                    Collection 2025
                </p>
                <h1 className='text-4xl font-bold text-white'>
                    {product.name}
                </h1>
                <div className='flex items-center gap-2 mt-2'>
                    <span className='text-amber-400'>
                        {product.rating}
                    </span>
                    <span className='text-slate-500 text-sm'>
                        ({product.reviews} avis)
                    </span>
                </div>
            </div>

            {/* Prix */}
            <p className='text-4xl font-bold text-amber-400'>
                {product.price} €
            </p>

            <p className='text-slate-400'>{product.description}</p>

            <VariantSelector />

            <AddToCart product={product} />
        </div>
    );
}

export default ProductInfo
