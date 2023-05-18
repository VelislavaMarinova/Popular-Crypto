import Loading from "../loading/Loading.js";
import useGetData from "../hooks/useGetData.js";
import styles from './HomePage.module.css'
import CryptoList from "../cryptoList/CryptoList.js";

const HomePage = () => {
    const { data, loading } = useGetData();

    if (loading) {
        return <Loading />;
    };
    
    return (
        <section className={styles.main_section}>
            <h1>Top Volume Cryptocurrencies</h1>
            {data ? <CryptoList data={data} /> :
                <h2 className='expenses-list__fallback'>
                    Found no data.
                </h2>
            }
        </section>
    );
};

export default HomePage;