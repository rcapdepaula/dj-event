const { events } = require('./data.json')

// respose, request
export default (req, res) => {
  const evt = events.filter((evt) => evt.slug === req.query.slug)
  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${request.method} Not Allowed`)
  }
}
