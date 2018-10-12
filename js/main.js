// jump.js 
// jump.js build using npm package 'lio' and embedded via <script> tags. module available via jumpJS function.
const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    $('.responsive-menu').removeClass('is-responsive-menu-toggled');
    jumpJs(`.section-${e.target.dataset.target}`)
  })
})

// lectures section component.
let activeLecture = $('#lecture-1');
const lectures = $('.lecture-single')

lectures.each((id, lecture) => $(lecture).on('click', changeFocusedLecture));

function changeFocusedLecture(e) {
  const clickedLecture = $(`#lecture-${e.target.id}`);
  // prevent key mashing.
  if (activeLecture.is(':animated')) return;
  if(!clickedLecture.is(activeLecture)) {
    // add class to show which lecture is selected.
    lectures.each((id, lecture) => $(lecture).removeClass('is-lecture-selected'));
    $(e.target).addClass('is-lecture-selected');
    // animation part.
    activeLecture.fadeOut("slow",() => {
      clickedLecture.fadeIn("slow").css({'display':'flex'});
      activeLecture=clickedLecture;
    });
  }
}

// responsive menu.
function toggleResponsiveMenu() {
  $('body').toggleClass('is-responsive-menu-opened-body');
  $('.full-website').toggleClass('is-responsive-menu-opened');
  $('.responsive-menu').toggleClass('is-responsive-menu-toggled');
}

// particles.js
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
