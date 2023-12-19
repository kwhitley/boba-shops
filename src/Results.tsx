import { useEffect } from 'react'
import { useApi } from './context/ApiContext'
import styled from 'styled-components'

const CodeBlock = styled.pre`

`

export const Results = () => {
  const { results, search } = useApi()

  useEffect(() => {
    console.log('loading results from useEffect...')

    search({
      location: '121 Albright Way, Los Gatos, CA 95032',
    })
  }, [])

  return (
    <pre>
      {JSON.stringify(results, null, 2)}
    </pre>
  )
}
