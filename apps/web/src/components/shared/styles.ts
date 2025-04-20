import { styled } from '@mui/material/styles';
import { Paper, Box, BoxProps, Typography } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

export const StyledLayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
