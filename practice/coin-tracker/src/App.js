import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [usd, setUSD] = useState();
  const onChange = (event) => {
    setUSD(event.target.value);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [coinType, setCoinType] = useState();
  const getCoinType = (event) => {
    setCoinType(event.target.value);
    console.log(coinType);
  }

  return (
    <div className="App">
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={getCoinType}>
          <option>Select coin type</option>
          {coins.map((coin, index) => (
            <option 
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      }

      <label htmlFor="usd">Enter USD</label>
      <input 
        id="usd"
        onChange={onChange}
        type="number"
        value={usd}
        placeholder="Write USD"
      />

      <h3>You can buy {usd/coinType}</h3>
      
    </div>
  );
}

export default App;
