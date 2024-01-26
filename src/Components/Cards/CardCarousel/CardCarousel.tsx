import { Card, Typography } from '@mui/material';

interface Props {
  image: string;
  name: string;
  price: string;
}

const CarouselHook = ({ image, name, price }: Props) => {

  return (
      <Card sx={{
        width: '90%',
        maxWidth: '210px',
        height: 'auto',
        borderRadius: '20px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img src={image} alt={name} style={{
          width: '178px',
          height: '162px',
          borderRadius: '10px',
          marginBottom: '1.5rem',
        }} />
        <Typography
          sx={{
            width: '100%',
            height: 'auto',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '16px',
            letterSpacing: '0em',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>{name}</Typography>
        <Typography
          sx={{
            width: '100%',
            height: 'auto',
            fontFamily: 'Inter',
            fontSize: '11px',
            fontWeight: 400,
            lineHeight: '2rem',
            textAlign: 'center',
          }}>{price}</Typography>
      </Card>
  );
}

export default CarouselHook;