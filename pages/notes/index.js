import Link from 'next/link';
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const notes = [
  { name: 'my-note' },
  { name: 'my-note-2' },
  { name: 'another-note' },
];

export default function Note() {
  return <div>
    <Typography variant="h2">Notes Page</Typography>
    <TableContainer>
      <Table>
        <TableBody>
          { notes.map((note, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Link as={"/notes/" + note.name} href="/notes/[note]">
                    <a>{note.name}</a>
                  </Link>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}
