import React from "react";
import { Typography, Box } from "@mui/material";
import Event1 from '../../assets/Images/Events/Event1.png';
import Event2 from '../../assets/Images/Events/Event2.png';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  image: string;
  name: string;
}

const events: Props[] = [
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
  const medium = useMediaQuery('(max-width: 900px)');

  return (
    <Box width="80%" margin="50px auto">
      <Typography variant="h5" fontFamily="Jost">
        Eventos
      </Typography>
      <Box
        width="80%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ md: "space-around" }}
        margin="20px auto"
      >
        {events.map((item, index) => (
          <Box
            key={index}
            position="relative"
            display="flex"
            justifyContent="center"
            marginBottom={{ xs: "20px", md: "0" }}
          >
            <img
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width: medium ? "140%" : "120%",
                height: medium ? "140%" : "120%",
              }}
              src={item.image}
              alt={item.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Events;