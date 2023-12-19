import { useSearch } from '@/context/SearchContext'
import styled from 'styled-components'
import { SelectLocation } from './SelectLocation'
import { SelectSort } from './SelectSort'

const SearchDescription = styled.p`
  margin: 2rem 0;
  text-align: center;
  display: flex;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`

export const SearchControls = () => {
  const { searchParams } = useSearch()

  return (
    <SearchDescription>
      Showing boba shops within
      <strong>{searchParams.distance}</strong> meters of
      <SelectLocation />
      sorted by
      <SelectSort />
    </SearchDescription>
  )
}
