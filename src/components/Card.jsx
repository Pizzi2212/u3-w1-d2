import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Component } from 'react'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }))
  }

  render() {
    const { book } = this.props
    const { selected } = this.state

    return (
      <Card
        style={{
          width: '18rem',
          height: '40rem',
          border: selected ? '3px solid blue' : '2px solid black',
        }}
        className="m-3"
        onClick={this.toggleSelected}
      >
        <Card.Img style={{ height: '22rem' }} variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>€ {book.price}</Card.Text>
          <Button className="mt-4" variant="success">
            Buy
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
