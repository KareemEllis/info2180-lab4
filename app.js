window.addEventListener("load", () => {

    const input = document.querySelector("input")
    const form = document.querySelector("form")
    const result = document.querySelector("#result")

    
    form.addEventListener('submit', (e) => {
        //Prevent form submission
        e.preventDefault()

        let userInput = input.value.trim()
        let url = `superheroes.php?name=${userInput}`

        fetch(url)
        .then(response => {
            if(response.ok){return response.text()}
            else{return Promise.reject('something went wrong!')}
        })
        .then(data => {
            result.innerHTML = data
        })
        .catch(error => console.log("ERROR HAS OCCURRED: " + error))
    })

})