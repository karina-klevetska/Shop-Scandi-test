import { Categories } from '../components/Categories/Categories'

export const CategoriesPage = ({ category }) => {
  return (
    <>
      <h1 style={{ display: 'none' }}>categories page</h1>
      <Categories category={category} />
    </>
  )
}
