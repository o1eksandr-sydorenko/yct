import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import MainHeader from '../headers/MainHeader';
import MainFooter from '../footers/MainFooter/MainFooter';
import {
  StyledBodyContainer,
  StyledFooterContainer,
  StyledLayoutContainer,
} from '../shared/styles';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledLayoutContainer>
      <MainHeader />
      <StyledBodyContainer>
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          <Box py={4}>{children}</Box>
        </Container>
      </StyledBodyContainer>
      <StyledFooterContainer>
        <MainFooter />
      </StyledFooterContainer>
    </StyledLayoutContainer>
  );
};

export default MainLayout;
