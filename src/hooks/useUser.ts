import { useEffect, useState } from "react";
import { User } from "../modeles/User";
import { createUser, getUsers } from "../services/api";

const PROFIL_ID = 999;

export const useUser = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const [profil, setProfil] = useState<User>({id:0, name: '', avatar: ''});

    useEffect(() => {
        (async() => {
            const nextUsers = await getUsers();
            const nextProfil = createUser(PROFIL_ID)
            setUsers(nextUsers);
            setProfil(nextProfil);
            setLoading(false);
        })();
    }, []);

    return {users, profil, loading}
}
