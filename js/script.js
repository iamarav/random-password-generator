function genPass(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    var randPass = document.getElementById('pwd').innerHTML = text;

    if(length<15){
        rating.innerHTML = "Weak";
    }
    else if(length<40){
        rating.innerHTML = "Strong";
    }
    else{
        rating.innerHTML = "Extra Strong";    
    }
    
    return true;
}

function copy(){

var copyText = document.getElementById('pwd').innerHTML;
//  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText);
    console.log(document.getElementById('pwd').innerHTML);
}

function changeLength(){
    var slider = document.getElementById("pwdRange");
    var output = document.getElementById("lengthVal");
    var rating = document.getElementById("rating");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    
}
    
    genPass(slider.value);
}

