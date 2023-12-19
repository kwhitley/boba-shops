import { useSearch } from '@/context/SearchContext'
import { Button } from '@/components/ui/button'
import styled from 'styled-components'

const PaginationContainer = styled.section`
  display: flex;
  gap: 0.5em;
  margin: 1em;
  justify-content: flex-end;
`

export const Pagination = () => {
  const { on_page, max_pages, prev, next } = useSearch()

  return (
    <PaginationContainer>
      {
        on_page > 1 && <a onClick={prev}>&lt; Prev</a>
      }
      Showing page {on_page} of {max_pages}
      {
        on_page < max_pages && <a onClick={next}>Next &gt;</a>
      }
    </PaginationContainer>
  )
}
