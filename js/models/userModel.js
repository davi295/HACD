import supabase from '../../services/supabaseClient.js';

export const AREAS_PRINCIPAIS = ['Programação', 'Matemática', 'História', 'Física', 'Química', 'Design'];

export const Database = {
  alunos: [
    { id: 'demo-aluna-1', nome: 'Ana', email: 'ana@hacd.com', tipo: 'aluno', interesse: 'Física', nivel: 'Iniciante' },
    { id: 'demo-aluno-2', nome: 'Carlos', email: 'carlos@hacd.com', tipo: 'aluno', interesse: 'Programação', nivel: 'Avançado' },
    { id: 'demo-aluno-3', nome: 'João', email: 'joao@hacd.com', tipo: 'aluno', interesse: 'Matemática', nivel: 'Intermediário' },
    { id: 'demo-aluna-4', nome: 'Maria', email: 'maria@hacd.com', tipo: 'aluno', interesse: 'Química', nivel: 'Iniciante' }
  ],
  professores: [
    { id: 'demo-professor-1', nome: 'Prof. Roberto', email: 'roberto@hacd.com', tipo: 'professor', especialidade: 'Física', disponibilidade: 'Manhã' },
    { id: 'demo-professor-2', nome: 'Profa. Julia', email: 'julia@hacd.com', tipo: 'professor', especialidade: 'Programação', disponibilidade: 'Noite' },
    { id: 'demo-professor-3', nome: 'Prof. Marcos', email: 'marcos@hacd.com', tipo: 'professor', especialidade: 'Matemática', disponibilidade: 'Tarde' },
    { id: 'demo-professor-4', nome: 'Profa. Silvia', email: 'silvia@hacd.com', tipo: 'professor', especialidade: 'História', disponibilidade: 'Noite' }
  ],
  trilhas: [
    { id: 1, titulo: 'Introdução ao Front-end', descricao: 'Fundamentos de HTML, CSS e JavaScript para criar páginas web.', cargaHoraria: '12 horas' },
    { id: 2, titulo: 'Design para Interfaces', descricao: 'Princípios visuais, acessibilidade e organização de telas.', cargaHoraria: '10 horas' },
    { id: 3, titulo: 'Lógica de Programação', descricao: 'Conceitos essenciais para resolver problemas com algoritmos.', cargaHoraria: '14 horas' }
  ],
  conteudos: [
    { id: 'demo-conteudo-1', tipo: 'artigo', titulo: 'Física Quântica Básica', autor: 'Prof. Roberto', area: 'Física', corpo: 'A física quântica estuda fenômenos em escalas muito pequenas, como átomos e partículas.' },
    { id: 'demo-conteudo-2', tipo: 'artigo', titulo: 'Lógica em JS', autor: 'Profa. Julia', area: 'Programação', corpo: 'A lógica em JavaScript começa com variáveis, condições, repetições e funções.' },
    { id: 'demo-conteudo-3', tipo: 'artigo', titulo: 'Álgebra', autor: 'Prof. Marcos', area: 'Matemática', corpo: 'A álgebra usa símbolos para representar valores e relações.' },
    { id: 'demo-conteudo-4', tipo: 'artigo', titulo: 'Revolução Industrial', autor: 'Profa. Silvia', area: 'História', corpo: 'A Revolução Industrial transformou profundamente o trabalho, a produção e a vida nas cidades.' }
  ]
};

let usuarioLogado = null;

export function getSessao() {
  return usuarioLogado;
}

export function setSessao(usuario) {
  usuarioLogado = usuario;
  return usuarioLogado;
}

export function getAlunos() { return Database.alunos; }
export function getProfessores() { return Database.professores; }
export function getTrilhas() { return Database.trilhas; }
export function getConteudos() { return Database.conteudos; }

export async function carregarDados() {
  const [usuariosResult, conteudosResult] = await Promise.all([
    supabase.from('usuarios').select('*').order('created_at', { ascending: true }),
    supabase.from('conteudos').select('*, usuarios(nome)').order('created_at', { ascending: false })
  ]);

  if (usuariosResult.error) throw usuariosResult.error;
  if (conteudosResult.error) throw conteudosResult.error;

  const usuarios = usuariosResult.data || [];
  Database.alunos = usuarios.filter((usuario) => usuario.tipo === 'aluno');
  Database.professores = usuarios.filter((usuario) => usuario.tipo === 'professor');
  Database.conteudos = (conteudosResult.data || []).map((conteudo) => ({
    ...conteudo,
    autor: conteudo.usuarios?.nome || 'Professor HACD-Hub'
  }));
}

export async function cadastrarUsuario(dados) {
  const usuario = dados.tipo === 'aluno'
    ? { nome: dados.nome, email: dados.email, senha: dados.senha, tipo: 'aluno', interesse: dados.interesse || 'A definir', nivel: dados.nivel || 'Iniciante' }
    : { nome: dados.nome, email: dados.email, senha: dados.senha, tipo: 'professor', especialidade: dados.interesse || 'A definir', disponibilidade: dados.disponibilidade || 'A combinar' };

  const { data, error } = await supabase.from('usuarios').insert(usuario).select().single();
  if (error) throw error;

  Database[usuario.tipo === 'aluno' ? 'alunos' : 'professores'].push(data);
  return data;
}

export async function autenticarUsuario(email, senha) {
  const { data, error } = await supabase.from('usuarios').select('*').eq('email', email).eq('senha', senha).maybeSingle();
  if (error) throw error;
  return data;
}

export async function buscarProfessoresPorArea(area) {
  const { data, error } = await supabase.from('usuarios').select('*').eq('tipo', 'professor').eq('especialidade', area);
  if (error) throw error;
  return data || [];
}

export async function buscarConteudosPorArea(area) {
  const { data, error } = await supabase.from('conteudos').select('*, usuarios(nome)').eq('area', area).order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []).map((conteudo) => ({ ...conteudo, autor: conteudo.usuarios?.nome || 'Professor HACD-Hub' }));
}

export async function registrarMentoria({ alunoId, professorId, area, status = 'solicitada' }) {
  const { error } = await supabase.from('mentorias').insert({ aluno_id: alunoId, professor_id: professorId, area, status });
  if (error) throw error;
  return true;
}

export async function publicarArtigo({ professorId, titulo, area, corpo }) {
  const { data, error } = await supabase.from('conteudos').insert({ professor_id: professorId, tipo: 'artigo', titulo, area, corpo }).select().single();
  if (error) throw error;
  return data;
}
