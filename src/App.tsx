import { useEffect, useState } from 'react'
import { User } from './modeles/User';
import { createUser, getUsers } from './services/api';
import styled from '@emotion/styled';
import UserMenu from './components/UserMenu';
import ChatMenu from './components/ChatMenu';

const PROFIL_ID = 999;

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [profil, setProfil] = useState<User>({id:0, name: '', avatar: ''});
    
  useEffect(() => {
      (async() => {
          const nextUsers = await getUsers();
          const nextProfil = createUser(PROFIL_ID)
          setUsers(nextUsers);
          setProfil(nextProfil);
          setLoading(false);
      })();
  }, []);

  if(loading){
    return <div>loading</div>
  }
  return (
    <>
      <AppContainer>
        <UserMenuContainer>
          <UserMenu users={users} profil={profil}/>
        </UserMenuContainer>
        <ChatMenuContainer>
          <ChatMenu/>
        </ChatMenuContainer>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
`

const UserMenuContainer = styled.div`
`
const ChatMenuContainer = styled.div`
    
    display: flex;
    flex-direction: column;
`