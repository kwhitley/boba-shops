import { BusinessType } from '@/context/SearchContext'
import styled from 'styled-components'

const Details = styled.small`
  font-size: 0.65em;
  font-wieght: lighter;
`

const Rating = styled.span`
  font-size: 1.3em;
`

export const ListItems = ({ items }: ListItemsProps) => (
  <table>
    <thead>
      <tr>
        <th>Shop Name</th>
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
              <Details>
                {
                  business.location.display_address.map(line => <div>{line}</div>)
                }
              </Details>
            </td>
            <td className="center">
              <Rating>{business.rating}</Rating> <small>({business.review_count} reviews)</small>
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
