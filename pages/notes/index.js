import Link from 'next/link';
import {
  Button,
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

const notes = [
  { name: 'my-note' },
  { name: 'my-note-2' },
  { name: 'another-note' },
];

export default function Note() {
  return <Container>
    <Box mt={2}>
      <Typography variant="h2">my notes</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            { notes.map((note, i) => {
              return <TableRow key={i}>
                <TableCell>
                  <Link key={i} as={"/notes/" + note.name} href="/notes/[note]">
                    {note.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <Button color="secondary" variant="contained">Delete</Button>
                </TableCell>
              </TableRow>
            })}
            <TableRow>
              <TableCell>
                <TextField id="standard-basic" label="Name" />
              </TableCell>
              <TableCell>
                <Button color="primary" variant="contained">Create Note</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Container>
}
