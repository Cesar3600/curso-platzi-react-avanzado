
import { keyframes, css } from 'styled-components'

const keyFrameEffect = keyframes`
    from{
        filter:blur(33px);
        opacity: 0
    }
    to{
        filter: blur(0px);
        opacity:1;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${keyFrameEffect} ${type};`
