import React from 'react'

import Image from 'next/image'

import UserStatus from '../UserStatus'

import { Button, Grid, IconButton, Typography } from '@mui/material'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ShareIcon from '@mui/icons-material/Share'

export default function Publication({ text, img }) {
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={12} md={10.8}>
        <Grid sx={{ padding: 2, minHeight: '150px' }} container justifyContent={'center'}>
          <Grid item xs={10}>
            <div>
              <UserStatus title={'kyle fisher'} description={'hoy 11:30'} />
            </div>
          </Grid>
          <Grid
            className='d-flex flex-column justify-content-center'
            item
            xs={9}
            sx={{ marginTop: '1em' }}
          >
            <Typography paragraph>{text}</Typography>

            {img ? <Image src={img} width={2000} height={800} /> : null}
          </Grid>
          <Grid item xs={10} sx={{ marginTop: '1em' }}>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center' style={{ minWidth: '40%' }}>
                <IconButton>
                  <ThumbUpOffAltIcon />
                </IconButton>
                <IconButton sx={{ marginLeft: '20%' }}>
                  <CommentOutlinedIcon />
                </IconButton>
              </div>
              <div>
                <Grid item xs={7} sm={4} sx={{ textAlign: 'end' }}>
                  <Button>
                    <ShareIcon />
                    Compartir
                  </Button>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
