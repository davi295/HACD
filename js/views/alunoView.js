const _card = `background:var(--bg-2);border:1px solid var(--border);border-radius:10px;padding:24px;transition:border-color 0.15s;`;
const _cardHover = `onmouseover="this.style.borderColor='var(--border-2)'" onmouseout="this.style.borderColor='var(--border)'"`;
const _btn = `display:inline-block;margin-top:20px;padding:8px 16px;background:var(--accent);border:none;border-radius:8px;font-size:13px;font-weight:510;color:#fff;cursor:pointer;letter-spacing:-0.01em;font-family:inherit;transition:background 0.15s;`;
const _btnHover = `onmouseover="this.style.background='var(--accent-h)'" onmouseout="this.style.background='var(--accent)'"`;
const _label = `font-size:11px;color:var(--text-3);letter-spacing:0.06em;font-family:ui-monospace,monospace;margin:0 0 8px;`;
const _input = `display:block;width:100%;margin-top:6px;background:var(--bg-3);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:14px;color:var(--text-1);font-family:inherit;outline:none;box-sizing:border-box;transition:border-color 0.15s;`;
const _inputFocus = `onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'"`;

function renderTagBadge(text) {
  return `<span style="display:inline-block;font-size:11px;font-weight:510;color:var(--text-3);letter-spacing:0.04em;font-family:ui-monospace,monospace;margin-bottom:12px;">${text}</span>`;
}

export function renderAluno(conteudos = [], mentores = [], usuario = null) {
  const header = usuario ? `
    <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:10px;padding:24px 28px;margin-bottom:40px;">
      <p style="${_label}">Painel do aluno</p>
      <h1 style="font-size:clamp(20px,2.5vw,26px);font-weight:510;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 4px;">Olá, ${usuario.nome}</h1>
      <p style="font-size:13px;color:var(--text-3);letter-spacing:-0.01em;margin:0;">Área ativa: ${usuario.interesse || 'Todas as áreas'}</p>
    </div>` : '';

  const conteudoCards = conteudos.length
    ? conteudos.map(item => `
      <article style="${_card}" ${_cardHover}>
        ${renderTagBadge(item.tipo || 'Artigo')}
        <h2 style="font-size:16px;font-weight:510;letter-spacing:-0.015em;color:var(--text-1);margin:0 0 6px;">${item.titulo}</h2>
        <p style="font-size:12px;color:var(--text-3);letter-spacing:-0.005em;margin:0;">Por ${item.autor || 'Professor HACD-Hub'} · ${item.area || ''}</p>
        <button data-page="conteudo" data-id="${item.id}" style="${_btn}" ${_btnHover}>Acessar</button>
      </article>`).join('')
    : `<p style="font-size:14px;color:var(--text-3);grid-column:1/-1;">Ainda não há conteúdos para esta área.</p>`;

  const mentorCards = mentores.length
    ? mentores.map(prof => `
      <article style="${_card}" ${_cardHover}>
        <div style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--border-2);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:680;color:var(--text-2);margin-bottom:14px;">${prof.nome.charAt(0)}</div>
        <h2 style="font-size:15px;font-weight:510;letter-spacing:-0.015em;color:var(--text-1);margin:0 0 4px;">${prof.nome}</h2>
        <p style="font-size:13px;color:var(--text-3);margin:0 0 2px;">${prof.especialidade}</p>
        <p style="font-size:12px;color:var(--text-3);margin:0;">Disponibilidade: ${prof.disponibilidade || 'A combinar'}</p>
        <button data-page="solicitar-mentoria" data-id="${prof.id}" data-email="${prof.email}" data-nome="${prof.nome}" data-especialidade="${prof.especialidade}" style="${_btn}" ${_btnHover}>Solicitar mentoria</button>
      </article>`).join('')
    : `<p style="font-size:14px;color:var(--text-3);grid-column:1/-1;">Nenhum mentor encontrado para este filtro.</p>`;

  return `
    <section class="panel-section" style="padding:40px 0 80px;">
      ${header}
      <div style="margin-bottom:48px;">
        <h2 style="font-size:18px;font-weight:510;letter-spacing:-0.018em;color:var(--text-1);margin:0 0 20px;">Conteúdos recomendados</h2>
        <div class="card-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">${conteudoCards}</div>
      </div>
      <div style="border-top:1px solid var(--border);padding-top:48px;">
        <h2 style="font-size:18px;font-weight:510;letter-spacing:-0.018em;color:var(--text-1);margin:0 0 20px;">Mentores disponíveis</h2>
        <div class="card-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">${mentorCards}</div>
      </div>
    </section>`;
}

