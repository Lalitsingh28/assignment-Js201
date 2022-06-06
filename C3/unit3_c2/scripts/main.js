

let user = JSON.parse(localStorage.getItem('user'))||[]
// let wallet_balence = JSON.parse(localStorage.getItem('balence'))||[]
document.getElementById('submit').addEventListener("click",function(){
    submit(event)
})

function submit(event){

    event.preventDefault();
    let obj = {
        name:document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        wallet: document.getElementById('amount').value
    }

    let arr = localStorage.setItem('user',JSON.stringify(obj))
    // let wallet = localStorage.setItem('user',JSON.stringify(obj.wallet))
    window.location.reload()
    
    
}