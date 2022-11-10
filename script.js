const botaoMode = document.querySelector('#moon-icon');
const form = document.querySelector('.login-form');
const githubLight = document.querySelector('.github-light');
const githubDark = document.querySelector('.github-dark');

botaoMode.addEventListener('click', () => {
  if (botaoMode.classList.contains('fa-moon')) {
    botaoMode.classList.remove('fa-moon');
    botaoMode.classList.add('fa-sun');

    form.classList.add('dark');

    githubLight.style.display = 'none';
    githubDark.style.display = 'inline-block';

    return;
  } else {
    botaoMode.classList.remove('fa-sun');
    botaoMode.classList.add('fa-moon');

    githubDark.style.display = 'none';
    githubLight.style.display = 'inline-block';

    form.classList.remove('dark');
  }
});