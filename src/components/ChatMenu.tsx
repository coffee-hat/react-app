import styled from "@emotion/styled";
import ChatList from "./chatMenu/ChatList";
import ChatInput from "./chatMenu/ChatInput";
import { User } from "../modeles/User";
import { useMessages } from "../hooks/useMessage";

type Props = {
    currentUser: User,
    profil: User,
}

const ChatMenu = ({currentUser, profil}: Props) => {

    const { messages, loading } = useMessages();

    if(loading){
        return <div>loading</div>
    }
    return (
        <>
            <ChatToolsBar>
                TOOLS BARS
            </ChatToolsBar>
            <ChatListContainer>
                <ChatList currentUser={currentUser} messagesList={messages}/>
            </ChatListContainer>
            <ChatInputContainer>
                <ChatInput/>
            </ChatInputContainer>
        </>
    );
}

const ChatToolsBar = styled.div`
    height: 5rem;
`

const ChatListContainer = styled.div`
    overflow-y: scroll;
    background-color: #313338;
`

const ChatInputContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 10rem;
    background-color: #313338;
`

export default ChatMenu;

