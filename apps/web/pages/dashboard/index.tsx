import ProtectedRoute from '../../src/components/ProtectedRoute';
import { Container, Typography, Box } from '@mui/material';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1">
            Dashboard
          </Typography>
          <Typography variant="body1">
            Welcome to your dashboard! This is a protected route.
          </Typography>
        </Box>
      </Container>
    </ProtectedRoute>
  );
};

export default DashboardPage;
