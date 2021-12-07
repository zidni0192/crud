import React from 'react'
let timeout = null

function Search(props) {
    const onChange = (evt) => {
        clearTimeout(timeout)
        setTimeout(() => {
            props.onChange(evt.target.value)
        }, 100)
    }
    return (
        <input type="text" id="search" onChange={onChange} placeholder="Search Book ... " />
    )
}
Search.defaultProps = {
    onChange: () => { }
}

export default Search