import { useContext } from "react";

import { UserContext } from "../context/AuthProvider";

export function useAuth() {
    return useContext(UserContext);
}