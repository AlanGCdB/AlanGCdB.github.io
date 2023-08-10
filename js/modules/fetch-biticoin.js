export default function initFetchBiticoin(){

fetch('https://blockchain.info/ticker')
.then(response =>response.json())
.then(biticoin=>{
    const btcpreco = document.querySelector('.btc-preco');
    btcpreco.innerText = (1000 / biticoin.BRL.sell).toFixed(4);
}).catch(erro=>{
    console.log(Error(erro));
})
}