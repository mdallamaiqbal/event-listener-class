document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Updated page title text'
    })
document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.innerText = 'LogIN Successful'
    })
document.getElementById('btn-update')
    .addEventListener('click', function () {
        //step 2
        const nameInput = document.getElementById('input-name');
        const name = nameInput.value;
        //step 3
        const nameP = document.getElementById('name');
        nameP.innerText = name;
    })