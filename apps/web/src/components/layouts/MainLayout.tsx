import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import MainHeader from '../headers/MainHeader';
import MainFooter from '../footers/MainFooter/MainFooter';
import { StyledLayoutContainer } from '../shared/styles';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledLayoutContainer>
      <MainHeader />
      <Box
        component="main"
        sx={{
          flex: '1 0 auto',
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Box py={4}>{children}</Box>
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{
          flexShrink: 0,
          width: '100%',
        }}
      >
        <MainFooter />
      </Box>
    </StyledLayoutContainer>
  );
};

export default MainLayout;
