
import styles from './CryptoList.module.css';
import CryptoCard from "../cryptoCard/CryptoCard";
import utils from '../utils/utils';

const { urlLogoFirstPart } = utils()

const CryptoList = (props) => {
    return (
        <ul className={styles.crypto_list} >
            {props.data.map(x =>
                <CryptoCard
                    key={x.CoinInfo.Id}
                    logoUrl={`${urlLogoFirstPart}${x.CoinInfo.ImageUrl}`}
                    crypto={x.CoinInfo.Name}
                    price={x.RAW.USD.PRICE}
                    usdSymbol={x.RAW.USD.TOSYMBOL}
                >
                </CryptoCard>
            )}
        </ul>
    );
};

export default CryptoList;