import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSearch } from '@/context/SearchContext'

export const SelectLocation = () => {
  const { searchParams, setLocation } = useSearch()

  return (
    <Select value={searchParams.location} onValueChange={setLocation}>
      <SelectTrigger className="w-[380px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="asd">Select One</SelectItem>
        <SelectItem value="121 Albright Way, Los Gatos, CA 95032">121 Albright Way, Los Gatos, CA 95032</SelectItem>
        <SelectItem value="888 Broadway, New York, NY 10003">888 Broadway, New York, NY 10003</SelectItem>
        <SelectItem value="5808 Sunset Blvd, Los Angeles, CA 90028">5808 Sunset Blvd, Los Angeles, CA 90028</SelectItem>
      </SelectContent>
    </Select>
  )
}