export function renderProfessor(alunos = [], usuario = null, artigos = []) {
  const header = usuario ? `
    <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:10px;padding:24px 28px;margin-bottom:32px;">
      <p style="${_label}">Painel do professor</p>
      <h1 style="font-size:clamp(20px,2.5vw,26px);font-weight:510;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 4px;">Olá, ${usuario.nome}</h1>
      <p style="font-size:13px;color:var(--text-3);letter-spacing:-0.01em;margin:0;">Especialidade: ${usuario.especialidade || 'A definir'}</p>
    </div>` : '';

  const artigoCards = artigos.length
    ? artigos.map(item => `
      <article style="${_card}" ${_cardHover}>
        ${renderTagBadge(item.area || 'Artigo')}
        <h2 style="font-size:15px;font-weight:510;letter-spacing:-0.015em;color:var(--text-1);margin:0;">${item.titulo}</h2>
        <button data-page="conteudo" data-id="${item.id}" style="${_btn}" ${_btnHover}>Ver artigo</button>
      </article>`).join('')
    : `<p style="font-size:14px;color:var(--text-3);grid-column:1/-1;">Você ainda não publicou artigos.</p>`;

  const alunoCards = alunos.length
    ? alunos.map(aluno => `
      <article style="${_card}" ${_cardHover}>
        <div style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--border-2);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:680;color:var(--text-2);margin-bottom:14px;">${aluno.nome.charAt(0)}</div>
        <h2 style="font-size:15px;font-weight:510;letter-spacing:-0.015em;color:var(--text-1);margin:0 0 4px;">${aluno.nome}</h2>
        <p style="font-size:13px;color:var(--text-3);margin:0 0 2px;">Nível: ${aluno.nivel || 'A definir'}</p>
        <p style="font-size:13px;color:var(--text-3);margin:0;">Interesse: ${aluno.interesse}</p>
        <button data-page="oferecer-mentoria" data-id="${aluno.id}" data-email="${aluno.email}" data-nome="${aluno.nome}" data-interesse="${aluno.interesse}" style="${_btn}" ${_btnHover}>Oferecer mentoria</button>
      </article>`).join('')
    : `<p style="font-size:14px;color:var(--text-3);grid-column:1/-1;">Nenhum aluno encontrado para este filtro.</p>`;

  return `
    <section class="panel-section" style="padding:40px 0 80px;">
      ${header}
      <div style="margin-bottom:32px;">
        <button data-page="publicar-artigo" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:510;letter-spacing:-0.01em;color:var(--text-1);background:var(--bg-2);border:1px solid var(--border);cursor:pointer;padding:8px 16px;border-radius:8px;font-family:inherit;transition:border-color 0.15s;" onmouseover="this.style.borderColor='var(--border-2)'" onmouseout="this.style.borderColor='var(--border)'">
          + Escrever artigo
        </button>
      </div>
      <div style="margin-bottom:48px;">
        <h2 style="font-size:18px;font-weight:510;letter-spacing:-0.018em;color:var(--text-1);margin:0 0 20px;">Meus artigos</h2>
        <div class="card-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">${artigoCards}</div>
      </div>
      <div style="border-top:1px solid var(--border);padding-top:48px;">
        <h2 style="font-size:18px;font-weight:510;letter-spacing:-0.018em;color:var(--text-1);margin:0 0 20px;">Alunos aguardando mentoria</h2>
        <div class="card-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">${alunoCards}</div>
      </div>
    </section>`;
}

