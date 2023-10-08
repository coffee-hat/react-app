import styled from "@emotion/styled";
import { User } from "../../modeles/User";
import { BsFillMicFill, BsHeadphones, BsGearFill } from "react-icons/bs";

type Props = {
    profil: User;
}

const Profil = ({profil}: Props) => {
    return (
        <>
            <Container>
                <Avatar src={profil.avatar}/>
                <ProfilText>
                    <span>{profil.name}</span>
                    <div>En ligne</div>
                </ProfilText>
                <IconsContainer>
                    <BsFillMicFill/>
                    <BsHeadphones/>
                    <BsGearFill/>
                </IconsContainer>
            </Container>
        </>
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

const ProfilText = styled.div`
    flex: 1;
    font-size: 0.8rem;
    span {
        font-weight: bold;
    }
`

const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`

const IconsContainer = styled.div`
    display: flex;
    gap:0.8rem;
    margin-right: 0.5rem; 
`

export default Profil;