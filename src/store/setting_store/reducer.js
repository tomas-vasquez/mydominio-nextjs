import siteConfig from "../../site.config";

const mySiteConfig = {
  ...siteConfig,
  currentExchangeRate: siteConfig.exchangeRates[0],
};

export default (state = mySiteConfig, action) => {
  let aux;

  switch (action.type) {
    case "SET_CURRENT_EXCHANGE_RATE":
      aux = { ...state };
      aux.currentExchangeRate = action.data;
      return aux;

    default:
      return mySiteConfig;
  }
};
