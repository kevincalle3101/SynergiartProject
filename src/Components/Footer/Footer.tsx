import { Box, Typography } from "@mui/material";
import Linkedin from "../../assets/Images/Footer/Linkedin.png";
import X from "../../assets/Images/Footer/X.png";

const Footer = () => {
  return (
    <footer>
      <Box width="100%" height="100px">
        <Box
          padding={{ md: 15, xs: 5 }}
          margin="0 auto"
          display={{ xs: "block", md: "flex" }}
          flexDirection={{ xs: "row", md: "column" }}
          justifyContent="space-around"
          alignItems="center"
          sx={{ backgroundColor: "#ae9672" }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-around"
            alignItems="center"
            width="100%"
          >
            <Typography
              height={200}
              fontFamily="Jost"
              display="flex"
              alignItems="center"
              margin="0 50px"
              variant="h3"
              fontSize="30px"
              color="white"
            >
              LOGO
            </Typography>
            <Box
              width={{ md: "2px", xs: "100%" }}
              height={{ md: "200px", xs: "2px" }}
              sx={{ backgroundColor: "white" }}
            ></Box>
            <Box
              width={{ xs: "100%", md: "30%" }}
              margin={{ md: "auto 0", xs: "20px auto" }}
            >
              <Typography fontFamily="Jost" color="white" margin="40px 0">
                About us
              </Typography>
              <Typography fontFamily="Jost" color="white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                sed, quia cupiditate consectetur neque ducimus. Corporis eos
                repellendus, alias sit numquam ipsa, dolorum iure voluptatum,
                nihil ratione minus eius quod.
              </Typography>
            </Box>
            <Box margin={{ md: "auto 0", xs: "20px auto" }}>
              <Typography fontFamily="Jost" color="white" fontSize="20px">
                Quick Links
              </Typography>
              <Box component="ul">
                <Typography fontFamily="Jost" color="white" fontSize="14px">
                  Imput
                </Typography>
                <Typography fontFamily="Jost" color="white" fontSize="14px">
                  Imput
                </Typography>
                <Typography fontFamily="Jost" color="white" fontSize="14px">
                  Imput
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                margin={{ md: "auto 0", xs: "40px auto" }}
                display="flex"
                justifyContent="space-between"
              >
                <img src={X} alt="twitter" width={40} />
                <img src={Linkedin} alt="linkedin" width={40} />
              </Box>
              <Typography
                fontFamily="Jost"
                color="white"
                fontWeight={800}
                fontSize={20}
              >
                asdasd@asd.com
              </Typography>
            </Box>
          </Box>
          <Box
            margin={{ md: "20px 0", xs: "50px auto" }}
            marginTop={8}
            width={{ xs: "100%", md: "70%" }}
            display={{ md: "flex", xs: "block" }}
            textAlign="center"
            justifyContent="space-between"
          >
            <Typography
              fontFamily="Jost"
              color="white"
              fontWeight={900}
              fontSize={20}
              marginTop={2}
            >
              2023 Nombre. All right reserved
            </Typography>
            <Typography
              fontFamily="Jost"
              fontSize={20}
              marginTop={2}
              color="white"
            >
              Terminos y condiciones
            </Typography>
            <Typography
              fontFamily="Jost"
              fontSize={20}
              marginTop={2}
              color="white"
            >
              Politicas y privacidad
            </Typography>
            <Typography
              fontFamily="Jost"
              fontSize={20}
              marginTop={2}
              color="white"
            >
              Seguridad
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer