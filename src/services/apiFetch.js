export async function apiFetch(endpoint, options={}) {
    const token = localStorage.getItem("token");

    const response = await fetch(`/api/${endpoint}`, {
        ...options,
        headers: {
            "Content-Type" : "application/json",
            ...(token && {Authorization: `Bearer ${token}`}),
            ...options.headers
        }
    });

    return response;
}