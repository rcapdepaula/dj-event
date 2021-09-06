const { events } = require('./data.json')

// respose, request
export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(events)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${request.method} Not Allowed`)
  }
}
