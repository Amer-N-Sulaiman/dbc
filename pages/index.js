import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function Home() {

  const [domain, setDomain] = useState('')
  const [checkedOnce, setCheckedOnce] = useState(false)
  const [isBlacklisted, setIsBlacklisted] = useState(false)

  function check(){
    fetch("https://amersulaimandbc.pythonanywhere.com/check_domain/" + domain)
        .then(response => response.json())
        .then((data)=>{
          if (data.result === 'not blacklisted'){
            setIsBlacklisted(false)
          } else if (data.result === 'blacklisted') {
            setIsBlacklisted(true)
          }
        });
        setCheckedOnce(true)
        console.log(isBlacklisted)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Head>
        <title>Domain Blacklist Checker</title>
      </Head>
      <Grid container justifyContent="space-around">
        <Grid item xs={10} md={6} lg={4}>
          <h1>Enter A Domain To Check If Blacklisted</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-around">
        <Grid item xs={10} md={6} lg={4}>
          <TextField id="standard-basic" label="Enter Domain" variant="standard" style={{width: '100%'}} value={domain} onChange={(e) => { setDomain(e.target.value) }}/>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-around">
        <Grid item xs={10} md={6} lg={4}>
          <Button variant="outlined" style={{marginTop: '30px'}} onClick={check}>Check</Button>
        </Grid>
      </Grid>

      {checkedOnce && <Grid container justifyContent="space-around">
        <Grid item xs={10} md={6} lg={4}>
          <Box sx={{ minWidth: 275 }}>
            { !isBlacklisted && <Card variant="outlined" style={{marginTop: '60px', padding: '15px', textAlign: 'center'}}><p>Your domain name is not blacklisted</p> <CheckCircleIcon /></Card>}
            { isBlacklisted && <Card variant="outlined" style={{marginTop: '60px', padding: '15px', textAlign: 'center'}}>Your domain name is blacklisted</Card>}
          </Box>
        </Grid>
      </Grid>}

      
    </div>
  )
}
