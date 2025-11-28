
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slides img").length;

    let index = 0;

    function changeSlide() {
        index++;
        if (index >= totalSlides) index = 0;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(changeSlide, 5000);

 
		const tombol = document.querySelector('.tombol');
		const menu = document.querySelector('.menu');
 
		tombol.addEventListener('click', () => {
			menu.classList.toggle('aktif');
		});


