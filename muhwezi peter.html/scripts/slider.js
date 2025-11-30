class ImageSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        this.currentSlide = 0;
        
        this.init();
    }
    
    init() {
        this.showSlide(this.currentSlide);
        
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        // Auto-advance slides every 5 seconds
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[index].classList.add('active');
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageSlider();
});