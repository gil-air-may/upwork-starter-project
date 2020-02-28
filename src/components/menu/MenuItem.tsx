import React from 'react'
import { User } from './Types'
import styled from 'styled-components'
import { Colors } from '../../lib/style-guide'

interface MenuItemProps {
  item: User
  key: number
  position: 'first' | 'last' | 'single' | undefined
}

interface Position {
  position: 'first' | 'last' | 'single' | undefined
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, position }) => {
  console.log(position)
  return (
    <ItemContainer position={position}>
      <IconContainer>
        <CompanyIcon src={item.orgIcon} />
        <UserIcon src={item.userIcon} />
      </IconContainer>
      <NameContainer>{item.name}</NameContainer>
      <JobContainer>{item.job}</JobContainer>
    </ItemContainer>
  )
}

const ItemContainer = styled.div<Position>`
  padding-left: 21px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  margin-top: ${(props) =>
    props.position === 'first' || props.position === 'single' ? '10px' : '0px'};
  margin-bottom: ${(props) =>
    props.position === 'last' || props.position === 'single' ? '10px' : '0px'};

  cursor: pointer;
  &:hover {
    background-color: ${Colors.BG2};
  }
`

const IconContainer = styled.div`
  position: relative;
  display: flex;
  width: 39px;
  height: 24px;
  align-items: center;
  margin-right: 11px;
`

const CompanyIcon = styled.img`
  position: absolute;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 24px;
  height: 24px;
  border: solid 1px;
  border-radius: 100px;
  border-color: ${Colors.Border};
  box-sizing: border-box;
  background: white;
  z-index: 1;
`

const UserIcon = styled.img`
  position: absolute;
  z-index: 2;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 22px;
  height: 22px;
  border-radius: 100%;

  right: 8.33%;
`

const NameContainer = styled.div`
  font-size: 14px;
  margin-right: 8px;
`

const JobContainer = styled.div`
  font-size: 12px;
  color: ${Colors.TX3};
`
