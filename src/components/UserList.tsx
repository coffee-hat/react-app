import { User } from '../modeles/User';
import UserItem from './UserItem';

type Props = {
    users: User[];
    onClick: (user: User) => void;
}

const UserList = ({users, onClick}: Props) => {
    return (
        <>
        {
        users.map(({name, avatar, id}) => {
            <UserItem
                key={id}
                avatar={avatar}
                name={name}
                onClick={() => onClick({name, avatar, id})}
            />
            })
        }
        
        </>
    );
}

export default UserList;
