import { Typography, Box } from '@mui/material';
import { StyledBox } from '../../shared/styles';
import { StyledIntroBox, StyledIntroImageBox } from './styles';

export const Intro = () => {
  return (
    <StyledBox>
      <StyledIntroBox>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Your Crypto Tracker
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Track, analyze, and manage your cryptocurrency investments in one
            place
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <StyledIntroImageBox
            component="img"
            src="/images/home/crypto-dashboard.png"
            alt="Crypto Dashboard"
          />
        </Box>
      </StyledIntroBox>
    </StyledBox>
  );
};
