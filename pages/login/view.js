import React from 'react'

import styles from './index.module.css'
import { Grid, Box, Typography, Paper } from '@mui/material'
import Image from 'next/image'
import imgEkumen from 'assets/Images/logoekumen.png'
const View = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} sm={6} md={6} square>
        <div className={styles.containerText}>
          <div>
            <Typography variant='h2' className='primary-color-1'>
              Let`s log in
            </Typography>
            <Typography variant='h4'>Welcome to EkuHub</Typography>
            <Paper className={styles.containerPaperGoogle}>
              <Typography variant='p'>Log in with Google</Typography>
            </Paper>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} className={styles.backgroundLogin}>
        <Image src={imgEkumen} width={100} height={70} />
      </Grid>
    </Grid>
  )
}
export default View
