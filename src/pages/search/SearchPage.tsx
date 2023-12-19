import { SearchContextType, useSearch } from '../../context/SearchContext.tsx'
import { ListItems } from './ListItems.tsx'
import { Pagination } from './Pagination.tsx'
import { SearchControls } from './SearchControls.tsx'

export const SearchPage = () => {
  const { results } = useSearch() as SearchContextType

  return (
    <>
      <SearchControls />
      <Pagination />
      <ListItems items={results?.businesses} />
    </>
  )
}
