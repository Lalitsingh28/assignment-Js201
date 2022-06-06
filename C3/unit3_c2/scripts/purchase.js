
let wallet_balence = JSON.parse(localStorage.getItem('balence'))
let buy = JSON.parse(localStorage.getItem('purchase'))

displayData(buy)
document.getElementById('wallet_balance').innerText = wallet_balence
function displayData(data){
    // document.getElementById('purchased_vouchers').innerHTML = null;

    let div = document.createElement('div');
    div.setAttribute("class","voucher")
    let image = document.createElement('img')
    image.src = data.image;
    let name = document.createElement('h3');
    name.innerText = data.name;
    let price = document.createElement('h5');
    price.innerText = data.price;

    div.append(image,name,price)
    document.getElementById('purchased_vouchers').append(div)
}