import styled from "@emotion/styled";
import ChatList from "./chatMenu/ChatList";
import ChatInput from "./chatMenu/ChatInput";
import { User } from "../modeles/User";
import { useMessages } from "../hooks/useMessage";

type Props = {
    currentUser: User | undefined,
    profil: User,
}

const ChatMenu = ({currentUser, profil}: Props) => {

    const { messages, loading } = useMessages();

    let chatDisplay = null;
    if(loading){
        chatDisplay = <div>loading</div>
    }
    else if(currentUser == null){
        chatDisplay = <div>CHAT LIST</div>
    }
    else{
        chatDisplay = <>
            <ChatListContainer>
                <ChatList currentUser={currentUser} messagesList={messages}/>
            </ChatListContainer>
            <ChatInputContainer>
                <ChatInput/>
            </ChatInputContainer>
        </>
    }
    return (
        <>
            <ChatToolsBar>
                TOOLS BARS
            </ChatToolsBar>
            {chatDisplay}
        </>
    );
}

const ChatToolsBar = styled.div`
    display: flex;
    justify-content: center;
    height: 3rem;
    border-bottom: solid #1f2023 1px;
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

