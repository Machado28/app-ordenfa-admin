import Charts from "./views/charts/Charts";
import {  PesquisarPerfil } from "./views/PesquisarPerfil/persquisa";
import { AddCursos, ListarCursos } from "./views/cursos";
import Dashboard from "./views/dashboard/Dashboard";
import { AddDisciplina, ListDisciplina } from "./views/grau";
import Inscricoes from "./views/inscricoes";

import ListPagamentos from "./views/pages/pagamentos/listarMatriculas/index";
 
import { AddDcumento, AddTurma, ListDcumento, ListTurma } from "./views/documentos";
import SolicitarCarteira from "./views/solicitarCarteira/index";
import ActualizarCarterira from "./views/solicitarCarteira/actualizar";
import Reconhecimento from "./views/solicitarCarteira/reconhecimento";
import Grau from "./views/grau/listarGrau";
import { AddGrau } from "./views/grau";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/minhaCarteira", name: "Minha Carteira", component: SolicitarCarteira },
  //New routes:
  { path: "/encontrar/perfil", exact: true, name: "Perfil", component: PesquisarPerfil },
 
   
  { path: "/inscricao", name: "Inscrição", component: Inscricoes },
  { path: "/actualizar/carteira", name: "Actualizar Carterira", component: ActualizarCarterira },
  { path: "/reconhecimento/carteira", name: "Reconhecimento de Carteira Profissional", component: Reconhecimento },
  {
    path: "/listpagamento",
    name: "Pagementos Recentes",
    component: ListPagamentos,
  },

  {
    path: "/graus",
    name: "Nível Academico",
    component: Grau,
  },
  {
    path: "/graus/add",
    name: "Nível Academico",
    component: AddGrau,
  },
  { path: "/documentos", exact: true, name: "Documentos de identificação", component:ListDcumento  },
  { path: "/documentos/add", name: "Adicionar documentos", component: AddDcumento },
  { path: "/cursos", exact: true, name: "Cursos", component: ListarCursos },
  { path: "/cursos/add", name: "Adicionar Curso", component: AddCursos },
  
];

export default routes;
