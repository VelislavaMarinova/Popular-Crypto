
const utils = () => {

    const url = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD`;
    const options = {
        method: "GET",
        headers: { 'authorization': 'Apikey ae9116f26eb9479ef4c93a832ff70ff659cad88507792515d965ca35fb602bc1' }
    };
    return {url,options}
};

export default utils;