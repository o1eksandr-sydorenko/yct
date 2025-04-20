import { styled } from '@mui/material/styles';
import { Paper, Box, Drawer } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

export const StyledLayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  minWidth: '320px',
  width: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
});

export const StyledMobileMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const StyledBodyContainer = styled(Box)(({ theme }) => ({
  flex: '1 0 auto',
  width: '100%',
  minWidth: '320px',
  maxWidth: '100%',
  overflowX: 'hidden',
}));

export const StyledFooterContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '100%',
  minWidth: '320px',
  maxWidth: '100%',
  overflowX: 'hidden',
}));
