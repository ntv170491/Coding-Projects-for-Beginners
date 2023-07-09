let frmGrocery = document.getElementById('frmGrocery');
frmGrocery.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    let data = this.elements.txtWriteList.value;
    let list = document.querySelector('ol');
    let item = document.createElement('li');
    let text = document.createElement('p');

    text.textContent = data;
    this.elements.txtWriteList.value = "";
    item.append(text);
    list.append(item);

    //add btn Remove
    let rmvBtn = document.createElement('span');
    rmvBtn.classList.add('remove');
    item.append(rmvBtn);

    // Remove Item
    rmvBtn.addEventListener('click', deleteItem);

    //Done Item
    item.addEventListener('click', doneItem);
}

function deleteItem(e) {
    this.parentElement.remove();
}

function doneItem(e) {
    this.classList.toggle('done');
}