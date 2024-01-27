import { Box, IconButton } from "@mui/material";
import CardCaousel from '../../Cards/CardCarousel/CardCarousel.tsx';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BreakDinner1 from '../../../assets/Images/Recomendations/BreakDinner/BreakDinner1.png';
import BreakDinner2 from '../../../assets/Images/Recomendations/BreakDinner/BreakDinner2.png';
import BreakDinner3 from '../../../assets/Images/Recomendations/BreakDinner/BreakDinner3.png';
import BreakDinner4 from '../../../assets/Images/Recomendations/BreakDinner/BreakDinner4.webp';
import useMediaQuery from '@mui/material/useMediaQuery';
import {caraouselHook} from '../../../../utils/Hooks/CarouselHook.tsx'


interface FoodItem {
  image: string;
  name: string;
  price: string;
}

const BreakDinner = () => {


  const medium = useMediaQuery('(max-width: 900px)');
  const small = useMediaQuery('(max-width: 650px)');

  const imagesBreakDinner: FoodItem[] = [
    {
      image: BreakDinner1,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: BreakDinner2,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: BreakDinner3,
      name: 'Nombre',
      price: '0.00$',
    },
    {
      image: BreakDinner4,
      name: 'Nombre',
      price: '0.00$',
    }
  ];
  const imagesBreakDinnerLength: number = imagesBreakDinner.length
  const { position, clickNext, clickPrev } = caraouselHook(imagesBreakDinnerLength);

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
        Desayunos y cenas
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

        {imagesBreakDinner.map((food, index) => (
          <CardCaousel
            key={index}
            image={imagesBreakDinner[(position + index) % imagesBreakDinnerLength].image}
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

export default BreakDinner