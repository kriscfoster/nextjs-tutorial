import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Typography, TextField, Button } from '@material-ui/core';

export default function Note() {
  const router = useRouter();
  return <Container>
    <Link href="/">
      <Button
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </Link>
    <Typography variant="h2">{router.query.note}</Typography>
    <TextField multiline fullWidth value={"This is where my note text should go"}/>
  </Container>
}
