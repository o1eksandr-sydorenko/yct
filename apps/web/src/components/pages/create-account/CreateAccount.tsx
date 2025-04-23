'use client';

import { useRouter } from 'next/navigation';
import { RegisterDto } from '@your-crypto-tracker/api-client';
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Divider,
  Link,
} from '@mui/material';
import { StyledCreateAccountBox } from './styles';
import { registerSchema } from '@/lib/validations/auth';
import { useFormSubmition } from '@/hooks/useFormSubmition';
import api from '@/clients/api';

export const CreateAccount = () => {
  const router = useRouter();

  const { error, isLoading, register, handleSubmit, errors } =
    useFormSubmition<RegisterDto>(
      registerSchema,
      async (data: RegisterDto): Promise<void> => {
        const response = await api.auth.authControllerRegister({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        });

        // Store the token
        localStorage.setItem('accessToken', response.data.accessToken);

        router.push('/dashboard');
      }
    );

  return (
    <Container maxWidth="sm">
      <StyledCreateAccountBox>
        <Typography component="h1" variant="h5">
          Create Account
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
            id="firstName"
            label="First Name"
            autoFocus
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...register('firstName')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register('lastName')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
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
            autoComplete="new-password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
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
            href="/login"
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
          >
            Sign In
          </Button>
        </Box>
      </StyledCreateAccountBox>
    </Container>
  );
};
