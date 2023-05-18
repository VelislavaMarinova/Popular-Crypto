import Loading from "../loading/Loading.js";
import useGetData from "../hooks/useGetData.js";

const HomePage = () => {
    const { data, loading } = useGetData();

    if (loading) {
        return <Loading />;
    };

    return (
        <section >
            <h1>Top Volume Cryptocurrencies</h1>
            {data ?
                <ul >
                    {data.map(x => <li key={Math.random()}> {x.CoinInfo.Name} {x.RAW.USD.PRICE}{x.RAW.USD.TOSYMBOL}</li>)}
                </ul> :
                <p >No data available!</p>
            }
        </section>
    );
};

export default HomePage;