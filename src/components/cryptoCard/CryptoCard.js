import useGetCryptoLogo from "../hooks/useGetCryptoLogo";

const CryptoCard=(props)=>{
    console.log(props.crypto);
    const { logo } = useGetCryptoLogo(props.crypto)
return(
    <li>
        <img src={logo} alt="img" />
        {props.crypto}
        {props.price}
        {props.usdSymbol}

    </li>
)
};

export default CryptoCard