import bcrypt from 'bcrypt';

import { findUserByEmail } from '../models/usuario.model.js';
import { findUserById } from '../models/usuario.model.js';

import { generateToken } from '../utils/jwt.js';

// Lógica de Inicio de sesión
export async function login(req, res) {
    try {
        const {email, password} = req.body;

        if (!email | !password) {
            return res.status(404).json({ message: 'Datos incompletos' });
        }

        const { contrasena, ...user } = await findUserByEmail(email);

        // Se comparan los hashes de las contraseñas
        const isValid = await bcrypt.compare(password, contrasena);
        
        if (!isValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Se genera el token de autenticación
        const token = generateToken({
            id: user.id,
            email: email
        });
        
        res.json({
            message: 'success',
            user,
            token
        });

    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
    }
}

export async function getProfile(req, res) {
    try {
        const userId = req.user.id;

        const user = await findUserById(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({user});
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
    }
}