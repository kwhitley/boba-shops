import { useSearch } from '../../context/SearchContext.tsx'
import { ListItems } from './ListItems.tsx'
import { SearchControls } from './SearchControls.tsx'
import { Pagination } from './Pagination.tsx'

export const SearchPage = () => {
  const { results } = useSearch()

  return (
    <>
      <SearchControls />
      <Pagination />
      <ListItems items={results?.businesses} />
    </>
  )
}
