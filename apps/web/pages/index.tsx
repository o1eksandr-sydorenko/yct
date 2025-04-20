'use client';

import { Container } from '@mui/material';
import { Intro } from '../src/components/pages/home/Intro';
import { FAQ } from '../src/components/pages/home/FAQ';
import { Metadata } from '../src/components/shared/Metadata';
export default function HomePage() {
  return (
    <>
      <Metadata
        title="Home"
        description="Welcome to Your Crypto Tracker - Your one-stop solution for cryptocurrency portfolio management"
      />
      <Container maxWidth="lg">
        <Intro />
        <FAQ />
      </Container>
    </>
  );
}
