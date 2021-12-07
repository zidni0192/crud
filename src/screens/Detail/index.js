import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import FormBook from '../../components/formBook'
import Image from '../../components/image'
import { withBookConsumer } from '../../context/book'
import { convertDate } from '../../utils/string'

function BookDetail({ getBookById, book, setBook }) {
  const [visible, setVisible] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  let data = getBookById ? getBookById(id) || {} : {}

  const onDelete = () => {
    let tempBook = [...book]
    const index = tempBook.findIndex(item => item.bookid === id)
    if (index > -1) tempBook.splice(index, 1)
    data = {}
    setBook(tempBook)
    navigate('/')
  }

  const onAction = (newData = {}) => {
    let currentData = [...book]
    const index = currentData.findIndex(item => item.bookid === id)
    newData.updated_at = new Date()
    currentData[index] = { ...currentData[index], ...newData }
    setBook(currentData)
    setVisible(false)
  }

  return (
    <React.Fragment>
      <div className="book-detail">
        <div>
          <ul>
            <li><Link to="/" className="back">&lArr;</Link></li>
            <li className="button" onClick={() => setVisible(true)}>Edit</li>
            <li className="button" onClick={onDelete}>Delete</li>
          </ul>
          <Image className={'imageHeader'} src={data.image_url} alt={data.title} />
        </div>
        <div className="content">
          <Image className={'imageBook'} src={data.image_url} alt={data.title} />
          <p className="title">{data.title}</p>
          <p className="date">{convertDate(data.updated_at)}</p>
          <p className="text">{data.description}</p>
        </div>
      </div>
      {visible && <FormBook onClose={() => { setVisible(false) }} title={"Edit book"} action={onAction} currentData={data} />}
    </React.Fragment>
  )
}

export default withBookConsumer(BookDetail)