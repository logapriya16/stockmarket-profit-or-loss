const initialprice=document.querySelector("#initial-price");
const NoOfStocks=document.querySelector("#stocks-quantity");
const currentPrice=document.querySelector("#current-price");
const output=document.querySelector("#output-message");
const submitBtn=document.querySelector("#submit-btn");

function calculateProfitAndLoss(initialPrice,quantity,currentPrice)
{
    if(initialPrice>currentPrice)
    {
        var loss=(initialPrice-currentPrice)*quantity;
        var lossPercentage=(loss/initialPrice)*100;
        console.log("loss"+loss);
        output.innerText="LOSS "
    }
    else if(currentPrice===initialPrice)
    {
       // console.log("No pain No gain No gain No pain")
       output.innerText="Equal price";
    }
    else if(initialPrice<currentPrice)
    {
        var profit=(currentPrice-initialPrice)*quantity;
        var profitPercentage=(profit/initialPrice)*100;
        console.log("profit"+profit);
    }
    console.log(currentPrice);
    console.log(initialPrice);
}
function eventHandler()
{

}

submitBtn.addEventListener('click',calculateProfitAndLoss(
    Number(initialprice.value),Number(NoOfStocks.value),Number(currentPrice.value)
));