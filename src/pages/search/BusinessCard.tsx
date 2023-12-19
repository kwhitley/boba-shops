import { BusinessType } from '@/context/SearchContext'

// staged in case we need to do something with this later, for example show business details
export const BusinessCard = ({ business }: BusinessCardProps) => (
  <>
    {business.name}
  </>
)

type BusinessCardProps = {
  business: BusinessType
}
