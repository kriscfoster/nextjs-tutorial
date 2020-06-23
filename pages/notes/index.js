import Link from 'next/link';
import { Button, Box, Container, Paper, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const notes = [
  { name: 'my-note' },
  { name: 'my-note-2' },
  { name: 'another-note' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    color: 'white',
    background: theme.palette.primary.main,
  }
}));

export default function Note() {
  const classes = useStyles();

  return <Container>
    <div className={classes.root}>
    { notes.map((note) => {
      return <Link as={"/notes/" + note.name} href="/notes/[note]">
        <Paper className={classes.paper}>
          <Typography>{note.name}</Typography>
        </Paper>
      </Link>
    })}
    </div>
    <Typography variant="h5">Create Note</Typography>
    <form>
      <TextField id="standard-basic" label="Name" />
      <Box pt={3}>
        <Button color="secondary" variant="contained">Create Note</Button>
      </Box>
    </form>
  </Container>
}
