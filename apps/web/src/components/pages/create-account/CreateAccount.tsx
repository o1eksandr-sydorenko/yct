import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Divider,
  FormHelperText,
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { StyledCreateAccountBox } from './styles';
import { useFormValidation } from '../../../hooks/useFormValidation';
import { initialValues, validationRules } from './config';

export const CreateAccount = () => {
  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur, validateForm } =
    useFormValidation({
      initialValues,
      validationRules,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your create account logic here
      router.push('/dashboard');
    }
  };

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
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            id="repeatPassword"
            autoComplete="new-password"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.repeatPassword && !!errors.repeatPassword}
            helperText={touched.repeatPassword && errors.repeatPassword}
          />
          <FormHelperText sx={{ mt: 1 }}>
            Password must be at least 8 characters long and contain uppercase,
            lowercase, and numbers
          </FormHelperText>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
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
