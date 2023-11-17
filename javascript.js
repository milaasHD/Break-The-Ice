addEventListener("DOMContentLoaded", function (){

    function addClassOnScroll() {
        const element = document.getElementById('appear');
        const scrollPosition = window.scrollY || window.pageYOffset;
        const targetPosition = 100; // Change this to the position where you want the class to be added

        if (scrollPosition >= targetPosition) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    }

    addEventListener("scroll", addClassOnScroll)


    function ClassicMode(){
        console.log("Scroll")
    }
    addEventListener("scroll", ClassicMode)



    document.getElementById('scroll').addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.parentElement.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'}); });
})

