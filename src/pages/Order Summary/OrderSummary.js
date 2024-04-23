import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'

const OrderSummary = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a 
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default OrderSummary