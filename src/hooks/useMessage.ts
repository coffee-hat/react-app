import { useEffect, useState } from "react";
import { createMessage, getMessages } from "../services/api";
import { Message } from "../modeles/Message";
import { User } from "../modeles/User";

const PROFIL_ID = 999;

export const useMessages = (contact: User) => {
    const[messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const nextMessages = await getMessages(contact.id);
            setMessages(nextMessages);
            setLoading(false);
        })();
    }, [contact]);

    const addMessage = (newMessage: string) =>{
        setLoading(false);
        let newMessageList = messages;
        newMessageList.push(createMessage(messages[messages.length - 1].id + 1, PROFIL_ID, newMessage));
        setMessages(newMessageList);
        console.log(messages)
        setLoading(true);
    }

    return {messages, addMessage, loading}
}
