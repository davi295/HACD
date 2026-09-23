import { renderHome } from '../views/homeView.js?v=2';
import { renderAluno, renderProfessor, renderArtigo, renderPublicarConteudo } from '../views/alunoView.js?v=4';
import { renderCadastro, renderLogin, renderRecuperarSenha } from '../views/cadastroView.js?v=3';
import {
  AREAS_PRINCIPAIS,
  carregarDados,
  cadastrarUsuario,
  autenticarUsuario,
  getAlunos,
  getProfessores,
  getConteudos,
  getSessao,
  setSessao,
  publicarArtigo,
  registrarMentoria
} from '../models/userModel.js';

const appContent = document.getElementById('app-content');

function exibirMensagem(mensagem, tipo = 'erro') {
  document.getElementById('notificacao-hacd')?.remove();
  const notificacao = document.createElement('div');
  notificacao.id = 'notificacao-hacd';
  notificacao.className = `fixed right-6 top-24 z-[100] max-w-sm rounded-2xl border px-5 py-4 text-sm font-semibold shadow-2xl backdrop-blur-xl ${tipo === 'erro' ? 'border-red-400/30 bg-red-950/90 text-red-100' : 'border-cyan-400/30 bg-slate-900/90 text-cyan-100'}`;
  notificacao.textContent = mensagem;
  document.body.appendChild(notificacao);
  window.setTimeout(() => notificacao.remove(), 3600);
}

function filtrarAluno() {
  const usuario = getSessao();
  if (!usuario) return { conteudos: getConteudos(), mentores: getProfessores() };
  const outras = usuario.filtroAlunoTipo === 'outras';
  return {
    conteudos: getConteudos().filter((item) => outras ? !AREAS_PRINCIPAIS.includes(item.area) : item.area === usuario.interesse),
    mentores: getProfessores().filter((item) => outras ? !AREAS_PRINCIPAIS.includes(item.especialidade) : item.especialidade === usuario.interesse)
  };
}

function filtrarProfessor() {
  const usuario = getSessao();
  if (!usuario) return getAlunos();
  if (usuario.filtroProfessorTipo === 'nivel') return getAlunos().filter((aluno) => aluno.nivel === usuario.nivelFiltro);
  if (usuario.filtroProfessorTipo === 'outras') return getAlunos().filter((aluno) => !AREAS_PRINCIPAIS.includes(aluno.interesse));
  return getAlunos().filter((aluno) => aluno.interesse === usuario.especialidade);
}

