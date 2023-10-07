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
                <Profil profil={profil} onClick={console.log}/>
            </ProfilContainer>
        </>
    );
}

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 16rem;
    height: 3rem;
    border-bottom: solid #1f2023 1px;
    background-color: #2b2d31;
    input {
        background-color: #1e1f22;
        color: #73797f;
        height: 1.5rem;
        margin: auto;
    }
`

const UserListContainer = styled.div`
    flex: 1;
    width: 16rem;
    border-right: 1px solid #bdbdbd;
    overflow-y: scroll;
    background-color: #2b2d31;
`
const ProfilContainer = styled.div`
    width: 16rem;
    background-color: #232428;
`

export default UserMenu;