document.body.innerHTML = `
<div class="heading">PUBLIC APIS</div>
<div class="container">
<button class="crypto" onclick="crypto()">CRYPTO CURRENCIES</button>
<div class="basevalue">page takes time to load</div>
<div class="cryptocontainer"></div>
</div>
 `;

async function crypto() {
    var crypto = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json');
    var btc = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json');
    var data1 = await crypto.json();
    var data2 = await btc.json();
    data2 = data2.btc;
    console.log(data2);
    console.log(typeof(data1))
    console.log(data1);
    var result = Object.keys(data1).map((key) => [(key), data1[key]]);
    console.log(result);
    var result2 = Object.keys(data2).map((key) => [(key), data2[key]]);
    console.log(result2);
    //console.log(data1.protocols);
    //data1 = data1.protocols;
    const cryptocontainer = document.querySelector(".cryptocontainer");
    cryptocontainer.innerHTML = "";

    Array.prototype.forEach.call(result, para => {
    cryptocontainer.innerHTML += `
    <div class="container2">
    <div class="id">CRYPTO NAME : ${para[1]}</div>
    <div class="container4">
    <div class="id">CODE  : ${para[0]}</div>
    
    </div>
    </div>
    `;
    document.querySelector(".cryptocontainer").style.display = "block";
    });
}
