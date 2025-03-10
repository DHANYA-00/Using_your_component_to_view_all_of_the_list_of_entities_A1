// write the book component code here
import React from 'react'
import '../App.css'

function BookCard({name, image, genre ,author}) {
  return (
    <div className='book'>
        <img src={image} />
        <h2>{name}</h2>
        <h3>{genre}</h3>
        <h5>{author}</h5>

    </div>
  )
}

export default BookCard;
