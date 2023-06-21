const flightsData=require('../Dummy/DummyData');

exports.getPrices = (req, res) => {
    const source = req.query.source;
    const destination = req.query.destination;
    const date = req.query.date;

    const filteredFlights = flightsData.filter(flight =>
        flight.source === source &&
        flight.destination === destination &&
        flight.date === date
    );

    if (filteredFlights.length === 0) {
        res.status(404).json({ error: 'No flights found for the given criteria' });
    } else {
        const prices = filteredFlights[0].prices;
        res.json(prices);
    }
}
