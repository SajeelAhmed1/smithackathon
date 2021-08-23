
let register = () => {
    let restname = document.getElementById("restname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let rests = {
                restname: restname.value,
                email: email.value,
                password: password.value,
                country: country.value,
                city: city.value
            }

            firebase.database().ref(`rest/${res.user.uid}`).set(rests)
                .then(() => {
                    alert("Registration is Done")
                    window.location = "loginrest.html"
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
                window.location = "pan.html"
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