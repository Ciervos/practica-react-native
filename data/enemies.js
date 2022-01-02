import mobs from '../constants/enemies';

export const ENEMIES = [
    {
      id: '1',
      name: 'Caballero Oscuro',
      description: 'No es más que una imagen de lo que fue. Un buen libro de hechizos o un ataque de fuego es suficiente para derrotarlo',
      image: mobs.enemy1,
      weakness: ['book','fire'],
      power: 1,
    },
    {
      id: '2',
      name: 'Bruja',
      description: 'Jugar sus mismos trucos puede ser útil para vencerla. Las brujas son débiles al fuego y al agua',
      image: mobs.enemy2,
      weakness: ['book','fire','water'],
      power: 1,
    },
    {
      id: '3',
      name: 'Oculus',
      description: 'El gran ojo que todo lo ve puede ser cegado con tierra o el corte de una daga',
      image: mobs.enemy3,
      weakness: ['dagger','earth'],
      power: 1,
    },
    {
      id: '4',
      name: 'Cría de dragón',
      description: 'Juguetón pero peligroso ya que no mide su fuerza, el agua puede calmarlo o algo que pueda comer distraerlo',
      image: mobs.enemy4,
      weakness: ['mushroom','water'],
      power: 1,
    },
    {
      id: '5',
      name: 'Árbol sabio',
      description: 'Enojado por los destrozos de su hogar, te culpara y atacara. Algo que pueda cortarlo o un poco de fuego bastara para alejarlo',
      image: mobs.enemy5,
      weakness: ['dagger','fire'],
      power: 1,
    },
    {
      id: '6',
      name: 'Medusa',
      description: 'Te has encontrado un jefe, un golpe de un jefe puede destruirte. Cortale la cabeza o echale tierra en los ojos para escapar',
      image: mobs.boss1,
      weakness: ['dagger','earth'],
      power: 2,
    },
    {
      id: '7',
      name: 'Calavera de fuego',
      description: 'Te has encontrado un jefe, un golpe de un jefe puede destruirte. Un libro de hechizos o el uso correcto de agua te salvaran',
      image: mobs.boss2,
      weakness: ['book','water'],
      power: 2,
    }
  ];