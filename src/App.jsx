import ProductViewer from "./components/3d/ProductViewer";
import ProductInfo from "./components/ui/ProductInfo";
import useCartStore from "./store/useCartStore";
import "./App.css";

export default function App() {
  const selectedColor = useCartStore((s) => s.selectedColor);

  return (
    <div className={['flex flex-col', 'lg:grid lg:grid-cols-2', 'min-h-screen bg-slate-950'].join(' ')}>

      <div className='relative h-[50vh] lg:h-screen bg-slate-900'>
        <ProductViewer modelPath='/models/shoe-draco.glb' color={selectedColor} />
      </div>

      <div className='overflow-y-auto h-[50vh] lg:h-screen bg-slate-900'>
        <ProductInfo />
        {/* <AnyComponent /> */}
      </div>
    </div>
  );
}

function AnyComponent() {
  const selectedColor = useCartStore(s => s.selectedColor);
  const setColor = useCartStore(s => s.setColor);

  return (
    <div className="p-4 text-white">
      <button onClick={() => setColor('#FF0000')}>
        Appliquer le rouge
      </button>
    </div>
  )
}
