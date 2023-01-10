import { makeStyles } from "@mui/styles";
import { isMobile } from "react-device-detect";

export const useHomeStyles = makeStyles({
   root: {
      margin: 'auto',
   },
   header: {
      height: 'auto',
      // width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'blue',
      paddingTop: '5vh',
      paddingBottom: '5vh'
   },
   logoCD: {
      width: '300px'
   },
   body: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2vw',
   },
   searchInput: {
      display: 'flex',
      width: (isMobile || window.innerWidth <= 400) && '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FABFBF40',
      borderRadius: '20px',
      padding: '15px',
      paddingTop: '5px',
      paddingBottom: '5px',
      margin: '1vw',
   },
   input: {
      color: 'white',
      width: '300px',
      padding: '5px',
      transition: 'width .2s ease-in-out',
      border: '0px',
      backgroundColor: 'transparent',
      '&:focus': {
         boxSizing: 'border-box',
         outline: 'none',
         width: props => (isMobile || window.innerWidth <= 400) ? `100%` : '400px',
      },
      '&::placeholder': {
         fontFamily: 'MinecraftiaRegular',
         color: '#ffffff',
         cursor: 'pointer',
         textShadow: '3px 2px #00000020',
         letterSpacing: '1px',
         fontSize: '1.2vw'
      },
   },
})