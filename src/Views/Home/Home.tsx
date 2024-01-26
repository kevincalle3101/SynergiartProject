import { Container, Typography } from '@mui/material'
import BreakAndDinner from '../../Components/Recomendations/BreakAndDinner/BreakAndDinner';
import Lunch from '../../Components/Recomendations/Lunch/Lunch';
import Dessert from '../../Components/Recomendations/Dessert/Dessert';
import Drinks from '../../Components/Recomendations/Drinks/Drinks';
import NameHabitación from '../../Components/NameHabitacion/NameHabitacion';
import Events from '../Events/Events';
import Services from '../Services/Services';

const Home = () => {
  return (
    <>
      <Container sx={{ marginBottom: "85px" }}>
        <Typography
          margin={{ xs: "40px auto", sm: "45px auto", md: "50px auto" }}
          sx={{
            fontFamily: "Jost",
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: "24px", sm: "28px", md: "31px" },
            fontWeight: 600,
            lineHeight: { xs: "36px", md: "50px" },
            textAlign: "left",
            color: "#000000",
          }}
        >
          Tus recomendaciones
        </Typography>
        <Lunch />
        <BreakAndDinner />
        <Dessert />
        <Drinks />
      </Container>
      <NameHabitación />
      <Container>
        <Events />
        <Services />
      </Container>
    </>

  )
}

export default Home