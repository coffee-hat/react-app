import styled from "@emotion/styled";
import ChatList from "./chatMenu/ChatList";
import ChatInput from "./chatMenu/ChatInput";

const ChatMenu = () => {
    return (
        <>
            <ChatListContainer>
                <ChatList/>
            </ChatListContainer>
            <ChatInputContainer>
                <ChatInput/>
            </ChatInputContainer>
        </>
    );
}

const ChatListContainer = styled.div`
    background-color: #313338;
`

const ChatInputContainer = styled.div`
    width: 16rem;
    position : fixed;
    bottom: 0;
    background-color: #313338;
`

export default ChatMenu;