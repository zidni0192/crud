import React from 'react'
import { Link } from 'react-router-dom'
import { splitText } from '../utils/string'
import Image from './image';

function List({ book }) {
    return (
        <div className="list">
            {
                book.map(
                    (item, key) => {
                        return (
                            <div className="list-item" key={key}>
                                <Link to={`/${item.bookid}`}>
                                    <div className="item" id="items" bookid={item.bookid}>
                                        <Image src={item.image_url} alt="gambar" />
                                        <div>
                                            <p>{splitText(item.title)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

List.defaultProps = {
    book: []
}

export default List