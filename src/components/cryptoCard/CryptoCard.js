import styles from "./CryptoCard.module.css";
import useGetCryptoLogo from "../hooks/useGetCryptoLogo";

const CryptoCard = (props) => {
    console.log(props.crypto);
    const { logo } = useGetCryptoLogo(props.crypto)
    return (
        <li className={styles.crypto_card}>
            <div className={styles.crypto_card__img}>
                <img src={logo} alt="img" />
            </div>
            <h2>{props.crypto}</h2>
            <div className={styles.crypto_card__description} >
                <div className={styles.crypto_card__price}>
                    <span>{props.price} </span>
                    <span>{props.usdSymbol}</span>
                </div>
            </div>
        </li>
    );
};

export default CryptoCard;