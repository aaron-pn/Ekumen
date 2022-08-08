import React from 'react'

import { Container, Paper, Grid, CssBaseline, Icon, Box, Typography } from '@mui/material'

const View = () => {
  return (
    <Grid container component='main' sx={{ height: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <CssBaseline />

      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h2' color='custom'>
            Let`s log in
          </Typography>
          <Typography variant='h4'>Welcome to EkuHub</Typography>
          <Typography>Log in with Google</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        className='backgroundLogin'
        // sx={{
        //   background: linearGradient('131.84deg', '#0082BE 3.54%', '#6A2875 80.18%'),
        // }}
      ></Grid>
    </Grid>
  )
}
export default View
