import Loading from "../loading/Loading.js";
import useGetData from "../hooks/useGetData.js";
import useGetCryptoLogo from "../hooks/useGetCryptoLogo.js";
import CryptoCard from "../cryptoCard/CryptoCard.js";

const HomePage = () => {
    const { data, loading } = useGetData();
    const { loadingLogo } = useGetCryptoLogo(crypto)

    //   console.log(logo.Data.LOGO_URL);

    if (loading || loadingLogo) {
        return <Loading />;
    };

    return (
        <section >
            <h1>Top Volume Cryptocurrencies</h1>
            {data ?
                <ul >
                    {data.map(x =>
                        <CryptoCard
                            key={Math.random()}
                            crypto={x.CoinInfo.Name}
                            price={x.RAW.USD.PRICE}
                            usdSymbol={x.RAW.USD.TOSYMBOL}>
                        </CryptoCard>
                    )}
                </ul> :
                <p >No data available!</p>
            }
        </section>
    );
};

export default HomePage;