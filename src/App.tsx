import { createContext, useState } from 'react'
import styled from '@emotion/styled';
import UserMenu from './components/UserMenu';
import ChatMenu from './components/ChatMenu';
import { useUser } from './hooks/useUser';
import { User } from './modeles/User';

export default function App() {
  const [selectedUser, setSelectedUser] = useState<User>();
  const { users, profil, loading } = useUser();
  
  const handleClick = (id: number) => {
    setSelectedUser(users[id]);
  }

  if(loading){
    return <div>loading</div>
  }
  return (
    <>
      <AppContainer>
        <UserMenuContainer>
          <UserMenu users={users} profil={profil} onClick={handleClick}/>
        </UserMenuContainer>
        <ChatMenuContainer>
          <ChatMenu currentUser={selectedUser} profil={profil}/>
        </ChatMenuContainer>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`

const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ChatMenuContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`