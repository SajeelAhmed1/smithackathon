
let register = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phoneno = document.getElementById("phoneno");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let users = {
                username: username.value,
                email: email.value,
                password: password.value,
                phoneno: phoneno.value,
                country: country.value,
                city: city.value
            }

            firebase.database().ref(`users/${res.user.uid}`).set(users)
                .then(() => {
                    alert("Registration is Done")
                    window.location = "login.html"
                })

        })
        .catch((err) => {
            console.log("err=>", err)
        })
}


let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`users/${res.user.uid}`).once('value', (data) => {
                console.log(data.val())
                window.location = "afterlogin.html"
            })
        })
        .catch((err) => {
            console.log('err=>', err)
        })

}



// let abc = new Promise(() => {

// })


// abc
//     .then(() => {

//     })
//     .catch(() => {

//     })