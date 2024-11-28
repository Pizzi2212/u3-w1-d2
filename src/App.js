import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/MyNavComponents'
import MyFooter from './components/MyFooterComponents'
import Welcome from './components/Welcome'
import MyAlert from './components/Alert'
import Fantasy from './data/fantasy.json'
import Horror from './data/horror.json'
import Romance from './data/romance.json'
import Scifi from './data/scifi.json'
import { Container, Row } from 'react-bootstrap'
import BookList from './components/Booklist'
import { useState } from 'react'
const books = [...Fantasy, ...Horror, ...Romance, ...Scifi]

function App() {
  const [searcher, setSearcher] = useState('')
  return (
    <div className="App">
      <header>
        <CustomNavbar
          searcher={searcher}
          setSearcher={setSearcher}
          subtitle="Library"
        />
      </header>
      <main>
        <MyAlert />
        <Welcome />
        <Container>
          <Row className="justify-content-center pt-3 d-flex">
            <BookList searcher={searcher} books={books} />
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
