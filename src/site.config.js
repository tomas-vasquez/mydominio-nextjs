export default {
  exchangeRates: [
    {
      id: "BOB",
      text: "BS",
      conuntry: "Bolivia",
    },
    {
      id: "USS",
      text: "$",
      conuntry: "UUEE",
    },
    {
      id: "EUR",
      text: "€",
      conuntry: "",
    },
  ],

  extensions: [
    { id: "domain1", text: ".com", price: { BOB: 70, USD: 10, EUR: 123 } },
    { id: "domain2", text: ".bo", price: { BOB: 71, USD: 11, EUR: 123 } },
  ],

  HostingTypes: [
    { id: "hosting1", text: "initial", price: { BOB: 150, USD: 21, EUR: 123 } },
    { id: "hosting2", text: "pyme", price: { BOB: 350, USD: 50, EUR: 123 } },
    {
      id: "hosting3",
      text: "enterprice1",
      price: { BOB: 700, USD: 88, EUR: 123 },
    },
    {
      id: "hosting4",
      text: "enterprice1",
      price: { BOB: 850, USD: 121, EUR: 123 },
    },
  ],
};
