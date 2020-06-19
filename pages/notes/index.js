import Link from 'next/link';

const notes = [
  { name: 'my-note' },
  { name: 'my-note-2' },
  { name: 'another-note' },
];

export default function Note() {
  return <div>
    <h1>Notes Page</h1>
    { notes.map((note) => {
      return <div>
        <Link as={"/notes/" + note.name} href="/notes/[note]">
          <a>{note.name}</a>
        </Link>
      </div>
    })}
  </div>
}
