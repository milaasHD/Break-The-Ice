addEventListener("DOMContentLoaded", function (){

    function addClassOnScroll() {
        const element = document.getElementById('appear');
        const scrollPosition = window.scrollY || window.pageYOffset;
        const targetPosition = 600; // Change this to the position where you want the class to be added

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




    let modal = document.getElementById("myModal");
    let tutmodal = document.getElementById("myModal1")


    let classicalBtn = document.getElementById("butt");
    let spinBtn = document.getElementById("spin");


    let span = document.getElementsByClassName("close")[0];


    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden';

    }
    let initialChoice;

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }


    classicalBtn.onclick = function() {
        initialChoice = 'classical';
        content_first.style.display = "inline"

        showModal();
    };

    spinBtn.onclick = function() {
        initialChoice = 'spin';
        content_first.style.display = "inline"

        showModal();
    };
    span.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    document.addEventListener('mousemove', function(e) {
        let image = document.getElementById('image');

        // Get the position of the image
        const imageRect = image.getBoundingClientRect();

        // Calculate the center of the image
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        // Calculate the angle of rotation
        const angle = Math.atan2(e.clientY - imageCenterY, e.clientX - imageCenterX) * 180 / Math.PI;

        // Apply the rotation to the image
        image.style.transform = `rotate(${angle}deg)`;
    });
    let tutorialBtn = document.getElementById('tut');
    let playFurtherBtn = document.getElementById('continue')

    let continues = document.getElementById("conti")
    let content_first = document.getElementById("TutInput")
    let content_second = document.getElementById("TutContent")
    let modal_content = document.querySelector(".modal-content")

    tutorialBtn.addEventListener('click', function() {
        window.location.href = "tutorial.html"



    });
    continues.addEventListener('click', function (){
        if (initialChoice === 'classical') {
            window.location.href = "Classic.html"
        } else if (initialChoice === 'spin') {
            window.location.href = "Wheel.html"
        }
    })
    playFurtherBtn.addEventListener('click', function() {
        closeModal();
        if (initialChoice === 'classical') {
            window.location.href = "Classic.html"
        } else if (initialChoice === 'spin') {
            window.location.href = "Wheel.html"
        }
    });




})

