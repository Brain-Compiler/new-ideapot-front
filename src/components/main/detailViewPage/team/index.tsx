import Image from "next/image";

import styled from "styled-components";

import logo from "@/assets/imgs/salePage/Team_Logo.png";
import { useState } from "react";

interface Team {
  rank: string;
  name: string;
  role: string;
}

const Team = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      rank: "팀장",
      name: "박민혁",
      role: "프로젝트 매니저",
    },
    {
      rank: "팀원",
      name: "김무일",
      role: "프론트엔드",
    },
    {
      rank: "팀원",
      name: "윤서준",
      role: "매니저",
    },
  ]);

  return (
    <Container>
      <Image
        src={logo}
        alt="team"
        style={{
          width: "9.6875rem",
          height: "9.6875rem",
          marginRight: "4.875rem",
        }}
      />
      <div>
        <TeamText>팀</TeamText>
        <TeamList>
          {teams.map((team, key) => (
            <DevelopmentPart key={key}>
              <Rank>{team.rank}</Rank>
              <Name>{team.name}</Name>
              <Role>{team.role}</Role>
            </DevelopmentPart>
          ))}
        </TeamList>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: (100% - 1.5rem);
  height: 9.6875rem;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  display: flex;
`;

const TeamText = styled.h1`
  font-size: 1.25rem;
`;

const TeamList = styled.div`
  width: 100%;
  height: 5.25rem;
  margin-top: 1.5rem;
  overflow: scroll;
`;

const DevelopmentPart = styled.div`
  display: flex;
  margin-top: 0.75rem;

  :first-child {
    margin-top: 0;
  }
`;

const Rank = styled.span`
  display: block;
  width: 4.125rem;
  font-size: 0.875rem;
`;

const Name = styled.span`
  display: block;
  width: 5.9375rem;
  font-size: 0.875rem;
`;

const Role = styled.span`
  display: block;
  font-size: 0.875rem;
`;

export default Team;
