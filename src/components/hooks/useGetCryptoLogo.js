import { useEffect, useState } from "react";

const useGetCryptoLogo = (crypto) => {
    console.log('crypto',crypto);
    const [logo, setLogo] = useState()
    // const [loadingLogo, setLoadingLogo] = useState(true)


    useEffect(() => {
        // setLoadingLogo(true)
        try {
            fetch(`https://data-api.cryptocompare.com/asset/v1/data/by/symbol?asset_symbol=${crypto}`, {
                method: 'GET',
                headers: { 'authorization': 'Apikey ae9116f26eb9479ef4c93a832ff70ff659cad88507792515d965ca35fb602bc1' }
            })
                .then(res => res.json())
                .then(res => {
                    setLogo(res.Data.LOGO_URL)
                    // setLoadingLogo(false)
                    // console.log(res);
                })
        } catch (error) {
            throw new Error(error);
        }
    }, [crypto]);

    return { logo };//, loadingLogo
};

export default useGetCryptoLogo;