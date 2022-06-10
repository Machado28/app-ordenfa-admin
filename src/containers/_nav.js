import React from "react";
import CIcon from "@coreui/icons-react";

const _navAdmin = [
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
    _children: ["Administrador"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pedidos de solicitacao",
    route: "/gAcademica",
    icon: "cil-puzzle",
     
          _children: [
            {
              _tag: "CSidebarNavItem",
              name: "Troca de Carteira ",
              to: "/usuarios/list",
            },
            {
              _tag: "CSidebarNavItem",
              name: "Emissão de Carteira",
              to: "/usuarios/list",
            },
             
              {
                _tag: "CSidebarNavItem",
                name: "Inscrição ",
                to: "/inscricao/list",
              },
               
             {
                  _tag: "CSidebarNavItem",
                  name: "Reconhecimento de carteira",
                  to: "/usuarios/list",
             },
             {
              _tag: "CSidebarNavItem",
              name: "Membros Inscritos",
              to: "/membros/list",
         },
            
            ],
                
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gestão Administrativa",
    route: "/gAcademica",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cargo",
        to: "/usuarios/list",
      },],
      _children: [
        {
          _tag: "CSidebarNavItem",
          name: "permissões de cargo",
          to: "/usuarios/list",
        },],
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Usuaios",
            to: "/usuarios/list",
          },],
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cursos",
        to: "/cursos",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Documentos",
        to: "/documentos",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nível acadêmico (grau)",
        to: "/grau/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tipo de Actualização",
        to: "/tipo/actualizacao/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Permissao",
        to: "/permissao/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cargo",
        to: "/cargo/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Permissao",
        to: "/permissao/add",
      },
       
      {
        _tag: "CSidebarNavItem",
        name: "Tipo de Vias para a carteira ",
        to: "/tipo/via/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Funcionários",
        to: "/gestadmin/permissoes",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Sair",
    route: "/gAdmin",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Sair",
        to: "/login",
      },
    ],
  }
];
export { _navAdmin }

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
        name: "Pedido de troca de carteira",
        to: "/actualizar/carteira",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Reconecimento de carteira",
        to: "/reconhecimento/carteira",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Sair",
    route: "/gAdmin",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Sair",
        to: "/login",
      },
    ],
  }
];

export default _nav;
