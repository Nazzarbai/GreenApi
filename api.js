const targetDom = document.querySelector('.text');








const getStateInstanceButton = document.querySelector('#get-state-instance');
getStateInstanceButton.addEventListener('click', () => {
    const idInstance = document.querySelector('#instance').value;
    const token = document.querySelector('#token').value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${token}`);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const data = xhr.response;
        targetDom.innerText = JSON.stringify(data, null, 2);
    };
});








const sendMessageButton = document.querySelector('#send-message');
sendMessageButton.addEventListener('click', () => {
    const idInstance = document.querySelector('#instance').value;
    const token = document.querySelector('#token').value;
    const number = document.querySelector('#number_1').value;
    const message = document.querySelector('#message').value;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", `https://api.green-api.com/waInstance${idInstance}/sendMessage/${token}`);
    xhr.send(JSON.stringify({
        "chatId": `${number}@c.us`,
        "message": `${message}`
    }));
    
    xhr.responseType = "json";
    xhr.onload = () => {
        const data = xhr.response;
        targetDom.innerText = JSON.stringify(data, null, 2);
    };
});







const sendFileByURLButton = document.querySelector('#send-file-by-url');
sendFileByURLButton.addEventListener('click', () => {
    const idInstance = document.querySelector('#instance').value;
    const token = document.querySelector('#token').value;
    const number = document.querySelector('#number_2').value;
    const URL = document.querySelector('#URL').value;
    const fileName = document.querySelector('#file-name').value;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${token}`);
    xhr.send(JSON.stringify({
        "chatId": `${number}@c.us`,
        "urlFile": `${URL}`,
        "fileName": `${fileName}`
    }));
    
    xhr.responseType = "json";
    xhr.onload = () => {
        const data = xhr.response;
        targetDom.innerText = JSON.stringify(data, null, 2);
    };
});









const getSettingsButton = document.querySelector('#get-settings');
getSettingsButton.addEventListener('click', () => {
    const idInstance = document.querySelector('#instance').value;
    const token = document.querySelector('#token').value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.green-api.com/waInstance${idInstance}/getSettings/${token}`);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const data = xhr.response;
        targetDom.innerText = JSON.stringify(data, null, 2);
    };
});





