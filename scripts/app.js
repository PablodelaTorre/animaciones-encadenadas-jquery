$('#botonAnimaciones').click(() => {
    $("#pelota")
    .fadeIn(3000)
    .animate(
        {
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 3000)
    .fadeIn(2000)
    .animate(
        {   
            opacity: 1,
            height: 200
        },3000)
    .fadeOut(5000)        
})