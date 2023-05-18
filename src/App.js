import useGetData from "./components/hooks/useGetData.js";

function App() {
  const { data,loading} = useGetData();

  
  console.log(data);
  console.log(data[0].RAW.USD.TOSYMBOL);
  console.log(loading);


  return (
    <div>
      {data.map(x=><h1>{x.CoinInfo.Name} {x.RAW.USD.PRICE}{x.RAW.USD.TOSYMBOL}</h1>)}
    </div>
  );
}

export default App;
