import { Box, IconButton } from "@mui/material";
import CardCaousel from '../../Cards/CardCarousel/CardCarousel.tsx';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Dessert1 from '../../../assets/Images/Recomendations/Dessert/Dessert1.png';
import Dessert2 from '../../../assets/Images/Recomendations/Dessert/Dessert2.png';
import Dessert3 from '../../../assets/Images/Recomendations/Dessert/Dessert3.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const Dessert = () => {

  const medium = useMediaQuery('(max-width: 900px)');
  const small = useMediaQuery('(max-width: 650px)');

  const imagesDessert = [
    {
      image: Dessert1,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: Dessert2,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: Dessert3,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: Dessert1,
      name: 'Nombre',
      price: '0.00$',
    }
  ];
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
        Postres
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

        {imagesDessert.map((food, index) => (
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

export default Dessert