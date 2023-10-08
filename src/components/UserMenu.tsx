import styled from "@emotion/styled";
import UserList from "./userMenu/UserList";
import Profil from "./userMenu/Profil";
import { User } from "../modeles/User";
import { useState } from "react";

type Props = {
    users: User[];
    profil: User;
    onClick: (id: number) => void;
}

const UserMenu = ({users, profil, onClick}: Props) => {
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
    const [inputSearch, setInputSearch] = useState<string>("");

    const handleInputChange = (e: { target: { value: string; }; }) => {
        setFilteredUsers([]);
        setInputSearch(e.target.value);
        let usersToDisplay: User[] = [];

        users.forEach(user => {
            if(user.name.toLowerCase().includes(inputSearch.toLowerCase())){
                usersToDisplay.push(user);
                
            }
        });
        
        if(e.target.value != ''){
            setFilteredUsers(usersToDisplay);
        }
        else{
            setFilteredUsers(users);
        }
        
    };

    return (
        <>  
            <SearchBarContainer>
                <input type="text" value={inputSearch} onChange={handleInputChange}></input>
            </SearchBarContainer>
            <UserListContainer>
                <UserList users={filteredUsers} onClick={onClick}/>
            </UserListContainer>
            <ProfilContainer>
                <Profil profil={profil}/>
            </ProfilContainer>
        </>
    );
}

const SearchBarContainer = styled.div`
    display: flex;
    height: 3rem;
    background-color: var(--contact-gray);
    border-bottom: solid var(--dark-gray) 1px;
    input {
        background-color: var(--dark-gray);
        width: 90%;
        height: 1.5rem;
        margin: auto;
        border-radius: 8px;
        border: none;
    }
`

const UserListContainer = styled.div`
    flex: 1;
    width: 16rem;
    overflow-y: hidden;
    background-color: var(--contact-gray);
    &:hover {
        overflow-y: scroll;
    }
`
const ProfilContainer = styled.div`
    width: 16rem;
    background-color: var(--profil-gray);
`

export default UserMenu;