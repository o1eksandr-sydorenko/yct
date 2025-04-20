import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledCreateAccountBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
