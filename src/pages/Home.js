import React from 'react'

import {
  MainText, TimeText, ProjectText, ProjectList, ProjectListItem, CurrentText, CurrentInfo,
} from 'Styled/Home'
import { HomeGrid } from 'Styled/Grid'
import Works from 'Utils/works'

const Home = () => (
  <HomeGrid>
    <TimeText>{Date()}</TimeText>
    <MainText>Evan</MainText>
    <MainText>—</MainText>
    <MainText>Kysley</MainText>
    <ProjectText>W–O–R K—</ProjectText>
    <CurrentText>CURRENTLY</CurrentText>
    <CurrentInfo>
      Greater Toronto Area -
      - On Contract w/ Beaxy Digital -
      Lead F/E Eng for Scribe - Front End Engineer -
      22
    </CurrentInfo>
    <ProjectList>
      {Works.map(work => (
        <ProjectListItem key={work.order}>
          <a href={work.link}>
            {work.name}
          </a>
          <span>{work.desc}</span>
        </ProjectListItem>
      ))}
    </ProjectList>
  </HomeGrid>
)

export default Home
