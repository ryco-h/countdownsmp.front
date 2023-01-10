import { useHomeStyles } from "../home/home.style"
import { useMerchStyles } from "./merch.style"
import logo from '../../media/logo.png'
import logoCD from '../../media/logo_cd.png'

export default function Merch() {

   return(
      <MerchIndex/>
   )
}

function MerchIndex() {

   const styles = useMerchStyles()
   const homeStyles = useHomeStyles()

   return(
      <div className={styles.root}>
         <div className={homeStyles.header}>
            <img src={logoCD} className={homeStyles.logoCD} height={'auto'}/>
            <div style={{
               display: 'flex',
               gap: '20px',
               margin: '1vw'
            }}>
               <a href='/' style={{color: (window.location.pathname === '/') && '#ffffff60'}} className="text">Home</a>
               <a href='/merchandise' style={{color: (window.location.pathname === '/merchandise') && '#ffffff60'}} className="text">Merchandise</a>
            </div>
         </div>

         <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
               <img className={styles.coverImage} src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Minecraft-creeper-face.jpg'/>
               <p className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </p>
            </div>

            <div className={styles.cardBody}>
               <img className={styles.coverImage} src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Minecraft-creeper-face.jpg'/>
               <p className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </p>
            </div>
         </div>
      </div>
   )
}