let items = []

let input

function get() {
    input = document.getElementsByTagName('input')
    let productName = input[0].value
    let amount = Number(input[1].value)
    if (amount.toString().trim() === '') {
        return
    }

    items.push({ 'amount': amount, 'productName': productName, 'class': amount > 0 ? 'green' : 'red' })

    render()
    calc()
}
function render() {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    items.forEach((items, i) => {
        tbody.innerHTML = document.getElementById('tbody').innerHTML += `<tr>
            <td>${items.productName}</td>
            <td class="${items.class}">${items.amount}</td>
            <td>
            <button class="${items.class}" onclick="del(${i}, '${items.class}')">Delete</button>
            </td> 
            </tr>`
    })
}
function calc() {
    let income = 0
    let expense = 0
    items.forEach((items) => {
        if (items.amount > 0) {
            income += items.amount
        } else {
            expense += items.amount
        }
    })
    document.getElementById('income').innerText = income
    document.getElementById('expense').innerText = expense*-1

    let i = document.getElementById('income').innerText || 0
    let e = document.getElementById('expense').innerText || 0

    let result = i - e
    console.log(result);
    
    if(result>=0){
        document.getElementById('profit').innerText = result
        document.getElementById('loss').innerText = 0
    }else{
        document.getElementById('profit').innerText = 0
        document.getElementById('loss').innerText = result*-1
    }
}

function del(i) {
    items.splice(i, 1)
    render()
    calc()
}