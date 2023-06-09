const btn = document.querySelector('button[type="submit"]')
let id = 0
const btnE = document.createElement("button");
btnE.textContent = "EDIT";
btnE.addEventListener("click", function (e) {
    handleEdit(e);

});
function handleEdit(e) {

}
btn.addEventListener("click", function (event) {
    event.preventDefault();
    const fName = document.querySelector('#Fname').value
    const lName = document.querySelector('#Lname').value
    let gender = "F"
    const age = document.querySelector('#age').value
    const email = document.querySelector('#email').value
    const tel = document.querySelector('#number').value
    const imgUrl = document.querySelector("#image").value
    if (document.querySelector('#m').checked) {
        gender = "M"
    }
    const tableBody = document.querySelector('tbody')
    const row = document.createElement('tr');
    const th = document.createElement('th')
    const img = document.createElement('img')
    img.setAttribute("src", imgUrl)
    const btnD = document.createElement("button")
    btnD.textContent = "delete"
    btnD.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.remove()
    })


    id++;
    th.textContent = id
    const td1 = document.createElement('td')
    td1.textContent = `${fName} ${lName}`
    const td2 = document.createElement('td')
    td2.textContent = email
    const td3 = document.createElement('td')
    td3.textContent = age
    const td4 = document.createElement('td')
    td4.textContent = tel
    const td5 = document.createElement('td')
    td5.textContent = gender
    const td6 = document.createElement('td')
    td6.appendChild(img)
    const td7 = document.createElement('td')
    td7.appendChild(btnD)
    const td8 = document.createElement('td');
    td8.appendChild(btnE);

    row.appendChild(th)
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)
    row.appendChild(td5)
    row.appendChild(td6)
    row.appendChild(td7)
    row.appendChild(td8)
    tableBody.appendChild(row)
})