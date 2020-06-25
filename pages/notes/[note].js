import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Typography, TextField, Button, Box } from '@material-ui/core';

export default function Note() {
  const router = useRouter();
  return <Container>
    <Box mt={2}>
      <Typography variant="h2">{router.query.note}</Typography>
      <TextField multiline fullWidth value={"This is where my note text should go"}/>
    </Box>
  </Container>
}
