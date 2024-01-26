import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Event1 from '../../assets/Images/Events/Event1.png';
import Event2 from '../../assets/Images/Events/Event2.png';

const events = [
  {
    image: Event1,
    name: "Concierto",
  },
  {
    image: Event2,
    name: "Wine Night",
  },
  {
    image: Event1,
    name: "Concierto",
  },
];

const Events = () => {
  return (
    <Box width="80%" margin="100px auto">
      <Typography variant="h5" fontFamily="Jost">
        Eventos
      </Typography>
      <Box
        width="80%"
        display={{ xs: "block", md: "flex" }}
        justifyContent={{ md: "space-around" }}
        margin="20px auto"
      >
        {events.map((item, index) => (
          <Box
            key={index}
            position="relative"
            display="flex"
            justifyContent="center"
          >
            <img
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                margin: "20px auto",
              }}
              src={item.image}
              width={350}
              height={600}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Events;
