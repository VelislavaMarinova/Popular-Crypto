import styles from "./CryptoCard.module.css";

const CryptoCard = (props) => {
    
    return (
        <li className={styles.crypto_card}>
            <div className={styles.crypto_card__img}>
                <img src={props.logoUrl} alt="img" />
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