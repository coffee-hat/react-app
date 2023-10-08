import { Message } from "../../modeles/Message";
import { User } from "../../modeles/User";
import ChatItem from "./ChatItem";

type Props = {
    currentUser : User,
    messages: Message[]
}

const ChatList = ({currentUser, messages}: Props) => {
    return (
        <>
            {messages.map((message) => {
                return <ChatItem
                    key={message.id}
                    user={currentUser}
                    message={message}
                />
                })
            }
        </>
    );
}

export default ChatList;