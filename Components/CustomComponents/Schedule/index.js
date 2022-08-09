import { Avatar, AvatarGroup, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import styles from './Schedule.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'

export default function Schedule({ title, avatars }) {
  return (
    <Grid container justifyContent='space-between' className={styles.container}>
      <Grid xs={12} item>
        <Grid container justifyContent='space-between' wrap='wrap-reverse'>
          <Grid item xs={12} sm={6} md={8}>
            <div>
              <Typography variant='h2' className={styles.title_txt}>
                {title}
              </Typography>
              <div className={styles.subtitle}>
                <WatchLaterOutlinedIcon className={styles.icon} />
                <h4 className={styles.desc_txt}>desc</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={2} className={styles.button_container}>
            <div>
              <IconButton className={styles.iconButton}>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <AvatarGroup
          className={styles.avatarGroup_container}
          max={8}
          total={avatars ? avatars.length : null}
        >
          {avatars
            ? avatars.map((src) => (
                <Avatar key={src} src={src}>
                  A
                </Avatar>
              ))
            : null}
        </AvatarGroup>
      </Grid>

      <Grid item xs={1.5}>
        <Button fullWidth>JOIN</Button>
      </Grid>
    </Grid>
  )
}
