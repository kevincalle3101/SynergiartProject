import { Box, Typography } from "@mui/material";
import LinkedinIcon from "../../assets/Images/Footer/Linkedin.png";
import XIcon from "../../assets/Images/Footer/X.png";
import useMediaQuery from '@mui/material/useMediaQuery';


const Footer = () => {

  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <footer>
      <Box width="100%" height="100px">
        <Box
          sx={{
            padding: { md: 15, xs: 5 },
            margin: "0 auto",
            display: { xs: "block", md: "flex" },
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#ae9672",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: matches ? "column" : "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  height: 200,
                  fontFamily: "Jost",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                  margin: "0 50px",
                  variant: "h3",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  width: { md: "2px", xs: "2px" },
                  height: { md: "200px", xs: "2px" },
                  marginLeft: { md: "5px", xs: "0" },
                  backgroundColor: "white",
                }}
              ></Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  margin: { md: "auto 15px", xs: "20px auto" },
                }}
              >
                <Typography fontFamily="Jost" color="white" marginBottom="10px">
                  About us
                </Typography>
                <Typography fontFamily="Jost" color="white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  sed, quia cupiditate consectetur neque ducimus. Corporis eos
                  repellendus, alias sit numquam ipsa, dolorum iure voluptatum,
                  nihil ratione minus eius quod.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                margin: { md: "auto auto", xs: "20px auto" },
              }}
            >
              <Typography fontFamily="Jost" color="white" fontSize="20px" sx={{ fontWeight: "700" }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
                <Typography fontFamily="Jost" color="white" fontSize="14px">
                  -Input
                </Typography>
                <Typography fontFamily="Jost" color="white" fontSize="14px">
                  -Input
                </Typography>
                <Typography fontFamily="Jost" color="white" fontSize="14px">
                  -Input
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  margin: { md: "auto 0", xs: "40px auto" },
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img src={XIcon} alt="twitter" width={40} />
                <img src={LinkedinIcon} alt="linkedin" width={40} />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  color: "white",
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                kevincalle3101@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              margin: { md: "20px 0", xs: "50px auto" },
              marginTop: 8,
              width: { xs: "100%", md: "70%" },
              display: { md: "flex", xs: "block" },
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jost",
                color: "white",
                fontWeight: 900,
                fontSize: 20,
                marginTop: 2,
              }}
            >
              2023 Nombre. All right reserved
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: 20,
                marginTop: 2,
                color: "white",
              }}
            >
              Terminos y condiciones
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: 20,
                marginTop: 2,
                color: "white",
              }}
            >
              Politicas y privacidad
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: 20,
                marginTop: 2,
                color: "white",
              }}
            >
              Seguridad
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;