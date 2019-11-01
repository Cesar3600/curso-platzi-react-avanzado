import Styled from 'styled-components'
import { fadeIn } from '../../components/styles/animation'

export const ImgWrapper = Styled.div`
    ${fadeIn({ time: '2s' })}
    border-radius: 10px;
    display: block;
    padding: 56.25% 0 0 0;
    height: 0;
    overflow:hidden;    
    width:100%;
    position: relative;
`
export const Article = Styled.article`
    min-height: 250px;
`

export const Img = Styled.img`
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit:cover;
    position:absolute;
    top:0;
    width:100%;
`
export const Button = Styled.button`
    padding-top: 8px;
    display:flex;
    align-items: center;
    & svg{
        margin-left: 4px;
    }
`
