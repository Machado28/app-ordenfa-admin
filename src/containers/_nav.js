import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Utilizador"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Meu cantinho",
    route: "/gAcademica",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Inscrever na Ordenfa",
        to: "/inscricao",
      },
      {
        _tag: "CSidebarNavItem",
        name: " Desconto directo",
        to: "/classes",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Solicitação",
        to: "/disciplinas/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Turmas",
        to: "/turmas/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pedidos de ",
    route: "/gAdmin",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Troca de Especialidade",
        to: "/gestadmin/permissoes",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Reconhecimento",
        to: "/acessos",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Inscrição",
    to: "/inscricao",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Matrícula",
    to: "/matriculas/list",
    icon: "cil-calculator",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Avaliações",
    to: "/avaliacao",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Pagamentos",
    to: "/listpagamento",
    icon: "cil-credit-card",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
 

  
  {
    _tag: "CSidebarNavItem",
    name: "Sair",
    to: "/login",
    icon: "cil-notes",
  },
 
];

export default _nav;
