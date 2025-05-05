import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { StyledLoginBox } from './styles';
import { LoginDto } from '@your-crypto-tracker/api-client';
import { loginSchema } from '@/lib/validations/auth';
import { useFormSubmition } from '@/hooks/useFormSubmition';
import { ROUTES } from '@/constants';
import { useAuth } from '@/hooks/useAuth';

export const Login = () => {
  const { login } = useAuth();

  const { error, isLoading, register, handleSubmit, errors } =
    useFormSubmition<LoginDto>(loginSchema, login);

  return (
    <Container maxWidth="sm">
      <StyledLoginBox>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <MuiLink
              component={Link}
              href="/forgot-password"
              variant="body2"
              underline="hover"
            >
              Forgot Password?
            </MuiLink>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
              or
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          <Button
            component={Link}
            href={ROUTES.AUTH.REGISTER}
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
          >
            Create Account
          </Button>
        </Box>
      </StyledLoginBox>
    </Container>
  );
};
