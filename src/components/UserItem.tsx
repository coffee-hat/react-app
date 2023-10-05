import styled from "@emotion/styled/macro";

type Props = {
    avatar: string;
    name: string;
    onClick?: () => void;
}
const UserItem = ({avatar, name, onClick}: Props) => {
    return (
        <Container onClick={onClick}>
            <Avatar src={avatar}/>
            <div>{name}</div>
        </Container>
    );
}

export default UserItem;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
    
    cursor: pointer;
    border-radius : 0.25rem;
    transition: background-color 0.1s ease-in-out;
    &:hover {
        background-color: #fafafa;
    }
`


const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`