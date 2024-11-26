import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/MyNavComponents'
import MyFooter from './components/MyFooterComponents'
import Welcome from './components/Welcome'
import MyAlert from './components/Alert'
import MyBooks from './components/MainContent'
import MyBooksHorror from './components/MainContent'
import { Container, Row } from 'react-bootstrap'

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
            <MyBooks />
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
