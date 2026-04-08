// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let list = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0
let empCount = document.getElementById('empCount')
function checkMessageDisplay() {
    empCount.textContent = count
}
checkMessageDisplay()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let ext = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let dept = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = list.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    let cell4 = row.insertCell()
    let cell5 = row.insertCell()
    let cell6 = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell1.appendChild(document.createTextNode(id))
    cell2.appendChild(document.createTextNode(name))
    cell3.appendChild(document.createTextNode(ext))
    cell4.appendChild(document.createTextNode(email))
    cell5.appendChild(document.createTextNode(dept))

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.className = 'btn btn-danger btn-sm'

    cell6.appendChild(deleteBtn)
    
    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    checkMessageDisplay()
})

// DELETE EMPLOYEE
