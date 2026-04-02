import { apiFetch } from './apiFetch';

export async function userService(endpoint, options) {
    const response = await fetch(`/api/${endpoint}`, options);

    return response;
}

export async function updateUserData(id, body) {

    const response = await apiFetch(`usuario/${id}`, {
        method: "PUT",
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error("Error al actualizar");
    }

    const updatedUser = await response.json()

    return updatedUser;
}