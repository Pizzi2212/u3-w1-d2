import SingleBook from './Card'

const BookList = ({ books }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center ">
      {books.map((book, index) => (
        <SingleBook key={index} book={book} />
      ))}
    </div>
  )
}

export default BookList
