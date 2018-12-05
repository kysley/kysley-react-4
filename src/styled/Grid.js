import styled from '@emotion/styled'
import { css } from '@emotion/core'

const baseGridStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: minmax(150px, auto);
`

const HomeGrid = styled.div`
  ${baseGridStyles};
`

const GridSection = styled.div`
  ::after {
    display: block;
    background-color: #c1b58f;
    height: 2px;
    content: '';
  }
`

export {
  HomeGrid,
  GridSection,
}
