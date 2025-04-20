import { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledBox } from '../../shared/styles';

const faqItems = [
  {
    question: 'What is Your Crypto Tracker?',
    answer:
      'Your Crypto Tracker is a comprehensive platform that helps you monitor and manage your cryptocurrency investments. It provides real-time price tracking, portfolio management, and market analysis tools.',
  },
  {
    question: 'How do I get started?',
    answer:
      'To get started, simply create an account and connect your cryptocurrency wallets. You can then add your holdings and start tracking your portfolio performance.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we take security very seriously. All your data is encrypted and stored securely. We never store your private keys and use industry-standard security practices.',
  },
  {
    question: 'What cryptocurrencies are supported?',
    answer:
      'We support all major cryptocurrencies including Bitcoin, Ethereum, and many others. Our platform is constantly updated to include new and emerging cryptocurrencies.',
  },
];

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledBox>
      <Typography variant="h4" component="h2" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </StyledBox>
  );
};
