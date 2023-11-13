function verify() {
    var age;

    age = document.getElementById("age").value;
    if (age === "") {
        alert("Please enter your age.");
        return;
    } else if (age >= 65) {
        output = "Free Friday Coffee Night for Seniors!"
        document.getElementById('verify').style.color = 'maroon';
        document.getElementById('verify').style.fontVariantCaps = 'small-caps';
    } else {
        output = "No current offers for your age. Please enjoy the music and make some memories!"
        document.getElementById('verify').style.color = 'maroon';
    }

    document.getElementById("verify").textContent = output;
    return output;
}