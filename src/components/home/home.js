import { Fragment, useEffect, useState } from "react"
import { fetchData } from "../../services/fetch"
import { useHomeStyles } from "./home.style"

import logoCD from '../../media/logo_cd.png'
import logo from '../../media/logo.png'
import './home.css'

import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material"
import { isMobile } from "react-device-detect"

function createData(uuid, name, time, ytChannel) {
  return { uuid, name, time, ytChannel };
}

export default function Home() {

   return(<HomeIndex/>) 
}

function HomeIndex() {

   const styles = useHomeStyles({width: window.innerWidth})
   const [rows, setRows] = useState([])
   const [searchData, setSearchData] = useState([])
   const [isLoading, setLoading] = useState(false)

   useEffect(() => {
      
      setLoading(true)
      fetchData().then(res => {
         res.result.map(data => {
            setRows(prevRows =>
            [
               ...prevRows,
               createData(data.uuid, data.name, data.time, res.obj.filter(obj => obj.uuid === data.uuid).map(obj => obj.ytChannel)[0])
            ])
            setSearchData(prevRows =>
            [
               ...prevRows,
               createData(data.uuid, data.name, data.time, res.obj.filter(obj => obj.uuid === data.uuid).map(obj => obj.ytChannel)[0])
            ])
         })
         setLoading(false)
      })
   }, [])

   if(!rows) {
      return(
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
      )
   }

   const searchHandler = (keyword) => {

      if(keyword !== '') {
         setRows(searchData.filter(row => row.name.toLowerCase().includes(keyword)))
      } else {
         setRows(searchData)
      }
   }

   console.log(rows.length)

   return(
      <div className={styles.root}>
         <div className={styles.header}>
            <img src={logoCD} className={styles.logoCD} height={'auto'}/>
            <div style={{
               display: 'flex',
               gap: '20px',
               margin: '1vw'
            }}>
               <a href='/' style={{color: (window.location.pathname === '/') && '#ffffff60'}} className="text">Home</a>
               <a href='/merchandise' style={{color: (window.location.pathname === '/merchandise') && '#ffffff60'}} className="text">Merchandise</a>
            </div>
         </div>

         <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: (isMobile) && '2vw'
         }}>
            <div className={`${styles.searchInput} searchInput}`}>
               <input className={`${styles.input} input}`} placeholder='Search...'
               onChange={(e) => searchHandler(e.target.value.toLowerCase())}
               style={{
                  fontFamily: 'MinecraftiaRegular',
                  fontSize: (isMobile) ? '100%' : '140%',
                  color: 'white',
                  textShadow: '3px 2px #00000020',
                  letterSpacing: '1px',
               }}/>
               <SearchIcon className={styles.searchIcon} sx={{cursor: 'pointer'}}/>
            </div>
         </div>

         <div className={styles.body}>
            <TableContainer component={Paper} sx={{
                  width: (isMobile) ? '90%' : '80%',
                  backgroundColor: '#5C5858',
                  color: 'white'
               }}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow
                     sx={{ '& .MuiTableCell-head': {color: 'white', fontSize: (isMobile) ? '2vhpx' : '20px', fontFamily: 'MinecraftiaRegular'} }}
                     >
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">Youtube Channel</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                  {(isLoading) && 
                     <TableRow
                     sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        '& .MuiTableCell-body': {color: 'white'},
                        backgroundColor: '#363535'
                     }}>
                        <TableCell scope="row" colSpan={6} sx={{
                           fontFamily: 'MinecraftiaRegular',
                           textAlign: 'center',
                           fontSize: (isMobile) ? '3vh' : '1.5vw'
                        }}>
                           Loading players...
                        </TableCell>
                     </TableRow>
                  }
                  {(rows.length === 0 && !isLoading) && 
                     <TableRow
                     sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        '& .MuiTableCell-body': {color: 'white'},
                        backgroundColor: '#363535'
                     }}>
                        <TableCell scope="row" colSpan={6} sx={{
                           fontFamily: 'MinecraftiaRegular',
                           textAlign: 'center',
                           fontSize: '1.5vw'
                        }}>
                           No players found!
                        </TableCell>
                     </TableRow>
                  }
                  {rows.map((row, idx) => (
                     <TableRow
                        key={row.uuid+idx}
                        sx={{ 
                           '&:last-child td, &:last-child th': { border: 0 },
                           '& .MuiTableCell-body': {color: 'white'},
                           backgroundColor: (row.time === '' || row.time === null) && '#363535'
                        }}
                        >
                        <TableCell component="th" scope="row">
                           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', fontFamily: 'MinecraftiaRegular'}}>
                              <img src={`https://minepic.org/avatar/${row.name}/64`}/>
                              <br/>
                              {row.name}
                           </div>
                        </TableCell>
                        <TableCell align="center" sx={{fontSize: '2.5vh', fontFamily: 'MinecraftiaRegular'}}>
                           {(row.time === '' || row.time === null ? <span style={{color: 'red'}}>DEAD</span> : row.time)}
                        </TableCell>
                        <TableCell align="left">
                           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                              {/* <a href={row.ytChannel} target='_blank'>
                                 <YouTubeIcon sx={{cursor: 'pointer', color: 'red', fontSize: '3vw', '&:hover': {color: 'white'}}}/>
                              </a> */}
                              <Button style={{textTransform: 'none', backgroundColor: 'red', fontSize: '2.5vh'}} variant='contained' startIcon={<YouTubeIcon sx={{fontSize: '2vh'}}/>}>Youtube</Button>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   )
}
