import Loading from "../loading/Loading.js";
import useGetData from "../hooks/useGetData.js";
import useGetCryptoLogo from "../hooks/useGetCryptoLogo.js";
import CryptoCard from "../cryptoCard/CryptoCard.js";
import styles from './HomePage.module.css'

const HomePage = () => {
    const { data, loading } = useGetData();
    // const { loadingLogo } = useGetCryptoLogo(crypto)

    //   console.log(logo.Data.LOGO_URL);

    if (loading ) {
        return <Loading />;
    };
    if (!data) {
        return (
            <h2 className='expenses-list__fallback'>
                Found no data.
            </h2>
        );
    }

    return (
        <section className={styles.main_section}>
            <h1>Top Volume Cryptocurrencies</h1>
            <ul >
                {data.map(x =>
                    <CryptoCard
                        key={Math.random()}
                        crypto={x.CoinInfo.Name}
                        price={x.RAW.USD.PRICE}
                        usdSymbol={x.RAW.USD.TOSYMBOL}>
                    </CryptoCard>
                )}
            </ul>
        </section>
    );
};

export default HomePage;