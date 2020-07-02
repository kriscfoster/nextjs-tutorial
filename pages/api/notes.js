// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const notes = [
  { name: 'my-note' },
  { name: 'my-note-2' },
  { name: 'another-note' },
];

export default (req, res) => {
  if (req.method == 'GET') {
    res.status(200).json(notes);
  } else if (req.method == 'POST') {
    notes.push(req.body);
  }
}
