export interface Menu {
  label: string;
  path: string;
  icon: string;
}

export const menu: Menu[] = [
  {
    label: "Aplicación",
    path: "/aplicacion",
    icon: "icon-aplicacion",
  },
  {
    label: "Costo",
    path: "/costo",
    icon: "icon-costo",
  },
  {
    label: "Durabilidad",
    path: "/durabilidad",
    icon: "icon-durabilidad",
  },
  {
    label: "Herramientas",
    path: "/herramientas",
    icon: "icon-herramientas",
  },
  {
    label: "Resinas",
    path: "/resinas",
    icon: "icon-resinas",
  },
  {
    label: "Técnicas",
    path: "/tecnicas/marmoleado",
    icon: "icon-tecnicas",
  },
];
