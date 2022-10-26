// IIFE -- Immediately Invoked Function



// assignment1 Song Malisa Se, 301233051, 26/10/2022
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=> {
                if(!confirm("Are you sure you want to delete?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            })
        }
    }

    window.addEventListener("load", Start);

})();