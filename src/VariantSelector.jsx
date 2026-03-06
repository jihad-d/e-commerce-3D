import useCartStore from './store/useCartStore';
import { VARIANTS } from './utils/products'

export default function VariantSelector() {
  const selectedColor = useCartStore(s => s.selectedColor);
  const setColor      = useCartStore(s => s.setColor);

  return (
    <div className='space-y-3'>
      <p className='text-sm text-slate-400 uppercase'>
        Couleur
      </p>
      
    <div className='flex gap-3 flex-wrap'>
        {VARIANTS.map(v => (
          <button
            key={v.id}
            title={v.label}
            onClick={() => setColor(v.hex)}
            className={[
              'w-9 h-9 rounded-full border-2 transition-all',
              'hover:scale-110 active:scale-95',
              selectedColor === v.hex
                ? 'border-amber-400 scale-110'
                : 'border-slate-600'
            ].join(' ')}
            style={{ backgroundColor: v.hex }}
          />
        ))}
      </div>

      <p className='text-xs text-slate-500'>
        Selectionne :
        {VARIANTS.find(v => v.hex === selectedColor)?.label}
      </p>
    </div>
  );
}

