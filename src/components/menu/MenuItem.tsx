import React from 'react'
import { User } from './Types'
import styled from 'styled-components'
import { Colors } from '../../lib/style-guide'

interface MenuItemProps {
  item: User
  key: number
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <IconContainer>
        <CompanyIcon src={item.orgIcon} />
        <UserIcon src={item.userIcon} />
      </IconContainer>
      <NameContainer>{item.name}</NameContainer>
      <JobContainer>{item.job}</JobContainer>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  padding-left: 21px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
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
