import pool from '../config/db.js';

export async function findUserByEmail(email) {
    const [rows] = await pool.execute(
        'SELECT id, nombre, nombre_de_usuario, correo, contrasena FROM usuario WHERE correo = ?',
        [email]
    );

    return rows[0];
}

export async function findUserById(id) {
    const[rows] = await pool.execute(
        'SELECT id, nombre, nombre_de_usuario, correo FROM usuario WHERE id = ?',
        [id]
    )

    return rows[0];
}