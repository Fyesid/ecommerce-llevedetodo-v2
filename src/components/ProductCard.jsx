export default function ProductCard({ producto, parentId }) {

    const {id, imagen, nombre, precio, descuento, calificacion} = producto;

    const precio_final = new Intl.NumberFormat('es-Co', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    }).format(Math.round(precio * (1-descuento)));

    const precio_form = new Intl.NumberFormat('es-Co', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    }).format(precio);

    const title = 'product-title' + parentId + id;

    const selectStyle  = 'text-amber-500'

    function selectProduct() {
        document.getElementById(title).classList.add(selectStyle);
    }

    function deselectProduct() {
        document.getElementById(title).classList.remove(selectStyle);
    }

    return(
        <div className="bg-white" onMouseEnter={selectProduct} onMouseLeave={deselectProduct}>
            <a href="">
                <div className="h-1/2 bg-zinc-200">
                    <img src={ `src/${imagen}`} alt="" className="size-full object-cover" />
                </div>
                <div className="space-y-2 h-1/2 p-3 text-right">
                    <p id={ title } className="truncate text-xs">{ nombre }</p>
                    <p className="line-through text-gray-400 text-sm">{ precio_form } </p>
                    <p className="text-lg">{ (precio_final) }</p>
                    <span className=" pr-2 pl-6 bg-red-400 text-white text-lg">{ `-${100*descuento}%` }</span>
                </div>
            </a>
        </div>
    );
}