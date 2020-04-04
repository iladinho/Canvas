import { createGlobalStyle, css } from 'styled-components'
// @ts-ignore
import GeorgiaSrc from '../../resources/fonts/georgia.ttf'
// @ts-ignore
import ImpactSrc from '../../resources/fonts/impact.ttf'
// @ts-ignore
import MyriadSrc from '../../resources/fonts/myriad.ttf'
// @ts-ignore
import TahomaSrc from '../../resources/fonts/tahoma.ttf'
// @ts-ignore
import TimesSrc from '../../resources/fonts/times.ttf'
// @ts-ignore
import TrebucSrc from '../../resources/fonts/trebuc.ttf'
// @ts-ignore
import VerdanaSrc from '../../resources/fonts/verdana.ttf'
// @ts-ignore
import ArialSrc from '../../resources/fonts/Arial.ttf'

export const styles = css`
  html,
  body {
    @font-face {
      font-family: 'Tahoma';
      src: local('Tahoma'), url(${TahomaSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Georgia';
      src: local('Georgia'), url(${GeorgiaSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Impact';
      src: local('Impact'), url(${ImpactSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Myriad';
      src: local('Myriad'), url(${MyriadSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Times New Roman';
      src: local('Times New Roman'), url(${TimesSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Trebuchet MS';
      src: local('Trebuchet MS'), url(${TrebucSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Verdana';
      src: local('Verdana'), url(${VerdanaSrc}) format('truetype');
    }

    @font-face {
      font-family: 'Arial';
      src: local('Arial'), url(${ArialSrc}) format('truetype');
    }
`

export const GlobalStyle = createGlobalStyle`
  ${styles}
`
