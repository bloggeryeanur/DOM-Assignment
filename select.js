// empty array
const names = [];

function selectPlayers(select) {
    // get all player name
    const selectPlayer = select.parentNode.children[0].innerText;
    names.push(selectPlayer);

    if (names.length > 5) {
        alert('please stop');
    }
    else {
        // set player count
        document.getElementById('per-player').innerText = names.length;

        // call the function 
        showPlayerNames(names);

        // disapbe button
        if (select.disabled == false) {
            select.disabled = true;
            select.style.backgroundColor = "gray";
        }
    }
}

// show player name
function showPlayerNames(playerNames) {

    const showName = document.getElementById('list-container');
    showName.innerHTML = '';

    for (let i = 0; i < playerNames.length; i++) {
        // console.log(playerNames[i]);
        const name = playerNames[i];

        // create list item
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${name}</td>
        </tr>
        `
        // append
        showName.appendChild(tr);
    }
}