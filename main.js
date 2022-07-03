const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const passwdGenerated = document.querySelector('.password');
const passwdTxt = document.querySelector('.passwd-txt');
const small = document.querySelector('small');

const chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'A', 'Z', 'H', 'G', 'I', 'j', 
    'u', 'y', '0', '1', '2', '4', '5', 
    '6', '7', '8', '9',
];

button.disabled = true;

input.addEventListener('input', () => {

    const passwdLen = input.value;

    if (parseInt(passwdLen) < 8 || parseInt(passwdLen) > 16 || passwdLen.length === 0) {
        button.disabled = true;
        small.style.display = 'block';
        small.style.color = 'rgb(201, 44, 44)';
    } else {
        small.style.display = 'none';
        button.disabled = false;
    }
})


// Generate Password
function generatePassword() {
    const passwdLen = parseInt(input.value);
    let passwd = '';

    for (let i = 0; i < parseInt(passwdLen); i++) {
        passwd += chars[Math.floor(Math.random() * chars.length)];
    }

    return passwd;
}



button.addEventListener('click', () => {
    passwdTxt.style.display = 'block';
    passwdGenerated.textContent = generatePassword();
    passwdGenerated.style.display = 'block';
});