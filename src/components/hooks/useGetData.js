import { useState, useEffect } from "react";

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true)
        try {
            fetch(`https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD`, {
                method: "GET",
                headers:
                    { 'authorization': 'Apikey ae9116f26eb9479ef4c93a832ff70ff659cad88507792515d965ca35fb602bc1' }
            })
                .then(res => res.json())
                .then(result => {
                    setData(result.Data);
                    setLoading(false);
                    // console.log(result.Data[0].CoinInfo.Name);
                });

        } catch (error) {

            throw new Error(error);
        };
    }, [])

    return { data, loading };
}
export default useGetData;