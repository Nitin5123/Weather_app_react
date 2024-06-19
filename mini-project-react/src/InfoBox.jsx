
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    let INIT_URL = "https://plus.unsplash.com/premium_photo-1664304434345-8b8e6b512532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHx8MA%3D%3D"

    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let RAIN_URL = "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL = "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className = "InfoBox">
     <div className = "Card">   
    <Card sx={{ maxWidth: 700

     }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15  ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15  ? <WbSunnyIcon/> : <AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" color="text.secondary">
            <div>
                <p>Temprature = {info.temp}&deg;C,<br></br></p>
                <p>Min Temp = {info.tempMin}&deg;C,<br></br></p> 
                <p>Max Temp = {info.tempMax}&deg;C,<br></br></p>
                <p>Humidity = {info.humidity}%,<br></br></p>
                <p>The Weather Can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
            </div>
          
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
    };


