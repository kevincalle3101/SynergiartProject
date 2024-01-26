import { Box, Typography } from "@mui/material";
import Service1 from '../../assets/Images/Services/Service1.png';
import Service2 from '../../assets/Images/Services/Service2.png';
import Service3 from '../../assets/Images/Services/Service3.png';
import Service4 from '../../assets/Images/Services/Service4.png';
import Service5 from '../../assets/Images/Services/Service5.png';
import Service6 from '../../assets/Images/Services/Service6.png';
import Service7 from '../../assets/Images/Services/Service7.png';
import Service8 from '../../assets/Images/Services/Service8.png';

const images = [
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
            borderRadius="12px"
            width="max-content"
            display="flex"
            margin="0 auto"
            justifyContent="center"
            key={index}
            sx={{
              boxShadow:
                "0px 2.767px 2.214px 0px rgba(174, 150, 114, 0.02), 0px 6.65px 5.32px 0px rgba(174, 150, 114, 0.03), 0px 12.522px 10.017px 0px rgba(174, 150, 114, 0.04), 0px 22.336px 17.869px 0px rgba(174, 150, 114, 0.04), 0px 41.778px 33.422px 0px rgba(174, 150, 114, 0.05), 0px 100px 80px 0px rgba(174, 150, 114, 0.07)",
            }}
          >
            <Box
              margin="0 auto"
              padding={{ md: "16px", xs: "8px" }}
              height={200}
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
                display="flex"
                justifyContent="center"
                fontSize="20px"
                fontFamily="Jost"
                mt="10px"
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
