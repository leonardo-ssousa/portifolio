import { PlayButtonWrapper } from './style'

const PlayButton = ({ link }) => {
    return ( 
        <PlayButtonWrapper onClick={()=> window.open(link)}>
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 6.13398C11.1667 6.51888 11.1667 7.48113 10.5 7.86603L6 10.4641L1.5 13.0622C0.833333 13.4471 3.43203e-07 12.966 3.76852e-07 12.1962L6.03983e-07 7L8.31114e-07 1.80385C8.64763e-07 1.03405 0.833334 0.552922 1.5 0.937822L6 3.5359L10.5 6.13398Z" fill="white"/>
            </svg>
        </PlayButtonWrapper>
     );
}
 
export default PlayButton;