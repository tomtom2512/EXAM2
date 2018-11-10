var REGISTER_API = ' https://2-dot-backup-server-002.appspot.com/_api/v2/members' ;
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFullName = document.forms['register-form']['fullName'];
        var txtEmail = document.forms['register-form']['email'];
        var txtPhone = document.forms['register-form']['phone'];
        var selectGender = document.forms['register-form']['gender'];
        var selectHobbies = document.forms['register-form']['hobby'];
        var txtIntro = document.forms['register-form']['intro'];


        if (txtFullName != null)  {
            var fullName = txtFullName.value;
            var phone = txtPhone.value;
            var gender = selectGender.value;
            var email = txtEmail.value;
            var hobbies = selectHobbies.value;
            var intro = txtIntro.value;
            var jsMember = {
                fullName: fullName,
                phone: phone,
                gender: gender,
                email: email,
                hobbies: hobbies,
                intro: intro,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            alert(member.id + '-' + member.fullName);
        }
    }
    xmlHttpRequest.open('POST', REGISTER_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonData);
}
