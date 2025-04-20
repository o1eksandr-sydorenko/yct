import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

export const StyledFooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

export const FooterGroupTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  letterSpacing: '0.5px',
  marginBottom: theme.spacing(1),
}));
