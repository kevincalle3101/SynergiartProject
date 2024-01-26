import { Box, IconButton } from "@mui/material";
import CardCaousel from '../../Cards/CardCarousel/CardCarousel.tsx';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Drinks1 from '../../../assets/Images/Recomendations/Drinks/Drink1.png';
import Drinks2 from '../../../assets/Images/Recomendations/Drinks/Drink2.png';
import Drinks3 from '../../../assets/Images/Recomendations/Drinks/Drink3.png';
import { caraouselHook } from "../../../../utils/Hooks/CarouselHook.tsx";
import useMediaQuery from '@mui/material/useMediaQuery';


const Drinks = () => {
  const medium = useMediaQuery('(max-width: 900px)');
  const small = useMediaQuery('(max-width: 650px)');

  const imagesDrinks = [
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
      image: Drinks1,
      name: 'Nombre',
      price: '0.00$',
    },
  ];
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
          onClick={() => console.log("Izquierda")}
        >
          <KeyboardArrowLeftIcon fontSize="large"/>
        </IconButton>

        {imagesDrinks.map((food, index) => (
          <CardCaousel
            key={index}
            image={food.image}
            name={food.name}
            price={food.price}
          />
        )).filter((_, index) => index <= 2 && !medium || index === 0 || index === 1)
        .filter((_, index) => !small || index === 0)}

        <IconButton
          sx={{ position: "absolute", right: 0 }}
          onClick={() => console.log("Derecha")}
        >
          <KeyboardArrowRightIcon fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Drinks