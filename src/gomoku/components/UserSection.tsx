import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CurrentUser } from "./Board";
import { useUsers } from "../context/usersProvider";

export const UserSection: React.FC<{ currentUser: CurrentUser }> = ({
  currentUser,
}) => {
  const users = useUsers();
  return (
    <UserSectionContainer>
      <UserStack direction="row" spacing={1}>
        {currentUser === 0 && (
          <>
            <NowChip
              avatar={<Avatar sx={{ background: "#000000" }} />}
              label={users[0].name}
              variant="outlined"
            />
            <Chip
              avatar={<Avatar sx={{ background: "#ffffff" }} />}
              label={users[1].name}
            />
          </>
        )}
        {currentUser === 1 && (
          <>
            <Chip
              avatar={<Avatar sx={{ background: "#000000" }} />}
              label={users[0].name}
              variant="outlined"
            />
            <NowChip
              avatar={<Avatar sx={{ background: "#ffffff" }} />}
              label={users[1].name}
            />
          </>
        )}
      </UserStack>
      <CurrentUserText color="text.secondary">
        {users[currentUser].name} の番です
      </CurrentUserText>
    </UserSectionContainer>
  );
};

const UserSectionContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const UserStack = styled(Stack)`
  margin: 15px 0 15px;
`;

const NowChip = styled(Chip)`
  border: 2px solid #000000;
`;

const CurrentUserText = styled(Typography)`
  font-size: 14px;
`;
