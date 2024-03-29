import { Box, IconButton } from "@mui/material";
import CardCaousel from '../../Cards/CardCarousel/CardCarousel.tsx';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Drinks1 from '../../../assets/Images/Recomendations/Drinks/drink1.png';
import Drinks2 from '../../../assets/Images/Recomendations/Drinks/drink2.png';
import Drinks3 from '../../../assets/Images/Recomendations/Drinks/drink3.png';
import Drinks4 from '../../../assets/Images/Recomendations/Drinks/drink4.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import {caraouselHook} from '../../../../utils/Hooks/CarouselHook.tsx'


interface DrinkItem {
  image: string;
  name: string;
  price: string;
}

const Drinks = () => {
  const medium = useMediaQuery('(max-width: 900px)');
  const small = useMediaQuery('(max-width: 650px)');

  const imagesDrinks: DrinkItem[] = [
    {
      image: Drinks1,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: Drinks2,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: Drinks3,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: Drinks4,
      name: 'Nombre',
      price: '0.00$',
    },
  ];
  const imagesDrinksLength: number = imagesDrinks.length;
  const { position, clickNext, clickPrev } = caraouselHook(imagesDrinksLength);



  return (
    <Box
      sx={{
        display: "flex",
        top: "20px",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
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
        Bebidas
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
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          sx={{ position: "absolute", left: 0 }}
          onClick={() => clickPrev()}
        >
          <KeyboardArrowLeftIcon fontSize="large"/>
        </IconButton>

        {imagesDrinks.map((food, index) => (
          <CardCaousel
            key={index}
            image={imagesDrinks[(position + index) % imagesDrinksLength].image}
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

export default Drinks