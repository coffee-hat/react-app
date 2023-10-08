import styled from "@emotion/styled";
import ChatList from "./chatMenu/ChatList";
import ChatInput from "./chatMenu/ChatInput";
import { User } from "../modeles/User";
import { useMessages } from "../hooks/useMessage";
import UserItem from "./userMenu/UserItem";

type Props = {
    currentUser: User | undefined,
    profil: User,
}

const ChatMenu = ({currentUser, profil}: Props) => {
    
    if(currentUser == null){
        return <div>MessageList</div>
    }
    const { messages, addMessage, loading } = useMessages(currentUser);

    return (
        <>
            <ChatToolsBar>
                <div>
                    <UserItem 
                        avatar={currentUser.avatar} 
                        name={currentUser.name}/>
                </div>
            </ChatToolsBar>
            <ChatListContainer>
                <ChatList 
                    currentUser={currentUser}
                    profil={profil} 
                    messages={messages}
                    loading={loading}/>
            </ChatListContainer>
            <ChatInputContainer>
                <ChatInput addMessage={addMessage}/>
            </ChatInputContainer>
        </>
    );
}

const ChatToolsBar = styled.div`
    display: flex;
    justify-content: left;
    height: 3rem;
    border-bottom: solid var(--dark-gray) 1px;
    background-color: var(--chat-gray);
`

const ChatListContainer = styled.div`
    flex: 1;
    overflow-y: scroll;
    background-color: var(--chat-gray);
`

const ChatInputContainer = styled.div`
    display: flex;
    padding: 0 1rem;
    height: 4rem;
    background-color: var(--chat-gray);
`

export default ChatMenu;

