import { Backdrop, Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import { fetchData } from "../../services/fetch"
import { useAdminStyles } from "./admin.style"
import axios from 'axios'
import logo from '../../media/logo.png'
import logoCD from '../../media/logo_cd.png'
import { useHomeStyles } from "../home/home.style"
import './admin.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { isMobile } from "react-device-detect"

export default function Admin() {

   return(
      <AdminIndex/>
   )
}

function AdminIndex() {

   const styles = useAdminStyles()
   const homeStyles = useHomeStyles()

   const [listName, setListName] = useState()
   const [dataUsers, setDataUsers] = useState()
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      fetchData().then(res => {
         setDataUsers(res.obj)
      })
   }, [])

   const [name, setName] = useState('');
   const [ytChannel, setLink] = useState('')

   const handleChange = (event) => {
      setName(event.target.value);
      setLink(dataUsers.filter(data => data.name === event.target.value).map(data => data.ytChannel))
   };

   const handleYt = (event) => {
      setLink(event.target.value)
   }

   const submitYtChannel = () => {

      if(name === '') {
         window.alert('Enter name!')
      } else {   
         setLoading(true)
         // const url = 'http://localhost:5000/data/update'
         const url = 'https://countdownsmp.as.r.appspot.com/data/update'

         axios.put(url, {name, ytChannel})
         .then(res => {
            window.alert('Succeded updating!')
            window.location.reload()
            // setLoading(false)
         }).catch(err => {
            console.log(err)
         })
         setLoading(false)
      }
   }

   return(
      <Fragment>

         <div className={homeStyles.header}>
            <a href='/'><img src={logoCD} className={homeStyles.logoCD} height={'auto'}/></a>
            <div style={{
               display: 'flex',
               gap: '20px',
               margin: '1vw'
            }}>
               <a href='/' className="text">Home</a>
               <a href='/merchandise' className="text">Merchandise</a>
            </div>
         </div>

         <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '2vw'
         }}>
            <div style={{display: 'flex', flexDirection: (isMobile) ? 'column' : 'row', backgroundColor: 'white', width: '80%', padding: '2vw', margin: '1vw', gap: '20px'}}>
               <FormControl sx={{minWidth: 120 }} >
                  <InputLabel id="demo-simple-select-label">Name</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={name}
                     label="Name"
                     onChange={handleChange}
                  >
                     {(dataUsers) && dataUsers.map((user, idx) => (
                        <MenuItem key={user.name+idx} value={user.name}>{user.name}</MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <TextField value={(ytChannel) ? ytChannel : ''} placeholder="Youtube Channel" fullWidth onChange={handleYt}/>
               <Button variant="contained" onClick={() => submitYtChannel()}>
                  Save
               </Button>
            </div>
         </div>

         <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 99999999 }}
         open={loading}
         >
            <div style={{
               width: '100%',
               height: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               flexDirection: 'column',
               gap: '2vw'
            }}>
               <img className="blink-image" src={logo}/>
            </div>
         </Backdrop>
      </Fragment>
   )
}