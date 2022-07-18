import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'
import { CategoriesPage } from './pages/CategoriesPage'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<CategoriesPage category={'all'} />} />
          <Route path='/all' element={<CategoriesPage category={'all'} />} />
          <Route
            path='/clothes'
            element={<CategoriesPage category={'clothes'} />}
          />
          <Route path='/tech' element={<CategoriesPage category={'tech'} />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
