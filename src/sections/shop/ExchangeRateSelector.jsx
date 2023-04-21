import { connect } from "react-redux";
import { setCurrentExchangeRate } from "../../store/setting_store/actions";

function ExchangeRateSelector(props) {
  const { exchangeRates, currentExchangeRate, setCurrentExchangeRate } = props;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const exchangeRateId = e.target.value;
    const newExchangeRate = exchangeRates.find(
      (exchangeRate) => exchangeRate.id === exchangeRateId
    );
    setCurrentExchangeRate(newExchangeRate);
  };

  return (
    <>
      <select
        className="form-select  me-2 "
        name="extension"
        value={currentExchangeRate.id}
        onChange={onChangeHandler}
        style={{ minWidth: "85px" }}
      >
        {exchangeRates.map((exchangeRate) => (
          <option key={"k" + exchangeRate.id} value={exchangeRate.id}>
            {exchangeRate.id}
          </option>
        ))}
      </select>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    exchangeRates: state.settings.exchangeRates,
    currentExchangeRate: state.settings.currentExchangeRate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentExchangeRate: (data) => dispatch(setCurrentExchangeRate(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRateSelector);
