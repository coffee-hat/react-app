import { Message } from "../../modeles/Message";
import { User } from "../../modeles/User";
import ChatItem from "./ChatItem";

type Props = {
    currentUser: User,
    messagesList: Message[],
}

const ChatList = ({currentUser, messagesList}: Props) => {
    return (
        <>
            {messagesList.map((message) => {
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