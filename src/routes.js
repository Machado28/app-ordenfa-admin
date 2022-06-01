import AboutUs from "./views/aboutUs";
import Charts from "./views/charts/Charts";
import { AddClasse, ListarClasses } from "./views/classes";
import { AddCursos, ListarCursos } from "./views/cursos";
import Dashboard from "./views/dashboard/Dashboard";
import { AddDisciplina, ListDisciplina } from "./views/disciplinas";
import Inscricoes from "./views/inscricoes";
import { AddMatricula, ListMatricula } from "./views/matriculas";
import Pagamentos from "./views/pages/pagamentos/index";
import ListPagamentos from "./views/pages/pagamentos/listarMatriculas/index";
 
import { AddTurma, ListTurma } from "./views/turmas";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/sobre",exact: true, name:  "Sobre", component: AboutUs },
  //New routes:
  { path: "/classes", exact: true, name: "Classes", component: ListarClasses },
  { path: "/classes/add", name: "Adicionar Classe", component: AddClasse },
  { path: "/matrjiculas/list", name: "Matricula", component: ListMatricula },
  { path: "/matricula/add", name: "Matricula", component: AddMatricula },
  { path: "/inscricao", name: "Inscrição", component: Inscricoes },
  { path: "/pagamentos", name: "Pagamentos", component: Pagamentos },
  {
    path: "/listpagamento",
    name: "Pagementos Recentes",
    component: ListPagamentos,
  },
  { path: "/cursos", exact: true, name: "Cursos", component: ListarCursos },
  { path: "/cursos/add", name: "Adicionar Curso", component: AddCursos },
  { path: "/turmas/list", name: "Turma", component: ListTurma },
  { path: "/turma/add", name: "Turma", component: AddTurma },
  { path: "/disciplinas/list", name: "Disciplinas", component: ListDisciplina },
  { path: "/disciplinas/add", name: "Disciplinas", component: AddDisciplina },
];

export default routes;
