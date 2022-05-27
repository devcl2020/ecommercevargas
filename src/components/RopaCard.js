import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const RopaCard = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component='img'
                height='440'
                image={data.img}
                alt='ropa IMG'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Name: {data.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Precio: {data.precio}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default RopaCard;
