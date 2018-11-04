// jump.js 
// jump.js build using npm package 'lio' and embedded via <script> tags. module available via jumpJS function.
import jump from 'jump.js'

const links = document.querySelectorAll('.js-link');
links.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e) {
  const clickedDataTarget = e.currentTarget.dataset.target;
  jump(`.section-${clickedDataTarget}`);
};

// lectures section component.
let activeLecture = $('#lecture-1');
const lectures = $('.lecture-single')

$('.lecture-list').on('click', changeFocusedLecture)

function changeFocusedLecture(e) {
  if ($(e.target).hasClass('lecture-single')) {
    const clickedLecture = $(`#lecture-${e.target.id}`);
    // prevent key mashing.
    if (activeLecture.is(':animated')) return;
    if(!clickedLecture.is(activeLecture)) {
      // add class to show which lecture is selected.
      lectures.each((id, lecture) => $(lecture).removeClass('is-lecture-selected'));
      activeLecture.removeClass('is-lecture-selected');
      $(e.target).addClass('is-lecture-selected');
      // animation part.
      activeLecture.fadeOut("slow", function() {
        clickedLecture.fadeIn("slow").css({'display':'flex'});
        activeLecture=clickedLecture;
      });
    }
  }
}

// particles.js
particlesJS.load('particles-js', 'js/particles.json');

// hamburger menu.
$('.menu-hamburger').on('click', openResponsiveMenu);

function openResponsiveMenu() {
  $('.overlay').fadeIn(300);
  $('.menu-hamburger').addClass('is-menu-hamburger-clicked');
  $('.responsive-menu').addClass('is-responsive-menu-toggled');
}

$('.overlay, .js-link').on('click', closeResponsiveMenu)

function closeResponsiveMenu() {
  $('.overlay').fadeOut(300);
  $('.menu-hamburger').removeClass('is-menu-hamburger-clicked');
  $('.responsive-menu').removeClass('is-responsive-menu-toggled');
}

