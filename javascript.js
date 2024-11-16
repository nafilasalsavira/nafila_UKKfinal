document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('Click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('herf')).scrolIntoView({
            behavior:'smooth'
        })
    })
})