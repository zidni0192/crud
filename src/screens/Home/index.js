import React, { useEffect, useState } from 'react'
import FormBook from '../../components/formBook'
import List from '../../components/list'
import Navbar from '../../components/Navbar'
import Search from '../../components/search'
import { withBookConsumer } from '../../context/book'

function Home({ book, setBook }) {
    const [data, setData] = useState(book)
    const [visible, setVisible] = useState(false)
    const [keyword, setKeyword] = useState('')

    const onChangeKeyword = () => {
        const currentData = [...book]
        const filteredData = keyword && keyword !== "" ? currentData.filter(item => item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) : currentData
        setData(filteredData)
    }

    useEffect(() => {
        onChangeKeyword()
    }, [keyword])

    const onAction = (newData = {}) => {
        let currentData = [...data]
        newData.bookid = (Number(data[data.length - 1].bookid) + 1).toString()
        newData.updated_at = new Date()
        currentData.push(newData)
        setBook(currentData)
        setData(currentData)
        setVisible(false)
    }

    return (
        <React.Fragment>
            <Navbar />
            <Search onChange={setKeyword} />
            <button className="add" onClick={() => setVisible(true)}>ADD</button>
            <List book={data} />
            {visible && <FormBook onClose={() => { setVisible(false) }} title={"Add book"} action={onAction} />}
        </React.Fragment>
    )
}

export default withBookConsumer(Home)