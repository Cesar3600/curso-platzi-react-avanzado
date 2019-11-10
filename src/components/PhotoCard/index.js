
import React, {useRef,useEffect,useState} from 'react'
import {ImgWrapper, Img, Button, Article} from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const IMG_DEFAULT = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes='?', src = IMG_DEFAULT }) => {

    const Element = useRef(null)
    const [show,setShow] = useState(false)

    useEffect(()=>{
        Promise
            .resolve(
                window.IntersectionObserver == 'function'
                ? window.IntersectionObserver
                : import('intersection-observer')
            )
            .then(()=>{
                //console.log(Element.current)
                const Observer = new window.IntersectionObserver(response => {
                    const { isIntersecting } = response[0]
                    if (isIntersecting) {
                        setShow(true)
                    }
                })
                Observer.observe(Element.current)
            })
    },[Element])

    return(
        <Article ref={Element}>
            {
                show &&
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size="32px"/>{likes} likes!
                    </Button>                
                </>
            }
        </Article>
    )
}
