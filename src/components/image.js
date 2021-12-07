import React, { useState } from 'react'

export default function Image({ src, ...param }) {
    const [isError, setError] = useState(false)
    return (
        <img {...param} alt={`gambar-${src}`} src={isError ? 'https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image.jpg' : src} onError={() => setError(true)} />
    )
}
