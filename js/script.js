function genPass(len = 15) {
    const rating = document.getElementById("rating");
    const randPass = document.getElementById("pwd");
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$";
    const possibleLength = possible.length;
    let text = "";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possibleLength));
    }

    randPass.textContent = text;

    if (len < 15) {
        rating.textContent = "Weak";
    }
    else if (len < 40) {
        rating.textContent = "Strong";
    }
    else {
        rating.textContent = "Extra Strong";
    }

    return true;
}

function copy() {
    const range = document.createRange();
    range.selectNode(document.getElementById("pwd"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");

    alert('Copy to Clipboard Success!');
}

function changeLength() {
    const slider = document.getElementById("pwdRange");
    const output = document.getElementById("lengthVal");
    output.textContent = slider.value;

    slider.oninput = function () {
        output.textContent = this.value;
        genPass(this.value);
    }

    genPass(slider.value);
}
