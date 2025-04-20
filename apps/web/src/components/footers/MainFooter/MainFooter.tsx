import { Box, Typography, Grid, Link } from '@mui/material';
import { FooterGroupTitle, StyledFooterBox } from './styles';

export default function MainFooter() {
  return (
    // <Box sx={{ backgroundColor: '#f1f1f1' }}>
    <StyledFooterBox>
      <Box sx={{ mt: 4, pl: 4, pr: 4, py: 4 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <FooterGroupTitle>Company</FooterGroupTitle>
            <Link href="#" underline="hover">
              About
            </Link>
            <br />
            <Link href="#" underline="hover">
              Careers
            </Link>
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <FooterGroupTitle>Product</FooterGroupTitle>
            <Link href="#" underline="hover">
              Features
            </Link>
            <br />
            <Link href="#" underline="hover">
              Pricing
            </Link>
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <FooterGroupTitle>Follow Us</FooterGroupTitle>
            <Link href="#" underline="hover">
              Twitter
            </Link>
            <br />
            <Link href="#" underline="hover">
              GitHub
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Your Crypto Tracker
      </Typography>
    </StyledFooterBox>

    // </Box>
  );
}
