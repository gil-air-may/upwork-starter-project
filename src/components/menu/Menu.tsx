import React, { CSSProperties } from 'react'
import styled from 'styled-components'

interface MenuProps {
  containerStyle?: CSSProperties
}

export const Menu = (props: MenuProps) => {
  const { containerStyle } = props
  return <MenuContainer style={containerStyle}></MenuContainer>
}

const MenuContainer = styled.div`
  height: 230px;
  width: 270px;
  align-self: center;
  margin: 0 auto;

  /* STD W */

  background: #ffffff;
  /* Primary30 */

  border: 1px solid #d1e3f8;
  /* Depth10 */

  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
`
