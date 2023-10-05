import { User } from "../../modeles/User";
import UserItem from "./UserItem";

type Props = {
    profil: User;
    onClick: (msg: string) => void;
}

const Profil = ({profil, onClick}: Props) => {
    return (
        <>
            <UserItem
                key={profil.id}
                avatar={profil.avatar}
                name={profil.name}
                onClick={() => onClick("Profil interaction")}
            />
        </>
    );
}

export default Profil;