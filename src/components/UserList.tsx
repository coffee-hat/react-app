import { User } from '../modeles/User';
import UserItem from './UserItem';

type Props = {
    users: User[];
    onClick: (user: User) => void;
}

const UserList = ({users, onClick}: Props) => {
    const test = users.map(({name, avatar, id}) => {
        return <div>{name}</div>
    })

    return (
        <>
            {users.map(({name, avatar, id}) => {
                return <UserItem
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