export function renderArtigo(id, conteudos = [], usuario = null) {
  const item = conteudos.find(c => String(c.id) === String(id));
  if (!item) return `<section style="padding:80px 0;color:var(--text-3);font-size:14px;">Conteúdo não encontrado.</section>`;
  const backPage = usuario?.tipo === 'professor' ? 'professor' : 'aluno';
  return `
    <article class="artigo-wrap" style="max-width:680px;margin:0 auto;padding:60px 0 80px;">
      <button data-page="${backPage}" style="display:inline-flex;align-items:center;gap:5px;font-size:13px;color:var(--text-3);background:none;border:none;cursor:pointer;padding:0;font-family:inherit;letter-spacing:-0.01em;margin-bottom:32px;transition:color 0.15s;" onmouseover="this.style.color='var(--text-1)'" onmouseout="this.style.color='var(--text-3)'">← Voltar</button>
      <span style="font-size:11px;color:var(--text-3);letter-spacing:0.06em;font-family:ui-monospace,monospace;">${item.area}</span>
      <h1 style="font-size:clamp(24px,3vw,36px);font-weight:510;letter-spacing:-0.022em;line-height:1.1;color:var(--text-1);margin:12px 0 8px;">${item.titulo}</h1>
      <p style="font-size:13px;color:var(--text-3);margin:0 0 36px;letter-spacing:-0.01em;">Por ${item.autor || 'Professor HACD-Hub'}</p>
      <div style="border-top:1px solid var(--border);padding-top:32px;display:flex;flex-direction:column;gap:18px;">
        ${(item.corpo || '').split('\n').map(p => `<p style="font-size:15px;line-height:1.75;color:var(--text-2);letter-spacing:-0.011em;margin:0;">${p}</p>`).join('')}
      </div>
    </article>`;
}

export function renderPublicarConteudo(usuario) {
  return `
    <div class="auth-wrap" style="display:flex;justify-content:center;padding:80px 0;">
      <section class="auth-card" style="max-width:540px;width:100%;background:var(--bg-2);border:1px solid var(--border);border-radius:12px;padding:40px;">
        <h1 style="font-size:20px;font-weight:510;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 6px;">Escrever artigo</h1>
        <p style="font-size:13px;color:var(--text-3);letter-spacing:-0.01em;margin:0 0 28px;">Compartilhe seu conhecimento com a comunidade.</p>
        <form id="form-conteudo" style="display:flex;flex-direction:column;gap:16px;">
          <label style="display:block;font-size:12px;font-weight:510;color:var(--text-3);letter-spacing:-0.005em;">Título<input id="titulo-conteudo" required placeholder="Título do artigo" style="${_input}" ${_inputFocus}></label>
          <label style="display:block;font-size:12px;font-weight:510;color:var(--text-3);letter-spacing:-0.005em;">Área<input id="area-conteudo" required value="${usuario?.especialidade || ''}" placeholder="Ex: Programação" style="${_input}" ${_inputFocus}></label>
          <label style="display:block;font-size:12px;font-weight:510;color:var(--text-3);letter-spacing:-0.005em;">Conteúdo<textarea id="corpo-conteudo" required rows="8" placeholder="Escreva seu artigo..." style="${_input}resize:vertical;" ${_inputFocus}></textarea></label>
          <button type="submit" style="margin-top:8px;padding:11px 0;background:var(--accent);border:none;border-radius:8px;font-size:14px;font-weight:510;color:#fff;cursor:pointer;letter-spacing:-0.01em;font-family:inherit;transition:background 0.15s;" onmouseover="this.style.background='var(--accent-h)'" onmouseout="this.style.background='var(--accent)'">Publicar artigo</button>
        </form>
      </section>
    </div>`;
}
