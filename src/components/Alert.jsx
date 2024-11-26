import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function MyAlert() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert className="pt-5" show={show} variant="success">
        <Alert.Heading>Benvenuto nella tua libreria di fiducia!</Alert.Heading>
        <p>
          Viaggia attraverso infiniti mondi e lasciati travolgere dai racconti
          dei nostri libri!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Chiudi e inizia il viaggio!
          </Button>
        </div>
      </Alert>
    </>
  )
}

export default MyAlert
