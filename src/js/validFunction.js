function ValidateEmail(inputText, showmessage) {
    const value = inputText.val();
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(mailformat)) {
        showmessage.html("")
        return true;
    }
    else {

        showmessage.html("ایمیل وارد شده صحیح نیست! ")
        inputText.focus();
        inputText.select()
        return false;
    }
}

function IsIranPhone(phone, showmessage) {
const value = phone.val();
    var phoneno = /^(\+98|0)?9\d{9}$/;
    if ((value.match(phoneno))) {
        showmessage.html("")
        return true;

    } else {
        showmessage.html("ایمیل وارد شده صحیح نیست! ")
        phone.focus();
        phone.select()

    }
}
//toggle input password part 
function togglePassword(showpassword) {
    showpassword.addEventListener('click', function () {
        let state = inputpassword.getAttribute('type');
        if (state == 'password')
            inputpassword.setAttribute('type', 'text')
        else
            inputpassword.setAttribute('type', 'password')
    })
}