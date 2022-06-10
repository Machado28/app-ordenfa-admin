import Charts from "./views/charts/Charts";
import {  PesquisarPerfil } from "./views/PesquisarPerfil/persquisa";
import { AddCursos, ListarCursos } from "./views/cursos";
import Dashboard from "./views/dashboard/Dashboard";
import { AddDisciplina, ListDisciplina } from "./views/grau";
import Inscricoes from "./views/inscricoes";
import {ListTipoDeVia,AddTipoDeVia } from "./views/tipoDeVia/index";
import ListPagamentos from "./views/pages/pagamentos/listarMatriculas/index";
import { ListTipoDeActualizacao, AddTipoDeActualizacao } from "./views/tipoDeActualizar/index";
import { AddDcumento, AddTurma, ListDcumento, ListTurma } from "./views/documentos";
import SolicitarCarteira from "./views/solicitarCarteira/index";
import ActualizarCarterira from "./views/solicitarCarteira/actualizar";
import Reconhecimento from "./views/solicitarCarteira/reconhecimento";
import Grau from "./views/grau/listarGrau";
import { AddGrau } from "./views/grau";
import { AddPermissao, ListPermissao } from "./views/permissao";
import { AddCargo, ListCargo } from "./views/cargo";
import ListInscricao from "./views/Pedidos/inscricao";
import ListMembros from "./views/inscricoes/listInscricao";
import Login from "./views/pages/login/Login";

 
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/pedido/inscricao/list", exact: true, name: "Pedidos de Inscricao" ,component:ListInscricao},
  { path: "/membros/list", exact: true, name: "Membros Inscritos" ,component:ListMembros},
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/permissao/list", name: "Listar Permissao", component: ListPermissao },
  { path: "/permissao/add", name: "Adicionar Permissao", component: AddPermissao },
  { path: "/minhaCarteira", name: "Minha Carteira", component: SolicitarCarteira },
  //New routes:
  { path: "/encontrar/perfil", exact: true, name: "Perfil", component: PesquisarPerfil },
 
   
  { path: "/inscricao", name: "Inscrição", component:Inscricoes,private:true },
  { path: "/actualizar/carteira", name: "Actualizar Carterira", component: ActualizarCarterira },
  { path: "/reconhecimento/carteira", name: "Reconhecimento de Carteira Profissional", component: Reconhecimento },
  {
    path: "/listpagamento",
    name: "Pagementos Recentes",
    component: ListPagamentos,
  },
  {
    path: "/tipo/via/list",
    name: "Listar tipo de Via",
    component: ListTipoDeVia,
  },
  {
    path: "/tipo/actualizacao/add",
    name: "Tipo de Via",
    component: AddTipoDeActualizacao,
  },
  {
    path: "/tipo/actualizacao/list",
    name: "Listar tipo de Via",
    component: ListTipoDeActualizacao,
  },
  {
    path: "/tipo/via/add",
    name: "Tipo de Via",
    component: AddTipoDeVia,
  },
  {
    path: "/grau/list",
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
  { path: "/cargo/add", name: "Adicionar Cargo", component: AddCargo },
  { path: "/cargo/list", name: "Listar Cargo", component: ListCargo },
  
  
];
 
export default routes;
