import { Message } from "../../modeles/Message";
import { User } from "../../modeles/User";
import ChatItem from "./ChatItem";

type Props = {
    currentUser: User,
    profil: User
    messages: Message[],
    loading: boolean;
}

const ChatList = ({currentUser, profil, messages, loading}: Props) => {
    
    const getMessageUser = (id: number): User => {
        return id == profil.id ? profil : currentUser;
    }
    
    return (
        <>
            {messages.map((message) => {
                return <ChatItem
                    key={message.id}
                    user={getMessageUser(message.userId)}
                    message={message}
                />
                })
            }
        </>
    );
}

export default ChatList;