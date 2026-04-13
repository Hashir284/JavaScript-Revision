let items = localStorage.getItem('items')
if(items){
    items = JSON.parse(items)
}else{
    items = []
}

console.log(items);
print()
calc()

function get() {
    let input  = document.getElementsByTagName('input')
    let amount = Number(input[1].value)
    let productName = input[0].value
    if(amount.toString().trim() === ''){
        return
    }
    items.push({'amount':amount, 'product':productName, class: amount>0 ? 'green' : 'red'})

    localStorage.setItem('items', JSON.stringify(items))
    print()
    calc()
}

function print(){
    document.getElementById('tbody').innerHTML = ''
    items.forEach((items, i)=>{
        document.getElementById('tbody').innerHTML += `<tr>
            <td>${items.product}</td>
            <td class="${items.class}">${items.amount}</td>
            <td>
            <button class="${items.class}" onclick="del(${i})">Delete</button>
            </td> 
            </tr>`
    })
}

function del(i) {
    items.splice(i,1)
    localStorage.setItem('items', JSON.stringify(items))
    print()
    calc()
}

function calc(){
    let e = 0
    let i = 0
    items.forEach((item)=>{
        if(item.amount >= 0){
            i += item.amount
        }else{
            e += item.amount
        }
    })

    document.getElementById('income').innerText = i
    document.getElementById('expense').innerText = e * -1
 
    let result = document.getElementById('income').innerText - document.getElementById('expense').innerText

    if(result>=0){
        document.getElementById('profit').innerText = result
        document.getElementById('loss').innerText = 0
        document.getElementById('profit').innerText = result
        document.getElementById('loss').innerText = 0
    }else{
        document.getElementById('profit').innerText = 0
        document.getElementById('loss').innerText = result
    }
}