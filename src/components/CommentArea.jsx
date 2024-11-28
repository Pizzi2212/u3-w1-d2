import { Component } from 'react'

const myKey =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDBkNDhhZDEyOTAwMTU4NzZiYjMiLCJpYXQiOjE3MzI4MDc0MjMsImV4cCI6MTczNDAxNzAyM30.6CuTL1V-q2Xq2FFoFBCzMXZ-azM-H_1kUp8wIlSDFFw'
class Comment extends Component {
  state = {
    comments: [],
  }

  getComm = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.id,
      {
        headers: {
          Authorization: myKey,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((arrayOfComments) => {
        this.setState({
          comments: arrayOfComments,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this.getComm()
  }
  render() {
    const { comments } = this.state
    return (
      <>
        <h6>Valutazioni degli utenti</h6>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              {comment.comment || 'Nessun testo disponibile'}
            </li>
          ))}
        </ul>
      </>
    )
  }
}
export default Comment
