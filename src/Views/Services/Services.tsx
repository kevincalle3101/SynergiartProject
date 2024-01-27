import { Box, Typography } from "@mui/material";
import Service1 from '../../assets/Images/Services/Service1.png';
import Service2 from '../../assets/Images/Services/Service2.png';
import Service3 from '../../assets/Images/Services/Service3.png';
import Service4 from '../../assets/Images/Services/Service4.png';
import Service5 from '../../assets/Images/Services/Service5.png';
import Service6 from '../../assets/Images/Services/Service6.png';
import Service7 from '../../assets/Images/Services/Service7.png';
import Service8 from '../../assets/Images/Services/Service8.png';

interface Service {
  service: string;
  image: string;
}

const images: Service[] = [
  { service: "Piscina", image: Service1 },
  { service: "Spa", image: Service2 },
  { service: "Sauna", image: Service3 },
  { service: "Discoteca", image: Service4 },
  { service: "Desayunos", image: Service5 },
  { service: "Gimnasios", image: Service6 },
  { service: "Animaciones", image: Service7 },
  { service: "Transporte", image: Service8 },
];

const Services = () => {
  return (
    <Box width={{ md: "80%", xs: "90%" }} margin="100px auto">
      <Typography fontFamily="Jost" variant="h5" color="initial">
        Servicios
      </Typography>
      <Box
        display="grid"
        margin="0 auto"
        width={{ xs: "100%", md: "80%" }}
        gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ md: 3, xs: 1 }}
      >
        {images.map((item, index) => (
          <Box
            key={index}
            borderRadius="12px"
            width="max-content"
            display="flex"
            margin="0 auto"
            justifyContent="center"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              padding={{ md: "16px", xs: "8px" }}
              height={200}
              margin="0 auto"
            >
              <Box
                height={150}
                width={150}
                display="flex"
                justifyContent="center"
              >
                <img
                  style={{
                    borderRadius: "100%",
                    objectFit: "cover",
                  }}
                  width={150}
                  height={150}
                  src={item.image}
                  alt={item.service}
                />
              </Box>
              <Typography
                mt="10px"
                fontSize="20px"
                fontFamily="Jost"
                display="flex"
                justifyContent="center"
              >
                {item.service}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;