import { useState, useEffect } from "react";
import utils from "../utils/utils";

const {url,options}=utils();

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        try {
            fetch(url,options)
                .then(res => res.json())
                .then(result => {
                    setData(result.Data);
                    setLoading(false);
                });

        } catch (error) {
            throw new Error(error);
        };
    }, [])

    return { data, loading };
}
export default useGetData;