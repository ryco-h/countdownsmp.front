import { makeStyles } from "@mui/styles";
import { isMobile } from "react-device-detect";

export const useMerchStyles = makeStyles({
   root: {

   },
   cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2vh',
      flexWrap: 'wrap',
      gap: (isMobile) && '20px'
   },
   cardBody: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '350px',
      width: (isMobile) ? '70%' : '100%',
      // flex: '1',
      gap: '20px',
      backgroundColor: '#3F4448',
      padding: '20px',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      margin: '2vw'
   },
   coverImage: {
      maxWidth: '100%',
      height: 'auto'
   },
   description: {
      fontFamily: 'MinecraftiaRegular',
      color: 'white',
      fontSize: '15px'
   }
})