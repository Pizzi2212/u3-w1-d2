import SingleBook from './Card'

const BookList = ({ books, searcher }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center ">
      {books
        .filter(({ title }) =>
          title.toLowerCase().includes(searcher.toLowerCase())
        )
        .map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
    </div>
  )
}

export default BookList
