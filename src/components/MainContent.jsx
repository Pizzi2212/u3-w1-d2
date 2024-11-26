import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import libri from '../data/fantasy.json'

function MyBooks() {
  return (
    <>
      {libri.map((books) => (
        <Card style={{ width: '18rem' }} className="m-3" key={books.asin}>
          <Card.Img variant="top" src={books.img} />
          <Card.Body>
            <Card.Title>{books.title}</Card.Title>
            <Card.Text>{books.category}</Card.Text>
            <Card.Text>€ {books.price}</Card.Text>
            <Button variant="success">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default MyBooks
