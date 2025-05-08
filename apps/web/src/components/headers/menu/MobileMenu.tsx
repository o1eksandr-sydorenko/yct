import { Button } from '@mui/material';
import { StyledMobileMenu, StyledDrawer } from '../../shared/styles';
import Link from 'next/link';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  menuItems: Array<{ label: string; href: string }>;
}

export const MobileMenu = ({ open, onClose, menuItems }: MobileMenuProps) => {
  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <StyledMobileMenu>
        {menuItems.map((item) => (
          <Button
            key={item.label}
            color="inherit"
            component={Link}
            href={item.href}
            fullWidth
          >
            {item.label}
          </Button>
        ))}
      </StyledMobileMenu>
    </StyledDrawer>
  );
};
