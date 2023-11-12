import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../../Serveces/User";

interface IUser {
    id: number;
    name: string;
    email: string;
    isAgreeEmailUpdate: boolean;
}

export function UserDataPage() {
    const { id } = useParams();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const userService = new User();
        userService.getUserById(Number(id)).then(data => setUser(data));
    }, [id]);
    return (
        <div>
            {user ? <>
                <div>id:{user.id}</div>
                <div>name:{user.name}</div>
                <div>email:{user.email}</div>
            </> : <div>loading...</div>}
        </div>
    )
}