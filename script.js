(function(){
  const box=document.querySelector('.timer');
  if(!box) return;
  let total=(parseInt(box.dataset.minutes||'15',10))*60;
  const spans=box.querySelectorAll('span');
  const tick=()=>{const m=Math.floor(total/60),s=total%60;spans[0].textContent=String(m).padStart(2,'0');spans[1].textContent=String(s).padStart(2,'0');if(total>0)total--;};
  tick(); setInterval(tick,1000);
})();

(function(){
  const cards=document.querySelectorAll('.reveal-card,.lesson,.bonus-grid article');
  if(!('IntersectionObserver' in window)){cards.forEach(el=>el.classList.add('show'));return;}
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}});
  },{threshold:.12});
  cards.forEach(el=>io.observe(el));
})();

(function(){
  const toast = document.getElementById('purchaseToast');
  if(!toast) return;
  const nomes = ['Fernanda', 'Juliana', 'Patrícia', 'Camila', 'Amanda', 'Larissa', 'Bianca', 'Renata', 'Mariana'];
  const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador', 'Recife', 'Brasília', 'Porto Alegre'];
  let i = 0;
  function showToast(){
    const nome = nomes[i % nomes.length];
    const cidade = cidades[(i * 2) % cidades.length];
    toast.innerHTML = `<div class="purchase-toast-card"><div class="purchase-toast-icon">✓</div><div><strong>${nome} acabou de garantir acesso</strong><span>${cidade} • Plano Premium</span><small>Acesso liberado agora</small></div></div>`;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden','false');
    setTimeout(()=>{
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden','true');
    }, 5200);
    i++;
  }
  setTimeout(showToast, 3500);
  setInterval(showToast, 14000);
})();
