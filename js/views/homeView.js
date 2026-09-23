export function renderHome() {
  const faq = [
    ['Como surgiu o HACD-Hub?', 'O HACD-Hub nasceu de um projeto entre amigos que perceberam o crescimento do aprendizado digital e a importância de tornar esse caminho mais próximo, humano e colaborativo.'],
    ['O que posso encontrar por aqui?', 'Você encontra artigos publicados por professores, trilhas para explorar diferentes áreas e pessoas dispostas a compartilhar conhecimento por meio de mentorias.'],
    ['Como funciona para o aluno?', 'Depois do cadastro, o aluno informa sua área de interesse e passa a ver conteúdos e professores relacionados ao tema.'],
    ['Como funciona para o professor?', 'O professor escolhe sua especialidade, publica artigos e visualiza alunos que demonstraram interesse na mesma área.'],
    ['Preciso pagar para participar?', 'O cadastro na plataforma é gratuito. O HACD-Hub foi pensado para aproximar pessoas e facilitar o primeiro passo de quem quer aprender ou ensinar.'],
  ];

  return `
    <section>

      <!-- HERO -->
      <div class="hero" style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        padding: 88px 0 80px;
        min-height: calc(100vh - 60px);
      ">
        <!-- Left: text -->
        <div>
          <h1 class="hero-title" style="
            font-size: clamp(36px, 5vw, 68px);
            font-weight: 510;
            line-height: 1.04;
            letter-spacing: -0.022em;
            color: var(--text-1);
            margin: 0 0 24px;
          "><span class="hero-word" style="animation-delay:0.05s">Aprenda</span> <span class="hero-word" style="animation-delay:0.20s">com</span> <span class="hero-word" style="animation-delay:0.38s">pessoas</span> <span class="hero-word" style="animation-delay:0.56s">da</span> <span class="hero-word" style="animation-delay:0.72s">sua</span> <span class="hero-word" style="animation-delay:0.88s">comunidade.</span></h1>

          <p class="anim-fade-up-2 hero-sub" style="
            max-width: 420px;
            font-size: 16px;
            line-height: 1.65;
            letter-spacing: -0.011em;
            color: var(--text-2);
            margin: 0 0 40px;
            font-weight: 400;
          ">O HACD-Hub aproxima alunos e professores numa experiência direta: encontre uma área, leia conteúdos, peça mentoria e avance com apoio real.</p>

          <div class="anim-fade-up-3 hero-actions" style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <button data-page="aluno"
              style="font-size:14px;font-weight:590;letter-spacing:-0.01em;color:#08090a;background:#f7f8f8;border:none;cursor:pointer;padding:9px 18px;border-radius:8px;transition:background 0.15s;"
              onmouseover="this.style.background='#fff'" onmouseout="this.style.background='#f7f8f8'">
              Explorar trilhas
            </button>
            <button data-page="cadastro" data-tipo="professor"
              style="font-size:14px;font-weight:500;letter-spacing:-0.01em;color:var(--text-2);background:transparent;border:1px solid var(--border-2);cursor:pointer;padding:9px 18px;border-radius:8px;transition:border-color 0.15s,color 0.15s;"
              onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--text-1)'" onmouseout="this.style.borderColor='var(--border-2)';this.style.color='var(--text-2)'">
              Quero ensinar
            </button>
          </div>
        </div>

        <!-- Right: Linear hero image -->
        <div class="anim-fade-in hero-art" style="display:flex;justify-content:center;align-items:center;position:relative;">
          <img
            src="images/linear-hero-1.webp"
            class="anim-float"
            alt=""
            style="
              width: 100%;
              max-width: 520px;
              border-radius: 20px;
              opacity: 0.7;
              mix-blend-mode: lighten;
              filter: contrast(1.05);
            "
          >
          <img
            src="images/linear-hero-2.webp"
            class="hero-art-2"
            alt=""
            style="
              position: absolute;
              width: 80%;
              max-width: 400px;
              border-radius: 16px;
              opacity: 0.4;
              mix-blend-mode: screen;
              bottom: -20px;
              right: -10px;
            "
          >
        </div>
      </div>

      <!-- FIGURES -->
      <div class="figs-section" style="padding:0 0 80px;">
        <div class="figs" style="display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--border);border-radius:16px;overflow:hidden;">

          <!-- FIG 0.2 – cube cluster -->
          <div class="iso-fig" style="padding:48px 40px;border-right:1px solid var(--border);cursor:crosshair;display:flex;flex-direction:column;">
            <p style="margin:0 0 32px;font-size:11px;color:var(--text-3);letter-spacing:0.06em;font-family:ui-monospace,monospace;">FIG 0.2</p>
            <div class="iso-scene" style="display:flex;justify-content:center;will-change:transform;">
              <svg viewBox="90 110 265 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;">
                <!-- back to front render order -->
                <polygon points="160,173 205,196 160,219 115,196" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="115,196 160,219 160,275 115,252" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="160,219 205,196 205,252 160,275" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="250,173 295,196 250,219 205,196" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="205,196 250,219 250,275 205,252" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="250,219 295,196 295,252 250,275" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="205,150 250,173 205,196 160,173" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
                <polygon points="160,173 205,196 205,252 160,229" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
                <polygon points="205,196 250,173 250,229 205,252" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
                <polygon points="295,150 340,173 295,196 250,173" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
                <polygon points="250,173 295,196 295,252 250,229" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
                <polygon points="295,196 340,173 340,229 295,252" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>
                <!-- front cube, brightest -->
                <polygon points="250,127 295,150 250,173 205,150" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>
                <polygon points="205,150 250,173 250,229 205,206" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>
                <polygon points="250,173 295,150 295,206 250,229" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>
                <!-- accent dots -->
                <circle cx="232" cy="147" r="1.5" fill="rgba(255,255,255,0.6)"/>
                <circle cx="236" cy="145" r="1.5" fill="rgba(255,255,255,0.6)"/>
                <circle cx="232" cy="143" r="1.5" fill="rgba(255,255,255,0.6)"/>
                <circle cx="236" cy="141" r="1.5" fill="rgba(255,255,255,0.6)"/>
                <circle cx="145" cy="192" r="1.5" fill="rgba(255,255,255,0.4)"/>
                <circle cx="149" cy="190" r="1.5" fill="rgba(255,255,255,0.4)"/>
                <circle cx="145" cy="188" r="1.5" fill="rgba(255,255,255,0.4)"/>
                <circle cx="149" cy="186" r="1.5" fill="rgba(255,255,255,0.4)"/>
              </svg>
            </div>
            <p style="margin:auto 0 0;font-size:13px;color:var(--text-3);letter-spacing:-0.01em;line-height:1.5;text-align:center;">Blocos de conhecimento que se conectam entre si.</p>
          </div>

          <!-- FIG 0.3 – stacked panels -->
          <div class="iso-fig" style="padding:48px 40px;cursor:crosshair;display:flex;flex-direction:column;">
            <p style="margin:0 0 32px;font-size:11px;color:var(--text-3);letter-spacing:0.06em;font-family:ui-monospace,monospace;">FIG 0.3</p>
            <div class="iso-scene" style="display:flex;justify-content:center;will-change:transform;">
              <svg viewBox="130 25 285 285" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;">
                <!-- panels back to front (n=8 → n=0) -->
                <polygon points="320,164 375,191 375,76 320,49" fill="rgba(18,18,22,0.98)" stroke="rgba(255,255,255,0.12)" stroke-width="0.7"/>
                <polygon points="375,191 381,194 381,79 375,76" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.12)" stroke-width="0.7"/>
                <polygon points="320,49 375,76 381,79 326,52" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" stroke-width="0.7"/>
                <polygon points="300,176 355,203 355,88 300,61" fill="rgba(18,18,22,0.98)" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>
                <polygon points="355,203 361,206 361,91 355,88" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>
                <polygon points="300,61 355,88 361,91 306,64" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>
                <polygon points="280,188 335,215 335,100 280,73" fill="rgba(18,18,22,0.98)" stroke="rgba(255,255,255,0.15)" stroke-width="0.7"/>
                <polygon points="335,215 341,218 341,103 335,100" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.15)" stroke-width="0.7"/>
                <polygon points="280,73 335,100 341,103 286,76" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="0.7"/>
                <polygon points="260,200 315,227 315,112 260,85" fill="rgba(20,20,24,0.98)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="315,227 321,230 321,115 315,112" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="260,85 315,112 321,115 266,88" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>
                <polygon points="240,212 295,239 295,124 240,97" fill="rgba(20,20,24,0.98)" stroke="rgba(255,255,255,0.17)" stroke-width="0.8"/>
                <polygon points="295,239 301,242 301,127 295,124" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.17)" stroke-width="0.8"/>
                <polygon points="240,97 295,124 301,127 246,100" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.17)" stroke-width="0.8"/>
                <polygon points="220,224 275,251 275,136 220,109" fill="rgba(22,22,26,0.98)" stroke="rgba(255,255,255,0.19)" stroke-width="0.8"/>
                <polygon points="275,251 281,254 281,139 275,136" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.19)" stroke-width="0.8"/>
                <polygon points="220,109 275,136 281,139 226,112" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.19)" stroke-width="0.8"/>
                <polygon points="200,236 255,263 255,148 200,121" fill="rgba(24,24,28,0.98)" stroke="rgba(255,255,255,0.20)" stroke-width="0.8"/>
                <polygon points="255,263 261,266 261,151 255,148" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.20)" stroke-width="0.8"/>
                <polygon points="200,121 255,148 261,151 206,124" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.20)" stroke-width="0.8"/>
                <polygon points="180,248 235,275 235,160 180,133" fill="rgba(26,26,30,0.98)" stroke="rgba(255,255,255,0.22)" stroke-width="0.9"/>
                <polygon points="235,275 241,278 241,163 235,160" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.22)" stroke-width="0.9"/>
                <polygon points="180,133 235,160 241,163 186,136" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.22)" stroke-width="0.9"/>
                <!-- frontmost panel, brightest -->
                <polygon points="160,260 215,287 215,172 160,145" fill="rgba(30,30,36,0.98)" stroke="rgba(255,255,255,0.30)" stroke-width="1"/>
                <polygon points="215,287 221,290 221,175 215,172" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.30)" stroke-width="1"/>
                <polygon points="160,145 215,172 221,175 166,148" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.30)" stroke-width="1"/>
              </svg>
            </div>
            <p style="margin:auto 0 0;font-size:13px;color:var(--text-3);letter-spacing:-0.01em;line-height:1.5;text-align:center;">Camadas que se acumulam. Aprendizado que avança.</p>
          </div>

        </div>

        <!-- Text below figures -->
        <div class="figs-copy" style="padding:56px 0 0;max-width:560px;margin:0 auto;text-align:center;">
          <h2 style="font-size:clamp(22px,2.5vw,30px);font-weight:510;line-height:1.15;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 12px;">
            Conhecimento que cresce com a comunidade.
          </h2>
          <p style="font-size:15px;line-height:1.7;color:var(--text-3);letter-spacing:-0.011em;margin:0;">
            Cada conexão entre aluno e professor gera um ciclo: mais conteúdo, mais mentoria, mais crescimento coletivo.
          </p>
        </div>

        <script>
          (function() {
            document.querySelectorAll('.iso-fig').forEach(function(fig) {
              var scene = fig.querySelector('.iso-scene');
              fig.addEventListener('mousemove', function(e) {
                var rect = fig.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width - 0.5;
                var y = (e.clientY - rect.top) / rect.height - 0.5;
                scene.style.transition = 'transform 0.08s ease';
                scene.style.transform = 'perspective(900px) rotateX(' + (-y * 14) + 'deg) rotateY(' + (x * 14) + 'deg)';
              });
              fig.addEventListener('mouseleave', function() {
                scene.style.transition = 'transform 0.55s cubic-bezier(0.215,0.61,0.355,1)';
                scene.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
              });
            });
          })();
        </script>
      </div>

      <script>
        /* Stats scroll reveal */
        (function() {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 120);
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2 });
          document.querySelectorAll('.stat-item').forEach(el => observer.observe(el));
        })();
      </script>

      <!-- STATS -->
      <div class="stats-wrap" style="border-top: 1px solid var(--border); padding: 48px 0 64px;">
        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;">
          <div class="stat-item">
            <p style="font-size:clamp(28px,3.5vw,42px);font-weight:680;color:var(--text-1);line-height:1;letter-spacing:-0.022em;margin:0 0 8px;">14% ao ano</p>
            <p style="font-size:13px;color:var(--text-3);line-height:1.5;letter-spacing:-0.01em;margin:0;">Crescimento do e-learning global</p>
          </div>
          <div class="stat-item">
            <p style="font-size:clamp(28px,3.5vw,42px);font-weight:680;color:var(--text-1);line-height:1;letter-spacing:-0.022em;margin:0 0 8px;">Top 1</p>
            <p style="font-size:13px;color:var(--text-3);line-height:1.5;letter-spacing:-0.01em;margin:0;">Brasil, o maior mercado de educação digital da América Latina</p>
          </div>
          <div class="stat-item">
            <p style="font-size:clamp(28px,3.5vw,42px);font-weight:680;color:var(--text-1);line-height:1;letter-spacing:-0.022em;margin:0 0 8px;">+70%</p>
            <p style="font-size:13px;color:var(--text-3);line-height:1.5;letter-spacing:-0.01em;margin:0;">Dos brasileiros buscam novas habilidades online</p>
          </div>
        </div>
      </div>

      <!-- ABOUT -->
      <section class="about-section" style="border-top: 1px solid var(--border); padding: 64px 0;">
        <div style="max-width: 600px;">
          <h2 style="font-size:clamp(26px,3vw,38px);font-weight:510;line-height:1.1;letter-spacing:-0.022em;color:var(--text-1);margin:0 0 20px;">
            Construindo o ponto de encontro para o futuro da educação digital.
          </h2>
          <p style="font-size:15px;line-height:1.7;color:var(--text-2);letter-spacing:-0.011em;margin:0 0 14px;">
            O HACD-Hub nasceu com um propósito claro: democratizar o acesso ao conhecimento e criar um ecossistema colaborativo. Nossa plataforma constrói pontes entre mentes curiosas que desejam aprender e especialistas que têm paixão por ensinar.
          </p>
          <p style="font-size:15px;line-height:1.7;color:var(--text-3);letter-spacing:-0.011em;margin:0;">
            Acreditamos que a verdadeira inovação acontece em comunidade. Estamos dando nossos primeiros passos para construir um ambiente seguro, prático e transformador, onde cada conexão gera um novo impacto.
          </p>
        </div>
      </section>

      <!-- CTA SPLIT -->
      <div class="cta-split" style="border-top: 1px solid var(--border); padding: 72px 0; display: grid; grid-template-columns: 1fr 1fr;">
        <div class="cta-col-1" style="padding-right: 56px; border-right: 1px solid var(--border);">
          <p style="margin:0 0 20px;font-size:11px;color:var(--text-3);letter-spacing:0.06em;font-family:ui-monospace,monospace;">Para alunos</p>
          <h2 style="font-size:clamp(20px,2.2vw,26px);font-weight:510;letter-spacing:-0.02em;line-height:1.15;color:var(--text-1);margin:0 0 14px;">Aprenda com quem já percorreu o caminho.</h2>
          <p style="font-size:14px;color:var(--text-3);line-height:1.65;letter-spacing:-0.01em;margin:0 0 32px;">Encontre professores, leia artigos e peça mentoria na área que você quer dominar.</p>
          <button data-page="cadastro" data-tipo="aluno"
            style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:510;letter-spacing:-0.01em;color:var(--text-1);background:none;border:none;cursor:pointer;padding:0;transition:color 0.15s;"
            onmouseover="this.style.color='var(--text-2)'" onmouseout="this.style.color='var(--text-1)'">
            Começar a aprender
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="cta-col-2" style="padding-left: 56px;">
          <p style="margin:0 0 20px;font-size:11px;color:var(--text-3);letter-spacing:0.06em;font-family:ui-monospace,monospace;">Para professores</p>
          <h2 style="font-size:clamp(20px,2.2vw,26px);font-weight:510;letter-spacing:-0.02em;line-height:1.15;color:var(--text-1);margin:0 0 14px;">Compartilhe o que você sabe.</h2>
          <p style="font-size:14px;color:var(--text-3);line-height:1.65;letter-spacing:-0.01em;margin:0 0 32px;">Publique artigos, defina sua especialidade e conecte-se com alunos motivados.</p>
          <button data-page="cadastro" data-tipo="professor"
            style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:510;letter-spacing:-0.01em;color:var(--text-1);background:none;border:none;cursor:pointer;padding:0;transition:color 0.15s;"
            onmouseover="this.style.color='var(--text-2)'" onmouseout="this.style.color='var(--text-1)'">
            Começar a ensinar
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <!-- FAQ -->
      <section class="faq-section" style="border-top: 1px solid var(--border); padding: 64px 0 80px;">
        <div class="faq-grid" style="display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start;">
          <div class="faq-aside" style="position: sticky; top: 80px;">
            <h2 style="font-size:clamp(24px,2.8vw,34px);font-weight:510;line-height:1.1;letter-spacing:-0.022em;color:var(--text-1);margin:0 0 14px;">
              Tudo começa com uma boa pergunta.
            </h2>
            <p style="font-size:14px;line-height:1.6;color:var(--text-3);letter-spacing:-0.01em;margin:0;">
              Conheça a ideia por trás do HACD-Hub e veja como alunos e professores constroem jornadas de aprendizado juntos.
            </p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            ${faq.map(([q, a], i) => `
              <details ${i === 0 ? 'open' : ''}
                style="border: 1px solid var(--border); border-radius: 10px; background: var(--bg-2); overflow: hidden; transition: border-color 0.15s;"
                onmouseover="this.style.borderColor='var(--border-2)'" onmouseout="this.style.borderColor='var(--border)'">
                <summary class="faq-summary" style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 16px;
                  padding: 16px 20px;
                  font-size: 14px;
                  font-weight: 510;
                  color: var(--text-1);
                  letter-spacing: -0.015em;
                  cursor: pointer;
                  user-select: none;
                ">
                  ${q}
                  <span style="
                    width: 22px;
                    height: 22px;
                    border: 1px solid var(--border-2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    font-weight: 300;
                    color: var(--text-3);
                    flex-shrink: 0;
                    transition: transform 0.2s;
                  " class="faq-icon">+</span>
                </summary>
                <p style="
                  margin: 0;
                  padding: 0 20px 16px;
                  font-size: 13px;
                  line-height: 1.65;
                  color: var(--text-3);
                  letter-spacing: -0.01em;
                  border-top: 1px solid var(--border);
                  padding-top: 14px;
                ">${a}</p>
              </details>
            `).join('')}
          </div>
        </div>
      </section>

    </section>
  `;
}
