import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link"

const CategoryCard = () => {
  return (
    <>
    <Card sx={{ maxWidth: 250 }}>
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
    <Card sx={{ maxWidth: 250 }}>
     <CardMedia
       component="img"
       height="300"
       image={require("../assets/bottoms.jpg")}
       alt="girl with dotted top"
     />
     <CardContent>
     <Link href="/" color="inherit" underline="none">
       <Typography gutterBottom variant="h5" component="div">
         BOTTOMS
       </Typography>
       </Link>
     </CardContent>
    </Card>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="300"
        image={require("../assets/outerwear.jpg")}
        alt="girl with dotted top"
      />
      <CardContent>
      <Link href="/" color="inherit" underline="none">
        <Typography gutterBottom variant="h5" component="div">
          OUTERWEAR
        </Typography>
        </Link>
      </CardContent>
    </Card>
    </>
  )
}

export default CategoryCard