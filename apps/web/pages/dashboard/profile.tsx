import { Container, Typography, Box } from '@mui/material';
import ProtectedRoute from '../../src/components/ProtectedRoute';

const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1">
            Profile
          </Typography>
          <Typography variant="body1">
            This is your profile page. Only authenticated users can see this.
          </Typography>
        </Box>
      </Container>
    </ProtectedRoute>
  );
};

export default ProfilePage;
