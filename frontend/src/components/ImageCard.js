import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link"

const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="300"
          image={require("../assets/tops.jpg")}
          alt="girl with dotted top"
        />
        <CardContent>
        <Link href="/" color="inherit" underline="none">
          <Typography gutterBottom variant="h5" component="div">
            TOPS
          </Typography>
          </Link>
        </CardContent>
    </Card>
  );
}

export default ImageCard