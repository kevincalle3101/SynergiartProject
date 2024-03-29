import { Box, IconButton } from "@mui/material";
import CardCaousel from '../../Cards/CardCarousel/CardCarousel.tsx';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import lunch1 from '../../../assets/Images/Recomendations/Lunch/lunch1.png';
import lunch2 from '../../../assets/Images/Recomendations/Lunch/lunch2.png';
import lunch3 from '../../../assets/Images/Recomendations/Lunch/lunch3.png';
import lunch4 from '../../../assets/Images/Recomendations/Lunch/lunch4.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import {caraouselHook} from '../../../../utils/Hooks/CarouselHook.tsx'

interface FoodItem {
  image: string;
  name: string;
  price: string;
}

const Lunch = () => {

  const medium = useMediaQuery('(max-width: 900px)');
  const small = useMediaQuery('(max-width: 650px)');

  const imagesLunch: FoodItem[]= [
    { image: lunch1, name: 'Nombre', price: '0.00$' },
    { image: lunch2, name: 'Nombre', price: '0.00$' },
    { image: lunch3, name: 'Nombre', price: '0.00$' },
    { image: lunch4, name: 'Nombre', price: '0.00$' }
  ];
  const imagesLunchLength: number = imagesLunch.length;
  const { position, clickNext, clickPrev } = caraouselHook(imagesLunchLength);

  return (
    <Box
      sx={{
        display: "flex",
        top: "20px",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "20px",
        position: "relative",
        marginBottom: "75px",
      }}
    >

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          fontFamily: "Jost",
          fontSize: "25px",
          fontWeight: 500,
          lineHeight: "36px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#000000",
        }}
      >
        Almuerzos
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50px",
          width: "100%",
          maxWidth: "888px",
          height: "min(273px)",
          gap: "24px",
          position: "relative",
        }}
      >
        <IconButton
          sx={{ position: "absolute", left: 0 }}
          onClick={() => clickPrev()}
        >
          <KeyboardArrowLeftIcon fontSize="large"/>
        </IconButton>

        {imagesLunch.map((food, index) => (
          <CardCaousel
            key={index}
            image={imagesLunch[(position + index) % imagesLunchLength].image}
            name={food.name}
            price={food.price}
          />
        )).filter((_, index) => index <= 2 && !medium || index === 0 || index === 1)
        .filter((_, index) => !small || index === 0)}

        <IconButton
          sx={{ position: "absolute", right: 0 }}
          onClick={() => clickNext()}
        >
          <KeyboardArrowRightIcon fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Lunch