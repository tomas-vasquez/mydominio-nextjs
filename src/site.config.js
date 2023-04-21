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
    {
      id: "domain1",
      text: ".com",
      prices: [
        { id: "BOB", value: 10 },
        { id: "USS", value: 11 },
        { id: "EUR", value: 12 },
      ],
    },
    {
      id: "domain2",
      text: ".bo",
      prices: [
        { id: "BOB", value: 20 },
        { id: "USS", value: 21 },
        { id: "EUR", value: 22 },
      ],
    },
    {
      id: "domain3",
      text: ".com.bo",
      prices: [
        { id: "BOB", value: 30 },
        { id: "USS", value: 31 },
        { id: "EUR", value: 32 },
      ],
    },
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
