import styled from "@emotion/styled";
import UserList from "./userMenu/UserList";
import Profil from "./userMenu/Profil";
import { User } from "../modeles/User";
import { useState } from "react";

type Props = {
    users: User[];
    profil: User;
}

const UserMenu = ({users, profil}: Props) => {
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
    const [inputSearch, setInputSearch] = useState<string>("");

    const handleInputChange = (e: { target: { value: string; }; }) => {
        setFilteredUsers([]);
        setInputSearch(e.target.value);
        let usersToDisplay: User[] = [];

        users.forEach(user => {
            if(user.name.toLowerCase().indexOf(inputSearch.toLowerCase()) > -1){
                usersToDisplay.push(user);
                
            }
        });
        
        setFilteredUsers(usersToDisplay);
    };

    return (
        <>  
            <SearchBarContainer>
                <input type="text" value={inputSearch} onChange={handleInputChange}></input>
            </SearchBarContainer>
            <UserListContainer>
                <UserList users={filteredUsers} onClick={console.log}/>
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
    position : fixed;
    up: 0;
    border-bottom: solid #1f2023 1px;
    background-color: #2b2d31;
    input {
        background-color: #1e1f22;
        border-radius : 0.25rem;
        color: #73797f;
        margin: 0.8rem auto;
    }
`

const UserListContainer = styled.div`
    width: 16rem;
    border-right: 1px solid #bdbdbd;
    overflow-y: hidden;
    background-color: #2b2d31;
`
const ProfilContainer = styled.div`
    width: 16rem;
    position : fixed;
    bottom: 0;
    background-color: #232428;
`

export default UserMenu;