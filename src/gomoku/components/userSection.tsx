import React from "react";

import { CurrentUser } from "./board";
import { useUsers } from "../context/usersProvider";

export const UserSection: React.FC<{currentUser: CurrentUser}> = ({currentUser}) => {
    const users = useUsers();
    return (
        <>
          <p>{users[currentUser].name}の番です</p>
          <p>先行: {users[0].name} 後攻: {users[1].name}</p>
        </>
    )
}

export const UserSectionLoading: React.FC = () => {
    return (
        <>
          <p>準備中...</p>
        </>
    )
}