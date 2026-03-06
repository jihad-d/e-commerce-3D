import ProductViewer from './components/3d/ProductViewer'
import ProductInfo from './components/ui/ProductInfo'
import useCartStore from './store/useCartStore'
import { PRODUCTS } from './utils/products'
import './App.css'

// ─── App ─────────────────────────────────────────────────────────────────────
function App() {
  // selectedProduct ('watch' | 'iphone' | 'shoe') et son setter — Zustand
  const selectedProduct = useCartStore((s) => s.selectedProduct)
  const setProduct = useCartStore((s) => s.setProduct)
  const selectedColor = useCartStore((s) => s.selectedColor)

  // Données du produit actif lues depuis la source unique
  const active = PRODUCTS[selectedProduct] ?? PRODUCTS.shoe

  return (
    <div
      className={[
        'flex flex-col',
        'lg:grid lg:grid-cols-3',
        'min-h-screen bg-slate-950',
      ].join(' ')}
    >
      {/* ── Zone 3D ──────────────────────────────────────────────────────── */}
      <div className="lg:col-span-2 relative h-[50vh] lg:h-screen bg-slate-900">

        {/* Canvas 3D — reçoit le modelPath du produit actif */}
        <ProductViewer
          modelPath={active.modelPath}
          color={selectedColor}
          grid={true}
        />

        {/* ── Sélecteur de produits flottant ── */}
        <div
          className={[
            'absolute bottom-8 left-1/2 -translate-x-1/2',
            'flex gap-4 z-20',
            'bg-slate-950/80 backdrop-blur-md',
            'px-4 py-3 rounded-2xl',
            'border border-slate-700/50 shadow-2xl',
          ].join(' ')}
        >
          {/* Object.entries transforme l'objet en tableau [clé, valeur] */}
          {Object.entries(PRODUCTS).map(([key, product]) => {
            const isActive = key === selectedProduct
            return (
              <button
                key={key}
                onClick={() => setProduct(key)}
                title={product.name}
                aria-label={`Afficher ${product.name}`}
                aria-pressed={isActive}
                className={[
                  'flex flex-col items-center gap-0.5',
                  'px-4 py-2 rounded-xl text-xs font-semibold',
                  'transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-amber-400',
                  isActive
                    ? 'bg-amber-400 text-slate-900 scale-105 shadow-lg shadow-amber-400/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/60',
                ].join(' ')}
              >
                <span className="text-lg leading-none">{product.emoji}</span>
                <span className="leading-none">{product.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Zone UI ──────────────────────────────────────────────────────── */}
      <ProductInfo />
    </div>
  )
}

export default App
