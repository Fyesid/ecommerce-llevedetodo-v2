// Aquí va la lógica del servidor
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

// Puerto en el que se ejecutará el servicio backend
const port = 3000;

app.listen(port, () => {
    console.log(`llevedetodo-backend listening on port ${port}`);
});