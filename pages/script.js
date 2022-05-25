
(function () {
    let container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    let inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    inp.style.width = '100%';
    inp.style.height = '70px';
    container.appendChild(inp);

    let rowWrap = document.createElement('div');
    rowWrap.classList.add('row-wrap');
    container.appendChild(rowWrap);

    const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', ' / ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', ', '.', ' / ', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

    function init(event) {
        let out = "";
        for (let i = 0; i < keyboard.length; i++) {
            if (keyboard[i].length == 1) keyboard[i] = keyboard[i].toUpperCase();
            console.log(keyboard[i].length);
            out += '<div class = "k-key" data="' + keyboard[i] + '">' + keyboard[i] + '</div>';

        }

        rowWrap.innerHTML = out;

        document.querySelector('[data="Backspace"]').style.width = '100px';
        document.querySelector('[data="Tab"]').style.width = '90px';
        document.querySelector('[data="Delete"]').style.width = '70px';
        document.querySelector('[data="CapsLock"]').style.width = '90px';
        document.querySelector('[data="Enter"]').style.width = '100px';
        document.querySelectorAll('[data="Shift"]')[0].style.width = '80px';
        document.querySelectorAll('[data="Shift"]')[1].style.width = '55px';
        document.querySelector('[data="ArrowUp"]').innerHTML = '&#129153;';
        document.querySelector('[data="ArrowLeft"]').innerHTML = '&#129144;';
        document.querySelector('[data="ArrowDown"]').innerHTML = '&#129147;';
        document.querySelector('[data="ArrowRight"]').innerHTML = '&#129154;';
        document.querySelector('[data=" "]').style.width = '340px';
        document.querySelector('[data="Ctrl"]').style.width = '70px';
    }

    init();

    const symbol = {
        "Control": "Ctrl",
    }

    let myKeyboard = document.querySelectorAll('.k-key');
    function t11(event) {
        let k = event.key;
        console.log(k);
        if (k === "Meta") {
            k = 'Win';
        };
        if (k.length == 1) k = k.toUpperCase();
        if (symbol[k] !== undefined) k = symbol[k];
        myKeyboard.forEach(item => item.classList.remove('active'));
        let singleKey = document.querySelector(`.k-key[data="${k}"]`);
        console.log(singleKey);
        if (singleKey) singleKey.classList.add('active');
    }
    function t12(event) {
        if (event.key === 'Alt' || event.key === 'Tab' || event.key === 'Enter') return false;
    }
    inp.onkeydown = t11;
    inp.onkeyup = t12;

}());