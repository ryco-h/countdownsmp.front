import { makeStyles } from "@mui/styles";

export const useMerchStyles = makeStyles({
   root: {

   },
   cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2vw',
      gap: '100px',
   },
   cardBody: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '350px',
      gap: '20px',
      backgroundColor: '#3F4448',
      padding: '20px',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
   },
   coverImage: {
      maxWidth: '100%',
      height: 'auto'
   },
   description: {
      fontFamily: 'MinecraftiaRegular',
      color: 'white'
   }
})