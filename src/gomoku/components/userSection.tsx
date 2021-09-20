import React from "react";
import styled from "styled-components";

import { CurrentUser } from "./board";
import { useUsers } from "../context/usersProvider";

export const UserSection: React.FC<{currentUser: CurrentUser}> = ({currentUser}) => {
    const users = useUsers();
    return (
        <UserSectionContainer>
          <p>{users[currentUser].name}の番です 先行: {users[0].name} 後攻: {users[1].name}</p>
        </UserSectionContainer>
    )
}

const UserSectionContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;