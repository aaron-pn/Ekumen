import React from 'react'

import Image from 'next/image'

import UserStatus from '../UserStatus'

import { Button, Grid, IconButton, styled, Typography } from '@mui/material'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ShareIcon from '@mui/icons-material/Share'

const PublicationContainer = styled(Grid)`
  padding: 16px;
  min-height: 150px;
`

const MediaContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;
`

const NavigationBar = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`

const GroupIconButtons = styled('div')`
  display: flex;
  align-items: center;
  min-width: 40%;
`

export default function Publication({ text, img }) {
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={12} md={10.8}>
        <PublicationContainer container justifyContent={'center'}>
          <Grid item xs={10}>
            <div>
              <UserStatus title={'kyle fisher'} description={'hoy 11:30'} />
            </div>
          </Grid>
          <MediaContainer item xs={9}>
            <Typography paragraph>{text}</Typography>

            {img ? <Image src={img} width={2000} height={800} /> : null}
          </MediaContainer>
          <Grid item xs={10}>
            <NavigationBar>
              <GroupIconButtons>
                <IconButton>
                  <ThumbUpOffAltIcon />
                </IconButton>
                <IconButton sx={{ marginLeft: '20%' }}>
                  <CommentOutlinedIcon />
                </IconButton>
              </GroupIconButtons>
              <div>
                <Grid item xs={7} sm={4} sx={{ textAlign: 'end' }}>
                  <Button>
                    <ShareIcon />
                    Compartir
                  </Button>
                </Grid>
              </div>
            </NavigationBar>
          </Grid>
        </PublicationContainer>
      </Grid>
    </Grid>
  )
}
