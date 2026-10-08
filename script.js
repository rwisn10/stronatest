const PAGES=[['index.html','Start'],['o-mnie.html','O mnie'],['program.html','Program'],['artykuly.html','Artykuły'],['aktualnosci.html','Aktualności'],['kontakt.html','Kontakt']];
let cur=location.pathname.split('/').pop()||'index.html';if(cur==='artykul.html')cur='artykuly.html';
const crest='<img src="logo.png" alt="Herb" width="34" height="40">';
document.querySelector('#nav').outerHTML=`<nav class="nav" id="nav"><div class="wrap"><a class="brand" href="index.html">${crest}<span>Mateusz Talar</span></a><button class="burger" aria-label="Menu">☰</button><ul class="menu">${PAGES.map(([h,t])=>`<li><a href="${h}" class="${h===cur?'on':''}${h==='kontakt.html'?' cta-s':''}">${t}</a></li>`).join('')}</ul></div></nav>`;
document.querySelector('#foot').outerHTML=`<footer><div class="wrap"><div class="cols"><div><h4>Mateusz Talar — Komitet Wyborczy</h4><p>Kandydat niezależny, powiat łęczyński. Praca, rodzina, bezpieczeństwo.</p><a class="support" href="https://pis.org.pl/" target="_blank" rel="noopener" title="Prawo i Sprawiedliwość"><span>Popierany przez:</span><img src="pis-logo.png" alt="Prawo i Sprawiedliwość"></a></div><div><h4>Strony</h4>${PAGES.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div><div><h4>Kontakt</h4><a href="mailto:sztab@example.com">sztab@example.com</a><a href="kontakt.html">Dołącz do sztabu</a></div></div><div class="fine">Strona fikcyjna, przygotowana jako przykład. Postaci, cytaty i wydarzenia są wymyślone.</div></div></footer>`;
const nav=document.getElementById('nav');addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10));
nav.querySelector('.burger').onclick=()=>nav.querySelector('.menu').classList.toggle('open');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const t=+e.target.dataset.to;let n=0;const s=t/40;const i=setInterval(()=>{n+=s;if(n>=t){n=t;clearInterval(i)}e.target.textContent=Math.round(n)},30)}));
document.querySelectorAll('[data-to]').forEach(el=>co.observe(el));
const fb=document.querySelectorAll('.filters button');
fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.classList.remove('on'));b.classList.add('on');document.querySelectorAll('[data-cat]').forEach(c=>c.style.display=(b.dataset.f==='all'||c.dataset.cat===b.dataset.f)?'':'none')});

const bar=document.createElement('div');bar.id='prog';document.body.prepend(bar);
addEventListener('scroll',()=>{bar.style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%'});
document.addEventListener('mousemove',e=>{document.querySelectorAll('.card,.stat').forEach(c=>{const r=c.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});const h=document.querySelector('.hero');if(h){h.style.setProperty('--px',((e.clientX/innerWidth-.5)*50)+'px');h.style.setProperty('--py',((e.clientY/innerHeight-.5)*50)+'px')}});
