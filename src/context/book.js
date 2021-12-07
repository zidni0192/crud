import data from "../mockups/book";

import React, { Component } from 'react'
export const BookContext = React.createContext();

export class BookContextProvider extends Component {
    state = {
        book: data
    }

    setBook = book => this.setState({ book })
    getBookById = (id) => this.state.book.find(item => item.bookid === id)
    render() {
        return (
            <BookContext.Provider
                value={{ book: this.state.book, setBook: this.setBook, getBookById: this.getBookById }}
            >
                {this.props.children}
            </BookContext.Provider>
        )
    }
}
export const BookContextConsumer = BookContext.Consumer

export const withBookConsumer = WrappedComponent => {
    return props => (
        <BookContextConsumer>
            {value => (
                <WrappedComponent
                    {...value}
                    {...props}
                />
            )}
        </BookContextConsumer>
    )
}