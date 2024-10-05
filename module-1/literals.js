const amount = 10;
const currency = "euro";
const currencyValue = 2;

let oldTotal = "Total amount is " + amount + " converted in " + currency + ".";

let total = taggedTotal`Total amount is ${amount * currencyValue} converted in ${currency}`;

function taggedTotal(text, ...values){
    const taggedAmount = values[0];
    const curr = values[1]
    const currencySymbol = "€"

  return `${text[0]}${currencySymbol} ${taggedAmount}${text[1]}${curr}${text[2]}`
}


console.log(total);
