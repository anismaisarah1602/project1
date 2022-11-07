function buttonClicked(){

    var city = document.getElementById("city_input").value
    var name = document.getElementById("name_input").value


    fetch(`http://universities.hipolabs.com/search?name=${name}&country=${city}`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data); //output the API into consol

        for(var i =0; i<5;i++){
        var newLi = document.createElement("li");
        // get the object in array
        var currentContact = data[i];
        // assign the property into newLi
        newLi.innerHTML = `Name of university:${currentContact.name} <br>Web pages of university:${currentContact.web_pages}<br>`;
        // end to ul
        document.getElementById("list").appendChild(newLi);
        }
        })
    

}


