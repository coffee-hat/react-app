import { useEffect, useState } from "react";
import { getMessages } from "../services/api";
import { Message } from "../modeles/Message";
import { User } from "../modeles/User";

const PROFIL_ID = 999;

export const useMessages = (contact: User) => {
    const[messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const nextMessages = await getMessages(contact.id, PROFIL_ID);
            setMessages(nextMessages);
            setLoading(false);
        })();
    }, [contact]);

    return {messages, loading}
}
