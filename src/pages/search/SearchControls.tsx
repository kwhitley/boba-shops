import { SearchContextType, useSearch } from '@/context/SearchContext'
import styled from 'styled-components'
import { SelectLocation } from './SelectLocation'
import { SelectSort } from './SelectSort'

const SearchDescription = styled.p`
  margin: 2rem 0;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;
  justify-content: center;
  align-items: center;

  @media (max-width: 55em) {
    > section {
      flex: 1 100%;
    }
  }
`

const Section = styled.section`
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
`

export const SearchControls = () => {
  const { searchParams } = useSearch() as SearchContextType

  return (
    <SearchDescription>
      <Section>Showing boba shops within <strong>~{searchParams.radius}</strong> meters of</Section>

      <SelectLocation />
      <Section>
        sorted by
        <SelectSort />
      </Section>
    </SearchDescription>
  )
}
