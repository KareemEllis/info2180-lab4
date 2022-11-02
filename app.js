window,addEventListener("load", () => {
    const button = document.getElementById('btn')


    button.addEventListener('click', () => {
        //alert("CLICKED")

        fetch('superheroes.php')
            //Getting the response from the php files
            .then((response) => {
                if (response.ok) {
                    return response.text()
                }
                else{
                    return Promise.reject("Something went wrong!")
                }
            })
            //Getting the data from the response.text()
            .then((data) => {
                alert(data)
            })
            .catch((error) => console.log('Error has occured: ' + error))
    })

})