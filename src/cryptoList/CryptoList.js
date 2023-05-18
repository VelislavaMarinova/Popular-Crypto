import CryptoCard from "../cryptoCard/CryptoCard";

const CryptoList = (props) => {
    return (
        <ul >
            {props.data.map(x =>
                <CryptoCard
                    key={x.CoinInfo.Id}
                    logoUrl={`https://www.cryptocompare.com${x.CoinInfo.ImageUrl}`}
                    crypto={x.CoinInfo.Name}
                    price={x.RAW.USD.PRICE}
                    usdSymbol={x.RAW.USD.TOSYMBOL}>
                </CryptoCard>
            )}
        </ul>
    );
};

export default CryptoList;