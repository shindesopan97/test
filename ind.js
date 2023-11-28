const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');

const items = [];

function addItem() {
    const newItemText = itemInput.value.trim();
    if (newItemText) {
        items.push(newItemText);
        itemInput.value = '';
        renderItems();
    }
}

function renderItems() {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item}
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(li);
    });
}

function editItem(index) {
    const updatedItemText = prompt('Edit item:', items[index]);
    if (updatedItemText !== null) {
        items[index] = updatedItemText.trim();
        renderItems();
    }
}

function deleteItem(index) {
    if (confirm('Are you sure you want to delete this item?')) {
        items.splice(index, 1);
        renderItems();
    }
}

renderItems();
