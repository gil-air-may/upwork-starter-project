import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { MenuItem } from './MenuItem'
import { NameFilter } from './NameFilter'
import { User } from './Types'

interface MenuProps {
  containerStyle?: CSSProperties
  items: User[]
}

export const Menu: React.FC<MenuProps> = ({ containerStyle, items }) => {
  const itemsArray = items.map((item, index, arr) => {
    if (arr.length === 1) {
      console.log('over here')
      return <MenuItem item={item} position="single" key={item.id} />
    }
    if (index === 0) {
      return <MenuItem item={item} position="first" key={item.id} />
    }

    if (index === arr.length - 1) {
      return <MenuItem item={item} position="last" key={item.id} />
    }
    return <MenuItem item={item} position={undefined} key={item.id} />
  })

  return (
    <MenuContainer style={containerStyle}>
      <NameFilter />
      {itemsArray}
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  align-self: center;
  width: 270px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #d1e3f8;
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
`
