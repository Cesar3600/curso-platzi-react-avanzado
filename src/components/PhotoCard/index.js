
import React from 'react'
const IMG_DEFAULT = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id=3, likes='?', src = IMG_DEFAULT }) => {
    return(
        <article>
            <a href={`/detail/${id}`}>
                <div>
                    <img src={src}/>
                </div>
            </a>
            <button>
                {likes} likes!
            </button>
        </article>
    )
}
