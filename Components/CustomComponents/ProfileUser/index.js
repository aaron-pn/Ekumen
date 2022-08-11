import React from 'react'
import Image from 'next/image'

import { Avatar, Grid, styled, Typography } from '@mui/material'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

const DEFAULTAVATARSIZE = { width: 95, height: 95 }

const StyledDiv = styled('div')((props) => ({
  position: props.relative ? 'relative' : props.absolute ? 'absolute' : '',
  width: props.fullWidth ? '100%' : props.width ? props.width : 'auto',
  minHeight: props.minHeight ? props.minHeight : '100px',
  border: props.border ? '1px solid red' : '',
  margin: props.centred ? '0 auto' : '',
  ...props.style,
}))

const WhiteAvatar = styled(Avatar)`
  background-color: white;
`

const Typographys = styled(Grid)((props) => ({
  marginLeft: `${DEFAULTAVATARSIZE.width + 80}px`,
  marginTop: `${DEFAULTAVATARSIZE.width * 0.15}px`,
}))

const StyledTypography = styled(Typography)`
  font-size: 10px;
  margin-top: ${DEFAULTAVATARSIZE.width * 0.15}px;
`

const StyledUbication = styled(Typography)`
  font-size: 13px;
  margin-top: ${DEFAULTAVATARSIZE.width * 0.15}px;
  margin-right: 30px;
`

export default function ProfileUser({
  avatarSize = DEFAULTAVATARSIZE,
  title,
  desc,
  avatar,
  banner,
}) {
  return (
    <StyledDiv centred border minHeight='300px' width='80%'>
      <StyledDiv relative>
        <StyledDiv fullWidth minHeight='200px' relative>
          <Image src={banner} objectFit='cover' layout='fill' />
          <StyledDiv absolute minHeight='auto' style={{ bottom: '-60px', left: '6%' }}>
            <WhiteAvatar sx={avatarSize}>
              <Avatar
                src={src}
                sx={{ width: avatarSize.width * 0.92, height: avatarSize.width * 0.92 }}
              ></Avatar>
            </WhiteAvatar>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <Grid container justifyContent='space-between'>
        <Typographys item>
          <Typography variant='h6'>{title}</Typography>
          <StyledTypography variant='h7'>{desc}</StyledTypography>
        </Typographys>

        <Grid sx={{ display: 'flex', alignItems: 'center' }} item>
          <FmdGoodOutlinedIcon className='blue-color-100' fontSize='small' />
          <StyledUbication>London, England</StyledUbication>
        </Grid>
      </Grid>
    </StyledDiv>
  )
}
