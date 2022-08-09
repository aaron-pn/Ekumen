import React from 'react'

import styles from './CardGroup.module.css'
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'

export default function CardGroup({ src, height = '200px', title, desc }) {
  return (
    <Card>
      <CardMedia component='img' src={src} height={height} />
      <CardContent>
        <strong className={styles.title_txt}> {title} </strong>
        <span className={styles.desc_txt}> {desc} </span>
      </CardContent>

      <CardActions className={styles.padding}>
        <Button fullWidth> JOIN </Button>
      </CardActions>
    </Card>
  )
}
