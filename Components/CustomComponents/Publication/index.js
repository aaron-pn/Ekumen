import React from 'react'

import Image from 'next/image'

import UserStatus from '../UserStatus'

import { Button, Grid, IconButton, Typography } from '@mui/material'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ShareIcon from '@mui/icons-material/Share'

import styles from './Publication.module.css'

export default function Publication({ text, img }) {
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={12} md={10.8}>
        <Grid className={styles.publication_container} container justifyContent={'center'}>
          <Grid item xs={10}>
            <div>
              <UserStatus title={'kyle fisher'} description={'hoy 11:30'} />
            </div>
          </Grid>
          <Grid
            className={styles.media_container}
            item
            xs={9}
          >
            <Typography paragraph>{text}</Typography>

            {img ? <Image src={img} width={2000} height={800} /> : null}
          </Grid>
          <Grid item xs={10}>
            <div className={styles.navigation_bar}>
              <div className={styles.icon_buttons}>
                <IconButton>
                  <ThumbUpOffAltIcon />
                </IconButton>
                <IconButton className={styles.space}>
                  <CommentOutlinedIcon />
                </IconButton>
              </div>
              <div>
                <Grid item xs={7} sm={4} className={styles.align_end}>
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
