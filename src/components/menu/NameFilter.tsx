import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../lib/style-guide'

export const NameFilter: React.FC<{}> = () => {
  return (
    <InputContainer>
      <FilterInput placeholder="Filter by name"></FilterInput>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 100%;
  height: 49px;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 16px;
  border-bottom: solid 1px;
  border-color: ${Colors.Border};
`

const FilterInput = styled.input`
  outline: none;
`
