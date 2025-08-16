// Theme handling
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light') root.classList.add('light');

  btn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

// Mobile nav toggle
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('show');
  });
})();

// Typewriter effect
(function(){
  const el = document.getElementById('typewriter');
  const phrases = ['simple websites.', 'small projects.', 'things people can use.'];
  let i = 0, j = 0, deleting = false;

  function tick(){
    const word = phrases[i];
    if(!deleting){
      el.textContent = word.slice(0, j++);
      if(j > word.length + 8){ deleting = true; }
    }else{
      el.textContent = word.slice(0, j--);
      if(j === 0){ deleting = false; i = (i + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 50 : 100);
  }
  tick();
})();

// Contact form (no backend): show a friendly message
(function(){
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    note.textContent = `Thanks, ${name}! I’ll reply soon at ${email}.`;
    form.reset();
  });
})();

// Year + back to top
(function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelector('.to-top').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
})();
