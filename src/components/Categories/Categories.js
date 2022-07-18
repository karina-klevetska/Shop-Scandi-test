import { useQuery, gql } from '@apollo/client'

const GET_PRODUCTS = gql`
  query getProducts($category: String!) {
    category(input: { title: $category }) {
      products {
        id
        name
        inStock
        gallery
      }
    }
  }
`

const CategoryDisplay = ({ category }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { category },
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <ul>
      {data.category.products.map(({ name, gallery }) => (
        <li key={Date.now()}>
          <img src={gallery[0]} alt='' width={330} style={{}} />
          {name}
        </li>
      ))}
    </ul>
  )
}

export const Categories = ({ category }) => {
  return <CategoryDisplay category={category} />
}
