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

const books = [...Fantasy, ...Horror, ...Romance, ...Scifi]

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar subtitle="Library" />
      </header>
      <main>
        <MyAlert />
        <Welcome />
        <Container>
          <Row className="justify-content-center pt-3 d-flex">
            <BookList books={books} />
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
