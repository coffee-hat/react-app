import { User } from '../../modeles/User';
import UserItem from './UserItem';

type Props = {
    users: User[];
    onClick: (id: number) => void;
}

const UserList = ({users, onClick}: Props) => {
    return (
        <>
            {users.map(({name, avatar, id}) => {
                return <UserItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    onClick={() => onClick(id)}
                />
                })
            }
        </>
    );
}

export default UserList;
