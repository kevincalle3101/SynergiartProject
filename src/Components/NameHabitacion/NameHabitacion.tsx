import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Resort2Image from "../../assets/Images/Resort/resort2.jpg";
import Resort3Image from "../../assets/Images/Resort/resort3.png";
import Resort4Image from "../../assets/Images/Resort/resort4.webp";
import { caraouselHook } from '../../../utils/Hooks/CarouselHook.tsx'
import useMediaQuery from '@mui/material/useMediaQuery';


interface Props {
  image: string;
  title: string;
  description: string;
}

const hotelRooms: Props[] = [
  {
    image: Resort2Image,
    title: "Habitación 1",
    description: "Enim ipsum nisi gravida massa odio. Volutpat fermentum. Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus."
  },
  {
    image: Resort3Image,
    title: "Habitación 2",
    description: "Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus. Enim ipsum nisi gravida massa odio. Volutpat fermentum."
  },
  {
    image: Resort4Image,
    title: "Habitación 3",
    description: "Enim ipsum nisi gravida massa odio. Volutpat fermentum. Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus."
  }
];

const NameHabitacion = () => {
  
  const medium = useMediaQuery('(max-width: 900px)');

  const styles = {
    container: {
      backgroundColor: "#AE9672",
      width: "100%",
      margin: "0 auto",
    },
    content: {
      display: "flex",
      flexDirection: medium ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 4,
      margin: "0 auto",
    },
    image: {
      borderRadius: "10px",
      marginBottom: "20px",
      width: medium? "100%" : "40%",
      height: medium ? "200px" : "300px",
    },
    textContainer: {
      width: { xs: "90%", sm: "90%", md: "30%" },
      padding: 3,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    button: {
      marginTop: "20px",
      background: "white",
      color: "#AE9672",
      fontFamily: "Jost",
    },
  };

  const { position, clickNext, clickPrev } = caraouselHook(hotelRooms.length);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <IconButton
          sx={{ position: "absolute", left: 0, color: "white" }}
          onClick={() => clickPrev()}
        >
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        <Box sx={styles.content}>
          <img src={hotelRooms[position].image} alt="Hotel" style={styles.image} />
          <Box sx={styles.textContainer}>
            <Typography variant="h3" fontFamily="Jost" fontWeight={700} fontSize={{ xs: 20, sm: 20 }} color="white">
              {hotelRooms[position].title}
            </Typography>
            <Typography py={2} fontFamily="Jost" fontWeight="400" variant="h3" fontSize={{ xs: 16, sm: 18 }} color="white">
              {hotelRooms[position].description}
            </Typography>
            <Button sx={styles.button} variant="contained">
              Hacer Reservación
            </Button>
          </Box>
        </Box>
        <IconButton
          sx={{ position: "absolute", right: 0, color: "white" }}
          onClick={() => clickNext()}
        >
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NameHabitacion;
