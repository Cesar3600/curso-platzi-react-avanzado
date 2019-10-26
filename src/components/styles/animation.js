
import { keyframes, css } from 'styled-components'

const keyFrameEffect = ({ blurIni }) => keyframes`
    from{
        filter:blur(${blurIni});
        opacity: 0;
    }
    to{
        filter: blur(0);
        opacity:1;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease', blurIni = '300px' } = {}) =>
  css`animation: ${time} ${keyFrameEffect({ blurIni })} ${type};`
