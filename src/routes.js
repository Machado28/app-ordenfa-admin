import Charts from "./views/charts/Charts";
import {  PesquisarPerfil } from "./views/PesquisarPerfil/persquisa";
import { AddCursos, ListarCursos } from "./views/cursos";
import Dashboard from "./views/dashboard/Dashboard";
import { AddDisciplina, ListDisciplina } from "./views/disciplinas";
import Inscricoes from "./views/inscricoes";

import ListPagamentos from "./views/pages/pagamentos/listarMatriculas/index";
 
import { AddTurma, ListTurma } from "./views/turmas";
import SolicitarCarteira from "./views/solicitarCarteira/index";
import ActualizarCarterira from "./views/solicitarCarteira/actualizar";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/minhaCarteira", name: "Minha Carteira", component: SolicitarCarteira },
  //New routes:
  { path: "/encontrar/perfil", exact: true, name: "Perfil", component: PesquisarPerfil },
 
   
  { path: "/inscricao", name: "Inscrição", component: Inscricoes },
  { path: "/actualizar/carterira", name: "Actualizar Carterira", component: ActualizarCarterira },
  {
    path: "/listpagamento",
    name: "Pagementos Recentes",
    component: ListPagamentos,
  },
  { path: "/documentos", exact: true, name: "Documentos de identificação", component: ListarCursos },
  { path: "/documentos/add", name: "Adicionar documentos", component: AddCursos },
  { path: "/cursos", exact: true, name: "Cursos", component: ListarCursos },
  { path: "/cursos/add", name: "Adicionar Curso", component: AddCursos },
  
];

export default routes;
