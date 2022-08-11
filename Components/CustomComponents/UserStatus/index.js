import React from 'react'

import styled from 'styled-components'
import { Avatar, Badge, Grid, Typography } from '@mui/material'

const StyledBadge = styled(Badge)(({ theme }) => {
  return {
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }
})

export default function UserStatus({
  img,
  description,
  title,
  sizes = { width: 50, height: 50 },
  isActive,
}) {
  return (
    <Grid container justifyContent='start' sx={{ width: '100%' }}>
      <Grid item>
        {isActive ? (
          <StyledBadge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant='dot'
          >
            <Avatar
              sx={{ ...sizes, border: `${isActive ? '1px solid #44b700' : ''}` }}
              src={img}
            ></Avatar>
          </StyledBadge>
        ) : (
          <Badge>
            <Avatar sx={{ ...sizes }} src={img}></Avatar>
          </Badge>
        )}
      </Grid>
      <Grid Item>
        <Typography variant='h7'>
          <strong>{title}</strong>
        </Typography>
        <Typography variant='subtitle2' color='gray'>
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}
