document.getElementById("factGenerate").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("factList").value;
    if(value === "")
        return;
    document.getElementById("factList").innerHTML = "Loading...";
    const url = "https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts";
    console.log(url);
    fetch(url, {mode:'cors'})
        .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        var factNumber = Math.floor(Math.random() * json.all.length);
        console.log(factNumber);
        document.getElementById("factList").innerHTML = json.all[factNumber].text;
    });
});

document.getElementById("factBomb").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("factList").value;
    if(value === "")
        return;
    document.getElementById("factList").innerHTML = "I hope you're ready for this...";
    const url = "https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts";
    console.log(url);
    fetch(url, {mode:'cors'})
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            var result = "";
            for (let i = 0; i < 10; i++) {
                result += "<p>"
                var factNumber = Math.floor(Math.random() * json.all.length);
                console.log(factNumber);
                result += json.all[factNumber].text;
                result += "</p>"
            }
            document.getElementById("factList").innerHTML = result;
        });
});