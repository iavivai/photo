export default function handler(req, res) {
  const {
    query: { id },
  } = req

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ id }))
}
