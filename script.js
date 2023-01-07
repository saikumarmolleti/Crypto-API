fetch(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
)
  .then((coinData) => {
    // console.log(coindata);
    return coinData.json(); // converted to object
  })
  .then((coinDataObject) => {
    // console.log(coinDataObject);
    let table_data = '';
    coinDataObject.map((coin) => {
      table_data += `<tr>
     <td class="coin"><img src="${coin.image}">${coin.name}</td>
     <td class="symbol">${coin.symbol}</td>
     <td class="price" >$${coin.current_price}</td>
     <td class="total" >$${coin.market_cap.toLocaleString()}</td>
     <td id="per" class="${
       coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'
     }">${parseFloat(coin.price_change_percentage_24h).toFixed(2)}% </td>
     <td class="cap" >Mkt Cap: ${coin.total_volume}</td>
     </tr>`;
    });
    document.getElementById('tableData').innerHTML = table_data;
  });
