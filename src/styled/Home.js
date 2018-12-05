import styled from '@emotion/styled'
import { css } from '@emotion/core'

const baseTextStyle = css`
  font-family: Theinhardt;
  margin: 0;
`

const mainTextStyle = css`
  font-size: 22rem;
  font-family: Theinhardt-Bold;
`

const MainText = styled.h1`
  ${baseTextStyle};
  ${mainTextStyle};
`

const timeTextStyle = css`
  font-size: 6rem;
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  border-right: 2px solid;
`

const TimeText = styled.span`
  ${baseTextStyle};
  ${timeTextStyle};
`

const projectTextStyle = css`
  font-size: 10rem;
  color: #fff;
  font-family: Theinhardt;
  grid-column: span 2;
  margin-left: 1em;
`

const ProjectText = styled.h2`
  ${baseTextStyle};
  ${projectTextStyle};
`

const ProjectList = styled.ul`
  list-style: none;
  grid-column: 2;
  grid-row: 4;
  justify-self: flex-end;
`

const ProjectListItem = styled.li`
  margin-bottom: 1em;
  > a {
    cursor: pointer;
    color: inherit;
    text-decoration: underline;
    display: block;
    font-size: 1.5rem;
    :hover {
      color: #fff;
      text-decoration: line-through;
    }
  }
`

const currentTextStyle = css`
  font-family: Theinhardt-Bold;
  font-size: 3rem;
  grid-column: 1;
  grid-row: 3;
  align-self: end;
`

const CurrentText = styled.h2`
  ${baseTextStyle};
  ${currentTextStyle};
`

const CurrentInfo = styled.p`
  font-size: 4rem;
  color: #fff;
`

export {
  MainText,
  TimeText,
  ProjectText,
  ProjectList,
  ProjectListItem,
  CurrentText,
  CurrentInfo,
}
