
document.getElementById("lik1").addEventListener("click", () => {
    document.getElementById("suhead").innerHTML = "SUIIT’s Vision";
    document.getElementById("cons").innerHTML =
      "To enlighten the young minds by giving patronage to the unsatisfied thirst for knowledge, to contribute to mankind through excellence <br> in scientific and technological education and research, to prove to be a valuable resource for industry and society alike and to remain a symbol of pride for all Indians.";
  });
  
  document.getElementById("lik2").addEventListener("click", () => {
    document.getElementById("suhead").innerHTML = "SUIIT’s Mission";
    document.getElementById("cons").innerHTML =
      "To inspire young minds to lead the world in the right direction by quality research in Information Technology and allied areas and to create a technically sound workforce that puts the nation in safer hands for a bright future.";
  });
  
  document.getElementById("lik3").addEventListener("click", () => {
    document.getElementById("suhead").innerHTML = "SUIIT’s History";
    document.getElementById("cons").innerHTML =
      "Sambalpur University Institute of Information Technology (SUIIT) has been awarded as “Best Emerging Technical Institute” of Odisha on the eve of Engineer’s Day on 15th Sept., 2013 by Ever Green Forum, a leading social organization of Odisha at Jayadev Bhavan, Bhubaneswar. Prof. Shashank Sekhar Pujari, Director, SUIIT received the award at the function which was attended by leading Educationists & scientists of Odisha.";
  });




  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    let count = 0;

    function nextSlide() {
        count++;
        if (count >= slider.children.length) {
            count = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const transformValue = -count * 100 + '%';
        slider.style.transform = 'translateX(' + transformValue + ')';
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
});



function openLightbox(photoSrc) {
    document.getElementById('lightbox-content').src = photoSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}



// student life js


function viewMore(clubName) {
    document.getElementById('modal-heading').innerText = clubName;
    document.getElementById('modal-heading').style.color='#65B741';
    document.getElementById('modal').style.display = 'block';
    if (clubName === "INNOVATION CLUB") {
        document.getElementById("detailclub").innerHTML = "The Innovation and Robotics Club is a platform to engage students in innovative and creative activities while providing opportunities for hands-on training. The innovation club creates awareness, educates, nurtures, and teaches a culture of innovation amongst students, enabling them to generate new ideas and become more innovative." + " <a href='https://suiit.ac.in/clubs/'target='_blank' >Read more...</a>";
    } else if (clubName === "SPORTS CLUB") {
        document.getElementById('modal-heading').style.color='#EF4040';
        document.getElementById("detailclub").innerHTML = "To instil a passion of the game in the developing minds, to aid in the personality development of students and to psychologically and physically prepare students for difficulties in all facets of life, the Sports Club of SUIIT is committed to provide the appropriate platform. The Sports Club is dedicated to fostering among the students a positive sports habit." + " <a href='https://suiit.ac.in/clubs' target='_blank'>Read more...</a>";
    } else if (clubName === "LITERARY CLUB") {
        document.getElementById('modal-heading').style.color='#711DB0';
        document.getElementById("detailclub").innerHTML = "The Literary Club, an intellectual haven for bibliophiles and aspiring wordsmiths, embraces the alchemy of ideas and expressions, bestowing the elixir of sagacity. Exploring timeless classics and contemporary works, we unravel human thought and cultural intricacies through spirited debates. Here, language’s resplendent power converges with creative fervor, nurturing talents to become torchbearers of literature’s legacy, composing a harmonious symphony of diverse voices that resonate with the essence of the written word." + " <a href='https://suiit.ac.in/clubs' target='_blank'>Read more...</a>";
    } else if (clubName === "CULTURAL CLUB") {
        document.getElementById('modal-heading').style.color='#FB8B24';
        document.getElementById("detailclub").innerHTML = "The college’s cultural club emerges as a vibrant mosaic, weaving together the colorful threads of diversity that make up the fabric of its academic community. Like a captivating symphony, it orchestrates a harmonious dance of cultures, where each note represents a unique tradition, customs, and artistic expression. This kaleidoscopic canvas serves as a bridge, spanning the chasms between various backgrounds, and like a magnetic force, it draws students from all corners to gather under its inclusive canopy." + " <a href='https://suiit.ac.in/clubs' target='_blank'>Read more...</a>";
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// latest news section

document.addEventListener("DOMContentLoaded", function () {

    const carousels = document.querySelector(".carousel1");
    const prevBtns = document.getElementById("prevBtns");
    const nextBtns = document.getElementById("nextBtns");

    let currentIndex = 0;
    const totalItems1 = carousels.children.length;
    let autoSlideInterval;

    nextBtns.addEventListener("click", function () {
        showNextEvent();
        resetAutoSlide();
    });

    prevBtns.addEventListener("click", function () {
        showPrevEvent();
        resetAutoSlide();
    });

    function showNextEvent() {
        currentIndex = (currentIndex + 1) % totalItems1;
        updateCarousel();
    }

    function showPrevEvent() {
        currentIndex = (currentIndex - 1 + totalItems1) % totalItems1;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + "%";
        carousels.style.transition = "transform 0.5s ease-in-out";
        carousels.style.transform = "translateX(" + translateValue + ")";
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlide();
    }

    function autoSlide() {
        autoSlideInterval = setInterval(function () {
            showNextEvent();
        }, 4000); // Adjust the interval as needed (in milliseconds)
    }

    // Start auto-slide
    autoSlide();
});

function toggleReadMore() {
    var fullDescription = document.getElementById("fullDescription");
    var button = document.getElementById("bitu");
    
    if (fullDescription.style.display === "none" || fullDescription.style.display === "") {
        fullDescription.style.display = "block";
        button.textContent = "Read Less";
    } else {
        fullDescription.style.display = "none";
        button.textContent = "Read More";
    }
}
function toggleReadMore1() {
    var fullDescription1 = document.getElementById("fullDescription1");
    var button1 = document.getElementById("bitu1");
    if (fullDescription1.style.display === "none" || fullDescription.style.display === "") {
        fullDescription1.style.display = "block";
        button1.textContent = "Read Less";
    } else {
        fullDescription1.style.display = "none";
        button1.textContent = "Read More";
    }
}