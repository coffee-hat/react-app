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
            <div>{message.msg}</div>
            <DateMsg>{message.date.toString()}</DateMsg>
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

const DateMsg = styled.div`
`

export default ChatItem;