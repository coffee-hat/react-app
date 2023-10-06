import { useEffect, useState } from "react";
import { getMessages } from "../services/api";
import { Message } from "../modeles/Message";

export const useMessages = () => {
    const[messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const nextMessages = await getMessages(20);
            setMessages(nextMessages);
            setLoading(false);
        })();
    }, []);

    return {messages, loading}
}
