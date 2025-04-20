import { Button, Box, Link } from '@mui/material';

interface DesktopMenuProps {
  menuItems: Array<{ label: string; href: string }>;
}

export const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {menuItems.map((item) => (
        <Button
          key={item.label}
          color="inherit"
          component={Link}
          href={item.href}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};
