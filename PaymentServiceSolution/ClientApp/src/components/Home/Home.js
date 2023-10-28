import "./home.css"

export const Home = () => {

    
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  return (
    <div className="home">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2020/03/Lord-of-the-rings-books.jpg"/>
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="https://nationaltoday.com/wp-content/uploads/2022/02/Harry-Potter-Book-Night-1200x834.jpg"/>
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="https://prh.imgix.net/articles/percy-jackson-universe.png"/>
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onClick={plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <br />

        <div className="div">
          <span className="dot" onClick={currentSlide(1)}></span>
          <span className="dot" onClick={currentSlide(2)}></span>
          <span className="dot" onClick={currentSlide(3)}></span>
        </div>
      </div> 
  );
};
