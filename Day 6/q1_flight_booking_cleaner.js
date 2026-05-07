const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

function cleanFlightData(flights = []) {
  const safeFlights = Array.isArray(flights) ? flights : [];

  const cleanedFlights = safeFlights
    .map((flight) => {
      const flightText = typeof flight === "string" ? flight : "";
      const [route = "", rawPrice = ""] = flightText.split(":");
      const [from = "", to = ""] = route.split("-");
      const price = Number(rawPrice);

      return {
        from: from.trim(),
        to: to.trim(),
        price: Number.isFinite(price) ? price : 0
      };
    })
    .filter((flight) => flight.price >= 100 && flight.price <= 500)
    .sort((firstFlight, secondFlight) => firstFlight.price - secondFlight.price);

  return JSON.stringify(cleanedFlights);
}

if (typeof require === "undefined" || require.main === module) {
  const cleanedFlightJson = cleanFlightData(rawFlights);
  console.log(cleanedFlightJson);
}

if (typeof module !== "undefined") {
  module.exports = { cleanFlightData };
}