export function navegarPara(pagina, params = {}) {
  switch (pagina) {
    case 'home': appContent.innerHTML = renderHome(); break;
    case 'login': appContent.innerHTML = renderLogin(); break;
    case 'recuperar-senha': appContent.innerHTML = renderRecuperarSenha(); break;
    case 'cadastro': appContent.innerHTML = renderCadastro(params.tipo, params.interesse); break;
    case 'aluno': { const dados = filtrarAluno(); appContent.innerHTML = renderAluno(dados.conteudos, dados.mentores, getSessao()); break; }
    case 'professor': appContent.innerHTML = renderProfessor(filtrarProfessor(), getSessao(), getConteudos().filter((item) => item.professor_id === getSessao()?.id || item.autor === getSessao()?.nome)); break;
    case 'conteudo': appContent.innerHTML = renderArtigo(params.id, getConteudos(), getSessao()); break;
    case 'publicar-artigo': appContent.innerHTML = renderPublicarConteudo(getSessao()); break;
    default: appContent.innerHTML = renderHome();
  }
  atualizarHeaderUsuario();
  aplicarParallax();
  fecharMenuMobile();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function atualizarHeaderUsuario() {
  const usuario = getSessao();
  const rotuloEntrar = usuario ? 'Sair' : 'Entrar';
  const rotuloCriar = usuario ? `Painel ${usuario.tipo === 'aluno' ? 'Aluno' : 'Professor'}` : 'Criar conta';
  document.querySelectorAll('[data-acao="entrar"]').forEach((botao) => { botao.textContent = rotuloEntrar; });
  document.querySelectorAll('[data-acao="criar-conta"]').forEach((botao) => { botao.textContent = rotuloCriar; });
}

function aplicarParallax() {
  document.querySelectorAll('[data-parallax]').forEach((elemento) => {
    elemento.style.transform = 'translate3d(0, 0, 0)';
  });
}

document.addEventListener('mousemove', (event) => {
  const eixoX = (event.clientX / (window.innerWidth || 1) - 0.5) * 2;
  const eixoY = (event.clientY / (window.innerHeight || 1) - 0.5) * 2;
  document.querySelectorAll('[data-parallax]').forEach((elemento) => {
    const profundidade = Number(elemento.dataset.depth || 0);
    elemento.style.transform = `translate3d(${eixoX * profundidade}px, ${eixoY * profundidade}px, 0)`;
  });
});

document.getElementById('logo-home').addEventListener('click', (event) => { event.preventDefault(); navegarPara('home'); });

document.querySelectorAll('[data-acao="entrar"]').forEach((botao) => botao.addEventListener('click', () => {
  if (getSessao()) { setSessao(null); exibirMensagem('Você saiu da plataforma.', 'info'); navegarPara('home'); } else navegarPara('login');
}));
document.querySelectorAll('[data-acao="criar-conta"]').forEach((botao) =>
  botao.addEventListener('click', () => navegarPara(getSessao() ? getSessao().tipo : 'cadastro')));

/* ── Menu mobile ── */
const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('mobile-menu');

function recolherAcordeoes() {
  menuMobile.querySelectorAll('.m-row').forEach((linha) => linha.setAttribute('aria-expanded', 'false'));
  menuMobile.querySelectorAll('.m-panel').forEach((painel) => painel.classList.remove('is-open'));
}

function menuMobileAberto() {
  return btnMenuMobile.getAttribute('aria-expanded') === 'true';
}

function abrirMenuMobile() {
  menuMobile.classList.add('is-mounted');
  requestAnimationFrame(() => menuMobile.classList.add('is-open'));
  btnMenuMobile.setAttribute('aria-expanded', 'true');
  btnMenuMobile.setAttribute('aria-label', 'Fechar menu');
  document.body.classList.add('menu-aberto');
}

function fecharMenuMobile() {
  if (!menuMobile || !menuMobileAberto()) return;
  menuMobile.classList.remove('is-open');
  btnMenuMobile.setAttribute('aria-expanded', 'false');
  btnMenuMobile.setAttribute('aria-label', 'Abrir menu');
  document.body.classList.remove('menu-aberto');
  window.setTimeout(() => { if (!menuMobileAberto()) { menuMobile.classList.remove('is-mounted'); recolherAcordeoes(); } }, 260);
}

btnMenuMobile.addEventListener('click', () => { menuMobileAberto() ? fecharMenuMobile() : abrirMenuMobile(); });

menuMobile.addEventListener('click', (event) => {
  const linha = event.target.closest('.m-row');
  if (!linha) return;
  const painel = document.getElementById(linha.dataset.acordeao);
  const aberto = linha.getAttribute('aria-expanded') === 'true';
  recolherAcordeoes();
  if (!aberto) { linha.setAttribute('aria-expanded', 'true'); painel.classList.add('is-open'); }
});

document.addEventListener('keydown', (event) => { if (event.key === 'Escape') fecharMenuMobile(); });
window.addEventListener('resize', () => { if (window.innerWidth > 768) fecharMenuMobile(); });

const btnAprender = document.getElementById('btn-dropdown-aprender');
const btnEnsinar = document.getElementById('btn-dropdown-ensinar');
const menuAprender = document.getElementById('dropdown-aprender');
const menuEnsinar = document.getElementById('dropdown-ensinar');
function fecharDropdowns() { menuAprender.classList.add('hidden'); menuEnsinar.classList.add('hidden'); fecharMenuMobile(); }
btnAprender.addEventListener('click', (event) => { event.stopPropagation(); menuAprender.classList.toggle('hidden'); menuEnsinar.classList.add('hidden'); });
btnEnsinar.addEventListener('click', (event) => { event.stopPropagation(); menuEnsinar.classList.toggle('hidden'); menuAprender.classList.add('hidden'); });

document.addEventListener('click', (event) => {
  const item = event.target.closest('.menu-item');
  if (item) {
    event.preventDefault(); fecharDropdowns();
    const tipo = item.dataset.tipo;
    const interesse = item.dataset.interesse;
    const filtro = item.dataset.filtro || 'area';
    const usuario = getSessao();
    if (!usuario) return navegarPara('cadastro', { tipo, interesse });
    if (usuario.tipo !== tipo) return navegarPara('cadastro', { tipo, interesse });
    if (tipo === 'aluno') { usuario.interesse = interesse; usuario.filtroAlunoTipo = filtro; navegarPara('aluno'); }
    else { usuario.filtroProfessorTipo = filtro; usuario.nivelFiltro = filtro === 'nivel' ? interesse : usuario.nivelFiltro; usuario.especialidade = filtro === 'outras' ? 'Outras' : filtro === 'area' ? interesse : usuario.especialidade; navegarPara('professor'); }
    return;
  }
  if (menuMobile.contains(event.target) || btnMenuMobile.contains(event.target)) return;
  if (!menuAprender.contains(event.target) && !menuEnsinar.contains(event.target) && !btnAprender.contains(event.target) && !btnEnsinar.contains(event.target)) fecharDropdowns();
});

appContent.addEventListener('click', async (event) => {
  const link = event.target.closest('#link-cadastro, #link-recuperar-senha');
  if (link) return navegarPara(link.id === 'link-cadastro' ? 'cadastro' : 'recuperar-senha');
  const button = event.target.closest('[data-page]');
  if (!button) return;
  const pagina = button.dataset.page;
  if ((pagina === 'conteudo' || pagina === 'solicitar-mentoria') && !getSessao()) { exibirMensagem('Crie uma conta gratuitamente para acessar este conteúdo.'); return navegarPara('cadastro'); }
  if ((pagina === 'publicar-artigo' || pagina === 'oferecer-mentoria') && getSessao()?.tipo !== 'professor') { exibirMensagem('Entre como professor para continuar.'); return navegarPara('login'); }
  if (pagina === 'solicitar-mentoria' || pagina === 'oferecer-mentoria') {
    const usuario = getSessao();
    try {
      await registrarMentoria({ alunoId: pagina === 'solicitar-mentoria' ? usuario.id : button.dataset.id, professorId: pagina === 'solicitar-mentoria' ? button.dataset.id : usuario.id, area: button.dataset.especialidade || button.dataset.interesse, status: pagina === 'solicitar-mentoria' ? 'solicitada' : 'oferecida' });
      const assunto = encodeURIComponent(`Mentoria em ${button.dataset.especialidade || button.dataset.interesse} - HACD-Hub`);
      const corpo = encodeURIComponent(`Olá, ${button.dataset.nome}!\n\nSou ${usuario.nome}, professor(a)/aluno(a) do HACD-Hub e gostaria de conversar sobre mentoria.`);
      window.location.href = `mailto:${button.dataset.email}?subject=${assunto}&body=${corpo}`;
    } catch (error) { exibirMensagem(error.message || 'Não foi possível registrar a mentoria.'); }
    return;
  }
  navegarPara(pagina, { id: button.dataset.id });
});

appContent.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    if (event.target.id === 'form-cadastro') {
      const dados = { nome: document.getElementById('nome').value.trim(), email: document.getElementById('email').value.trim(), senha: document.getElementById('senha').value, interesse: document.getElementById('interesse').value.trim(), tipo: document.getElementById('tipo-usuario').value };
      const usuario = await cadastrarUsuario(dados); setSessao(usuario); navegarPara(usuario.tipo); return;
    }
    if (event.target.id === 'form-login') {
      const usuario = await autenticarUsuario(document.getElementById('login-email').value.trim(), document.getElementById('senha').value);
      if (!usuario) return exibirMensagem('Email ou senha incorretos. Tente novamente ou cadastre-se.');
      setSessao(usuario); await carregarDados(); navegarPara(usuario.tipo); return;
    }
    if (event.target.id === 'form-conteudo') {
      const usuario = getSessao();
      await publicarArtigo({ professorId: usuario.id, titulo: document.getElementById('titulo-conteudo').value.trim(), area: document.getElementById('area-conteudo').value.trim(), corpo: document.getElementById('corpo-conteudo').value.trim() });
      await carregarDados(); navegarPara('professor'); return;
    }
    if (event.target.id === 'form-recuperar-senha') exibirMensagem('Se o email estiver cadastrado, enviaremos as instruções.', 'info');
  } catch (error) { exibirMensagem(error.message || 'Não foi possível concluir a operação.'); }
});

async function inicializar() {
  try { await carregarDados(); } catch (error) { exibirMensagem('Não foi possível carregar os dados do HACD-Hub.'); }
  navegarPara('home');
}

inicializar();
