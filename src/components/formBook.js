import React, { useState } from 'react'

const FormBook = ({ title, currentData, action, onClose }) => {
    const [data, setData] = useState(currentData || {})

    function getData(evt) {
        setData({ ...data, [evt.target.name]: evt.target.value })
    }

    return (
        <div className='modal'>
            <section className="modal-main">
                <button onClick={onClose} className={'close'}>X</button>
                <p>{title}</p>
                <div>
                    <div className="inputGroup">
                        <div className="label">
                            <p>Url Image</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Url Image ..." id={'image_url'} name="image_url" onChange={getData} value={data.image_url} required />
                        </div>
                    </div>
                    <div className="inputGroup">
                        <div className="label">
                            <p>Title</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Title ..." id={'title'} name="title" onChange={getData} value={data.title} required />
                        </div>
                    </div>
                    <div className="inputGroup">
                        <div className="label">
                            <p>Description</p>
                        </div>
                        <div className="input">
                            <textarea placeholder="Description" id={'description'} rows="5" name="description" onChange={getData} value={data.description} required></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="save" onClick={() => action(data)}>Save</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default FormBook