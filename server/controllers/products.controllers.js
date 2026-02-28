import fs from 'fs';
import path from 'path';

// Creacioń de la ruta al archivo productos.json
const filePath = path.join(process.cwd(), 'server/data/productos.json');

// Función para obtener las recomendaciones de productos
export async function getRecommendedProducts(req, res) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    res.json(data);
}