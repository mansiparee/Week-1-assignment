/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  function solve(transation){
  var spendEstimates = {}

  for (var i=0; i<transation.length; i++){
    var t = transations[i];
    if (spendEstimates[t.category]){
      spendEstimates[t.category] = spendEstimates[t.category] + t.price
    }else{
      spendEstimates[t.category] = t.price
    }
  }
  console.log(spendEstimates)
}
var transations = [
  { itemname: "coco cola",
   category: "drink",
   price: "30", 
   timestamp: "30-may-2023"
  },
   { itemname: "kachori",
   category: "food",
   price: "20", 
   timestamp: 3"-may-2023"
  },
   { itemname: "honeychilli",
   category: "food",
   price: "100", 
   timestamp:20-may-2023
  },
  
   
solve(transation)

  
]
  return [];
}

module.exports = calculateTotalSpentByCategory;
