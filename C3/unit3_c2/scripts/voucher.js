

let user = JSON.parse(localStorage.getItem('user'))||[]
let wallet_balence = JSON.parse(localStorage.getItem('balence'))||[]
let buy = JSON.parse(localStorage.getItem('purchase'))||[]

async function displayData(){

  let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
  let res = await fetch(url)
  let data = await res.json()
//   console.log(data[0].vouchers)
  append(data[0].vouchers)
}

displayData()


function append(data){
    document.getElementById('voucher_list').innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement('div');
        div.setAttribute("class","voucher")
        let image = document.createElement('img')
        image.src = el.image;
        let name = document.createElement('h3');
        name.innerText = el.name;
        let price = document.createElement('h5');
        price.innerText = el.price;
        let btn = document.createElement('button')
        btn.innerText = "Buy"
        btn.addEventListener("click",function(){
              buyVoucher(el)
        })
        btn.setAttribute("class","buy_voucher")
        div.append(image,name,price,btn)
        document.getElementById('voucher_list').append(div)
    })
}


function buyVoucher(el){
    if(user.wallet>=el.price){
        alert("Hurray! purchase successful")
        let balence = user.wallet-el.price;
        localStorage.setItem('purchase',JSON.stringify(el))
        localStorage.getItem('balence',JSON.stringify(balence))
        window.location.href = "/purchase.html"
    }
    else{
        alert("Sorry! insufficient balance")
    }
    // console.log(el)
    
}