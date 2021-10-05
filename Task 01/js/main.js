

let idCustomer = document.querySelector('#idCustomer');
let nameCustomer = document.querySelector('#nameCustomer');
let balanceCustomer = document.querySelector('#balanceCustomer');
let btnAdd = document.querySelector('#btnAdd');
let displayData = document.querySelector('#displayData');




btnAdd.addEventListener('click' , function (e) {
    addData();
  });


let customrContainer;

if (localStorage.getItem("customrContainer") == null)
{
    customrContainer = [];
}
else {
    customrContainer = JSON.parse(localStorage.getItem('customrContainer'));
    displayCustomers();
}
let addData = function(){
 
    let customers= {

        idCustomer: uniqueNumber(),
        nameCustomer:nameCustomer.value,
        balanceCustomer:balanceCustomer.value,
    }
    customrContainer.push(customers);
    localStorage.setItem("customrContainer", JSON.stringify(customrContainer));
    displayCustomers();
    }

    function displayCustomers(){

        box=``;
        for(i = 0 ; i < customrContainer.length ; i++){

            box += `
            <div class="col-md-4 mb-3 text-center">
            <span class="badge badge-dark">${customrContainer[i].idCustomer}</span>
            <h2 class="text-info">${customrContainer[i].nameCustomer}</h2>
            <h4 class="text-danger">${customrContainer[i].balanceCustomer}</h4>
            <button class="btn-danger" onclick="deletCustomer(${i})">Delete</button>
            <button class="btn-light" onclick="addBalance()">Add Balance </button>
            <button class="btn-warning" onclick="drawBalance()">WhithDraw </button>
        </div>
            `

            displayData.innerHTML = box;
        }
    }

    displayCustomers();
function deletCustomer(id) { 
    
    customrContainer.splice(id,1);
    localStorage.setItem("customrContainer" , JSON.stringify(customrContainer))
    displayCustomers();

 }

function addBalance(e) {

    document.querySelector('.add-balance').classList.toggle('d-none');
  }
function drawBalance(e) {

    document.querySelector('.draw-balance').classList.toggle('d-none');
  }


    let uniqueNumber = function() {
        var date = new Date();
        var numberGenerate = date.getMilliseconds();
        return numberGenerate ;
      }


let addBalanceBtn   = document.querySelector('#addBalanceBtn');
let drawBalanceBtn    = document.querySelector('#drawBalanceBtn');

let addBalanceINP = document.querySelector('#addBalanceINP');
let drawBalanceINP = document.querySelector('#drawBalanceINP');
   
addBalanceBtn.addEventListener('click', function(){

    if(addBalanceINP.value >= 1000){

        alert("can't add 10000 or more");
    }else{
        
        let p = document.createElement('p');
        p.textContent = 'Add Success';
        p.classList = 'alert alert-success';
        document.querySelector('.add-balance').appendChild(p)
    }

})

drawBalanceBtn.addEventListener('click' , function(){

    if(false){


    }else{
        let p = document.createElement('p');
        p.textContent = 'faild draw';
        p.classList = 'alert alert-danger';
        document.querySelector('.draw-balance').appendChild(p)
    }
})