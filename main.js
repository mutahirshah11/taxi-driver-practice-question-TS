import inquirer from "inquirer";
const initialKms = 5;
const ChargesforinitialKms = 30;
const ChargesAfterInitialKms = 25;
const FixedCharges = 50;
let CabService = await inquirer.prompt([
    {
        name: "CustomerName",
        message: "Enter  Customer Name",
        type: "input"
    },
    {
        name: "KmTravelled",
        message: `Total Km Travlled by customer`,
        type: "number",
    }
]);
let TotalCharges;
if (CabService.KmTravelled >= initialKms) {
    TotalCharges = (CabService.KmTravelled * ChargesforinitialKms) + FixedCharges;
}
else if (CabService.KmTravelled < initialKms) {
    TotalCharges = (CabService.KmTravelled * ChargesAfterInitialKms) + ((CabService.KmTravelled - initialKms) * ChargesAfterInitialKms) + FixedCharges;
}
else { }
console.log(`Total Kms travelled by Mr.${CabService.CustomerName} is ${CabService.KmTravelled} and his/her Total bill is ${TotalCharges} `);
