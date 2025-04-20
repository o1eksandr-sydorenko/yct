import { Box, styled } from '@mui/material';

export const StyledIntroImageBox = styled(Box)<
  { component?: React.ElementType } & React.ImgHTMLAttributes<HTMLImageElement>
>(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  mt: 4,
  borderRadius: 2,
  boxShadow: theme.shadows[4],
}));

export const StyledIntroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
