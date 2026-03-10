

  // ── LOADER
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 1800);
  });

  // ── CURSOR
  const cur = document.getElementById('cursor');
  const trail = document.getElementById('trail');
  let tx = -100, ty = -100;

  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';
    setTimeout(() => {
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
    }, 60);
  });

  document.querySelectorAll('a,button,.pizza-card,.special-item,.review-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.classList.add('big'); trail.classList.add('big'); });
    el.addEventListener('mouseleave', () => { cur.classList.remove('big'); trail.classList.remove('big'); });
  });

  // ── HERO PIZZA hover
  const heroPizza = document.getElementById('heroPizza');
  heroPizza.addEventListener('mouseenter', () => {
    heroPizza.style.transform = 'scale(1.2) rotate(15deg)';
    heroPizza.style.filter = 'drop-shadow(0 30px 80px rgba(244,96,12,.9))';
  });
  heroPizza.addEventListener('mouseleave', () => {
    heroPizza.style.transform = '';
    heroPizza.style.filter = '';
  });

  // ── SPARKS
  const sparksEl = document.getElementById('sparks');
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    const angle = Math.random() * 360;
    const dist = 60 + Math.random() * 100;
    const dx = Math.cos(angle * Math.PI / 180) * dist + 'px';
    const dy = -(50 + Math.random() * 100) + 'px';
    s.style.cssText = `
      left: ${40 + Math.random()*20}%;
      top: ${40 + Math.random()*20}%;
      --dx: ${dx};
      --dy: ${dy};
      animation-duration: ${.6 + Math.random() * 1.4}s;
      animation-delay: ${Math.random() * 2}s;
      width: ${2 + Math.random()*4}px;
      height: ${2 + Math.random()*4}px;
      background: ${Math.random() > .5 ? '#FFD700' : '#F4600C'};
    `;
    sparksEl.appendChild(s);
  }

  // ── SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // ── ADD button pop
  document.querySelectorAll('.card-add').forEach(btn => {
    btn.addEventListener('click', function() {
      this.textContent = '✓';
      this.style.background = '#2D5A1B';
      setTimeout(() => { this.textContent = '+'; this.style.background = ''; }, 1200);
    });
  });

  // ── Parallax on hero
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelector('.hero-left').style.transform = `translateY(${y * 0.15}px)`;
    document.querySelector('.hero-right').style.transform = `translateY(${y * 0.08}px)`;
  });
