const _card = `max-width:440px;width:100%;background:var(--bg-2);border:1px solid var(--border);border-radius:12px;padding:40px;`;
const _label = `display:block;font-size:12px;font-weight:510;color:var(--text-3);letter-spacing:-0.005em;margin-bottom:6px;`;
const _input = `display:block;width:100%;background:var(--bg-3);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:14px;color:var(--text-1);font-family:inherit;outline:none;box-sizing:border-box;transition:border-color 0.15s;`;
const _inputFocus = `onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'"`;
const _btn = `width:100%;margin-top:24px;padding:11px 0;background:var(--accent);border:none;border-radius:8px;font-size:14px;font-weight:510;color:#fff;cursor:pointer;letter-spacing:-0.01em;font-family:inherit;transition:background 0.15s;`;
const _btnHover = `onmouseover="this.style.background='var(--accent-h)'" onmouseout="this.style.background='var(--accent)'"`;

export function renderCadastro(tipoPre = '', interessePre = '') {
  return `
    <div style="display:flex;justify-content:center;padding:80px 0;">
      <section style="${_card}">
        <h1 style="font-size:20px;font-weight:510;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 6px;">Crie sua conta</h1>
        <p style="font-size:13px;color:var(--text-3);letter-spacing:-0.01em;margin:0 0 28px;">Junte-se à comunidade HACD-Hub gratuitamente.</p>
        <form id="form-cadastro" style="display:flex;flex-direction:column;gap:16px;">
          <label style="${_label}">Nome<input id="nome" type="text" required placeholder="Seu nome" style="${_input}" ${_inputFocus}></label>
          <label style="${_label}">Email<input id="email" type="email" required placeholder="voce@email.com" style="${_input}" ${_inputFocus}></label>
          <label style="${_label}">Senha<input id="senha" type="password" required placeholder="Crie uma senha" style="${_input}" ${_inputFocus}></label>
          <label style="${_label}">Interesse ou especialidade<input id="interesse" type="text" required value="${interessePre}" placeholder="Programação, Design..." style="${_input}" ${_inputFocus}></label>
          <label style="${_label}">Tipo de usuário
            <select id="tipo-usuario" style="${_input}" ${_inputFocus}>
              <option value="aluno" ${tipoPre === 'aluno' ? 'selected' : ''}>Aluno</option>
              <option value="professor" ${tipoPre === 'professor' ? 'selected' : ''}>Professor</option>
            </select>
          </label>
          <button type="submit" style="${_btn}" ${_btnHover}>Criar conta</button>
        </form>
      </section>
    </div>`;
}

export function renderLogin() {
  return `
    <div style="display:flex;justify-content:center;padding:80px 0;">
      <section style="${_card}">
        <h1 style="font-size:20px;font-weight:510;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 6px;">Entrar</h1>
        <p style="font-size:13px;color:var(--text-3);letter-spacing:-0.01em;margin:0 0 28px;">Bem-vindo de volta ao HACD-Hub.</p>
        <form id="form-login" style="display:flex;flex-direction:column;gap:16px;">
          <label style="${_label}">Email<input id="login-email" type="email" required placeholder="voce@email.com" style="${_input}" ${_inputFocus}></label>
          <label style="${_label}">Senha<input id="senha" type="password" required placeholder="Sua senha" style="${_input}" ${_inputFocus}></label>
          <button type="submit" style="${_btn}" ${_btnHover}>Entrar na plataforma</button>
        </form>
        <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--border);padding-top:20px;">
          <button id="link-recuperar-senha" style="background:none;border:none;cursor:pointer;font-size:13px;color:var(--text-3);letter-spacing:-0.01em;font-family:inherit;text-align:left;padding:0;transition:color 0.15s;" onmouseover="this.style.color='var(--text-1)'" onmouseout="this.style.color='var(--text-3)'">Esqueci minha senha</button>
          <button id="link-cadastro" style="background:none;border:none;cursor:pointer;font-size:13px;color:var(--text-3);letter-spacing:-0.01em;font-family:inherit;text-align:left;padding:0;transition:color 0.15s;" onmouseover="this.style.color='var(--text-1)'" onmouseout="this.style.color='var(--text-3)'">Ainda não tem conta? Cadastre-se</button>
        </div>
      </section>
    </div>`;
}

export function renderRecuperarSenha() {
  return `
    <div style="display:flex;justify-content:center;padding:80px 0;">
      <section style="${_card}">
        <h1 style="font-size:20px;font-weight:510;letter-spacing:-0.02em;color:var(--text-1);margin:0 0 6px;">Recuperar senha</h1>
        <p style="font-size:13px;color:var(--text-3);letter-spacing:-0.01em;margin:0 0 28px;">Informe seu email e enviaremos as instruções de recuperação.</p>
        <form id="form-recuperar-senha" style="display:flex;flex-direction:column;gap:16px;">
          <label style="${_label}">Email<input id="recuperar-email" type="email" required placeholder="voce@email.com" style="${_input}" ${_inputFocus}></label>
          <button type="submit" style="${_btn}" ${_btnHover}>Enviar instruções</button>
        </form>
      </section>
    </div>`;
}
