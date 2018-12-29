import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 10vw;
  height: auto;
  background: #fff;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

const HeaderItem = styled.a`
  font-family: Theinhardt-Bold;
  font-size: 1.18rem;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export {
  HeaderWrapper,
  HeaderItem,
}
