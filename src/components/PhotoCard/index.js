
import React,{useRef,useEffect} from 'react'
import {ImgWrapper, Img, Button} from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const IMG_DEFAULT = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes='?', src = IMG_DEFAULT }) => {
    const referencia = useRef(null)

    useEffect(() => {
        const observer = new window.IntersectionObserver(entry => {
            const {isIntersecting} = entry[0]
            console.log(isIntersecting)
        })
        observer.observe(referencia.current)
        //console.log(referencia.current)
    }, [referencia])

    return(
        <article ref={referencia}>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src}/>
                </ImgWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size="32px"/>{likes} likes!
            </Button>
        </article>
    )
}
