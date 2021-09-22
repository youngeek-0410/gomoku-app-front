import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { useGameLog } from "../context/gameLogProvider";

export const GameLogTimeline: React.FC = () => {
  const gameLogs = useGameLog();

  if (gameLogs.length === 0) {
    return (
      <ScrollavleContent>
        {[...Array(10)].map((_, i) => {
          return (
            <Timeline key={i}>
              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ width: "30%" }}
                >
                  MM/dd HH:mm
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  XXXX vs OOOO
                  <br />
                  勝者: XXXX
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}
      </ScrollavleContent>
    );
  }
  return (
    <ScrollavleContent>
      {gameLogs.map((v, i) => {
        return (
          <Timeline key={i}>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ width: "30%" }}
              >
                {formatDate("MM/dd HH:mm", v.created_at)}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {v.user_1_name} vs {v.user_2_name}
                <br />
                勝者:{" "}
                {v.win_user === 1
                  ? v.user_1_name
                  : v.win_user === 2
                  ? v.user_2_name
                  : "引き分け"}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        );
      })}
    </ScrollavleContent>
  );
};

const formatDate = (format: string, dateString: string): string => {
  const date = new Date(dateString);
  const formatDate = format
    .replace(/yyyy/, `${date.getFullYear()}`)
    .replace(/MM/, `0${date.getMonth() + 1}`.slice(-2))
    .replace(/dd/, `0${date.getDate()}`.slice(-2))
    .replace(/HH/, `0${date.getHours()}`.slice(-2))
    .replace(/mm/, `0${date.getMinutes()}`.slice(-2));

  return formatDate;
};

const ScrollavleContent = styled.div`
  overflow: scroll;
  height: 55%;
`;