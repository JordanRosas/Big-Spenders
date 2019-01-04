//targeting the output article in the index
const outPutElement = document.querySelector("#output")
//set innerHTML to big spenders
outPutElement.innerHTML = "<h1>Big Spenders</h1>"

//line of code below is filtering through the business objects and executing the findBigSpenders function checking to see 
//which companies have placed orders 9000.00 or more.
//NOTES ON THE SOME() METHOD: The some() method tests whether at least one element in the array passes the test implemented
// by the provided function.
const bigSpendingCompanies = businesses.filter(business => 
  business.orders.some(findBigSpenders =>
    findBigSpenders >= 9000))

//building the DOM components to hold the big spending companies
bigSpendingCompanies.forEach(business =>{
  outPutElement.innerHTML += `
  
  <h3>${business.companyName}</h3>
  <section>
    <h4>${business.addressFullStreet}</h4>
    <h4>${business.adressZipCode}</h4>
  </section>

  `
})



