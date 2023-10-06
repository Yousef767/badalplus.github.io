let aboutLinks = document.getElementById('aboutLinks');
let about = document.getElementById('about');
about.addEventListener('click',()=>{
  aboutLinks.classList.toggle('activeAbout');
  about.classList.toggle('active');
  projectsLinks.classList.remove('activeAbout');
  projects.classList.remove('active');
})

let projectsLinks = document.getElementById('projectsLinks');
let projects = document.getElementById('projects');
projects.addEventListener('click',()=>{
  projectsLinks.classList.toggle('activeAbout');
  projects.classList.toggle('active');
  aboutLinks.classList.remove('activeAbout');
  about.classList.remove('active');
})


let menuBtn = document.getElementById('menu');
let closeBtn = document.getElementById('close');
let links = document.querySelector('.links');

menuBtn.addEventListener('click',()=>{
  links.classList.add('showLinks');
})
closeBtn.addEventListener('click',()=>{
  links.classList.remove('showLinks');
})

