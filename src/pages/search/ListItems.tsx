import { BusinessType } from '@/context/SearchContext'

export const ListItems = ({ items }: ListItemsProps) => (
  <table>
    <thead>
      <tr>
        <th className="w-[100px]">Name</th>
        <th>Rating</th>
        <th>Distance</th>
      </tr>
    </thead>
    <tbody>
      {
        items?.map((business, index) =>
          <tr key={index}>
            <td className="font-medium">
              {business.name}
            </td>
            <td className="center">
              {business.rating} <small>({business.review_count} reviews)</small>
            </td>
            <td className="center">
              {Math.round(business.distance)}m
            </td>
          </tr>
        )
      }
    </tbody>
  </table>
)

type ListItemsProps = {
  items: BusinessType[]
}
