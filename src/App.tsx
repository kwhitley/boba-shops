import { SearchProvider } from './context/SearchContext'
import { SearchPage } from './pages/search/SearchPage'

// set up context providers
export const App = () => {
  return (
    <SearchProvider>
      <h1>Boba Shop Finder</h1>
      <SearchPage />
    </SearchProvider>
  )
}
