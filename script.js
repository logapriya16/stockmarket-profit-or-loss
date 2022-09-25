const initialprice=document.querySelector("#initial-price");
const NoOfStocks=document.querySelector("#stocks-quantity");
const currentPrice=document.querySelector("#current-price");
const output=document.querySelector("#output-message");
const submitBtn=document.querySelector("#submit-btn");

function calculateProfitAndLoss(IP,NS,CP)
{
    if(IP>CP)
    {
        var loss=(IP-CP)*NS;
        var lossPercentage =(loss/IP)*100;
        console.log("loss"+loss);
        output.innerText="THE LOSS IS RS."+loss+" AND THE LOSS PERCENTAGE IS  "+lossPercentage+" %";
        //output.innerHTML='<div style="background-color:red; color:white;padding:1rem;width:300px;flex:">THE LOSS IS Rs.${loss}  AND LOSS PERCENTAGE IS ${lossPercentage} %   :( "</div>';
    }
    else if(CP===IP)
    {
          output.innerText="NIETHER PROFIT NOR LOSS ";
    }
    else if(CP>IP)
    {
        var profit=(CP-IP)*NS;
        var profitPercentage=(profit/IP)*100;
        console.log("profit"+profit);
        output.innerText="THE PROFIT IS Rs."+profit+" AND PROFIT PERCENTAEG IS "+profitPercentage+" %";
    }
    console.log(CP);
    console.log(IP);
}

submitBtn.addEventListener('click',ValuesToNumbers);
function ValuesToNumbers()
{
    
    var IP=Number(initialprice.value);
    var NS=Number(NoOfStocks.value);
    var CP=Number(currentPrice.value);
    calculateProfitAndLoss(IP,NS,CP);
}