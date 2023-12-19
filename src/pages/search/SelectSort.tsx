import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearch } from '@/context/SearchContext'

export const SelectSort = () => {
  const { searchParams, setSortBy } = useSearch()

  return (
    <Select value={searchParams.sort_by} onValueChange={setSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rating">rating</SelectItem>
        <SelectItem value="distance">distance</SelectItem>
      </SelectContent>
    </Select>
  )
}
