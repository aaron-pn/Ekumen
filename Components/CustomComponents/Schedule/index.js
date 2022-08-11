import { Avatar, AvatarGroup, Button, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'

const Container = styled(Grid)`
  width: 90%;
  margin: 50px auto;
  min-height: 100px;
  padding: 3%;
`

const Title = styled(Typography)`
  margin-top: 2%;
  font-size: 24px;
  font-weight: bold;
  color: var(--black-color);
`

const Subtitle = styled('h4')`
  color: var(--grey-color-1);
  font-family: Raleway, Arial;
  font-weight: bold;
  margin-left: 10px;
`

const StyledIconButton = styled(IconButton)`
  background-color: var(--grey-color-3);
  border-radius: 13px;
  font-family: Raleway, Arial;
  font-weight: bold;
  margin-left: 10px;
  position: relative;
  right: 0;
`

const SubtitleContainer = styled('div')`
  display: flex;
  align-items: center;
`

const ButtonContainer = styled(Grid)`
  display: flex;
  align-items: start;
  justify-content: end;
`

export default function Schedule({ title, avatars }) {
  return (
    <Container container justifyContent='space-between'>
      <Grid xs={12} item>
        <Grid container justifyContent='space-between' wrap='wrap-reverse'>
          <Grid item xs={12} sm={6} md={8}>
            <div>
              <Title variant='h2'>{title}</Title>
              <SubtitleContainer>
                <WatchLaterOutlinedIcon
                  sx={{
                    color: 'var(--grey-color-1)',
                  }}
                />
                <Subtitle>desc</Subtitle>
              </SubtitleContainer>
            </div>
          </Grid>

          <ButtonContainer item xs={12} sm={2} md={2}>
            <div>
              <StyledIconButton>
                <MoreHorizIcon />
              </StyledIconButton>
            </div>
          </ButtonContainer>
        </Grid>
      </Grid>

      <Grid item>
        <AvatarGroup max={8} total={avatars ? avatars.length : null}>
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
    </Container>
  )
}
