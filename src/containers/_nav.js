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
        name: "Meu Perfil",
        to: "/encontrar/perfil",
      },
      {
        _tag: "CSidebarNavItem",
        name: " Inscrição",
        to: "/inscricao",
      },
      {
        _tag: "CSidebarNavItem",
        name: " Solicitar Minha Carteira",
        to: "/minhaCarteira",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Solicitação",
        to: "/disciplinas/list",
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
        name: "Carteira",
        to: "/gestadmin/permissoes",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Actualizações de Carteira",
    route: "/gAdmin",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Carteira",
        to: "/gestadmin/permissoes",
      },
    ],
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Licença",
        to: "/gestadmin/permissoes",
      },
    ],
  },
];

export default _nav;
