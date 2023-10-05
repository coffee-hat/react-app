import { useEffect, useState } from 'react'
import { User } from './modeles/User';
import { createUser, getUsers } from './services/api';
import UserList from './components/UserList';
import styled from '@emotion/styled';

const PROFIL_ID = 999;

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<User>();
    
    useEffect(() => {
        (async() => {
            const nextUsers = await getUsers();
            const nextPRofile = createUser(PROFIL_ID)

            setUsers(nextUsers);
            setProfile(nextPRofile);
            setLoading(false);
            console.log(users);
        })();
    }, []);

    if(loading){
      return <div>loading</div>
    }
  return (
    <>
      <AppContainer>
        <UserListContainer>
          <UserList users={users} onClick={console.log}/>
        </UserListContainer>
        <ChatContainer>
          Chat
        </ChatContainer>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  diplay: flex;
`

const UserListContainer = styled.div`
  width: 16rem;
  border-right: 1px solid #bdbdbd;
  height: 100vh;
  overflow-y: scroll;
`
const ProfileContainer = styled.div`
  position : fixed;
  bottom: 0;
`

const ChatContainer = styled.div`
  flex: 1;
`