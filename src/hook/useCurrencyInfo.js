import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_1mJDztAg40ZXKj0XCNT8QFC0T5Fv74Lpd3nYRJjj&base_currency=${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(
          Object.fromEntries(
            Object.entries(res.data).map(([key, val]) => [
              key.toLowerCase(),
              val.value,
            ])
          )
        );
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
