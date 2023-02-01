const personalInfoBtn = document.querySelector('#personalInfoBtn');
const experienceBtn = document.querySelector('#experienceBtn');
const educationBtn = document.querySelector('#educationBtn');
const personalInfo = document.querySelector('#personalInfo');
const experience = document.querySelector('#experience');
const education = document.querySelector('#education');

personalInfoBtn.addEventListener('click', function() {
  personalInfo.style.display = 'block';
  experience.style.display = 'none';
  education.style.display = 'none';
});

experienceBtn.addEventListener('click', function() {
  personalInfo.style.display = 'none';
  experience.style.display = 'block';
  education.style.display = 'none';
});

educationBtn.addEventListener('click', function() {
  personalInfo.style.display = 'none';
  experience.style.display = 'none';
  education.style.display = 'block';
});
