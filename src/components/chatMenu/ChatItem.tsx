import styled from "@emotion/styled";
import { User } from "../../modeles/User";
import { Message } from "../../modeles/Message";

type Props = {
    user: User,
    message: Message,
} 

const ChatItem = ({user, message}: Props) => {
    return (
        <Container>
            <Avatar src={user.avatar}/>
            <TextContainer>
                <MessageInfo>
                    <div>{user.name}</div>
                    <DateMsg>{message.date.getDate()}</DateMsg>
                </MessageInfo>
                <div>{message.msg}</div>
            </TextContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
    
    cursor: pointer;
    border-radius : 0.25rem;
    transition: background-color 0.1s ease-in-out;
    &:hover {
        background-color: #36373d;
    }
`

const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MessageInfo = styled.div`
    display: flex;
    gap: 1em;
`

const DateMsg = styled.div`
`

export default ChatItem;