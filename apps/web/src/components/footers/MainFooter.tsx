import { Box, Typography, Grid, Link } from '@mui/material';

export default function MainFooter() {
  return (
    <Box sx={{ backgroundColor: '#f1f1f1' }}>
      <Box sx={{ mt: 4, pl: 4, pr: 4, py: 4 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Company
            </Typography>
            <Link href="#" underline="hover">
              About
            </Link>
            <br />
            <Link href="#" underline="hover">
              Careers
            </Link>
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Product
            </Typography>
            <Link href="#" underline="hover">
              Features
            </Link>
            <br />
            <Link href="#" underline="hover">
              Pricing
            </Link>
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Follow Us
            </Typography>
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
    </Box>
  );
}
