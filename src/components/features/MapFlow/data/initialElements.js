export const initialNodes = [
  { id: 'root', type: 'root', position: { x: 0, y: 0 }, data: { label: 'JavaScript Conceptos' }, draggable: false },
  { id: 'tema-variables', type: 'reveal', position: { x: -150, y: 100 }, data: { label: 'Variables' } },
  { id: 'tema-array', type: 'reveal', position: { x: 0, y: 140 }, data: { label: 'Arrays' } },
  { id: 'tema-objetos', type: 'reveal', position: { x: 150, y: 100 }, data: { label: 'Objetos' } },
  { id: 'tema-funciones', type: 'reveal', position: { x: 150, y: -100 }, data: { label: 'Funciones' } },
  { id: 'tema-dom', type: 'reveal', position: { x: 220, y: 0 }, data: { label: 'DOM' } },
  { id: 'tema-operadores', type: 'reveal', position: { x: -220, y: 0 }, data: { label: 'Operadores' } },
  { id: 'tema-condicionales', type: 'reveal', position: { x: -150, y: -100 }, data: { label: 'Condicionales' } },
];

export const initialEdges = [
  { id: 'e-root-var', source: 'root', sourceHandle: 'bottom-1', target: 'tema-variables', type: 'smoothstep', animated: true },
  { id: 'e-root-arr', source: 'root', sourceHandle: 'bottom-2', target: 'tema-array', type: 'smoothstep', animated: true },
  { id: 'e-root-obj', source: 'root', sourceHandle: 'bottom-3', target: 'tema-objetos', type: 'smoothstep', animated: true },
  { id: 'e-root-fun', source: 'root', sourceHandle: 'top-3', target: 'tema-funciones', type: 'smoothstep', animated: true },
  { id: 'e-root-dom', source: 'root', sourceHandle: 'right-2', target: 'tema-dom', type: 'smoothstep', animated: true },
  { id: 'e-root-ope', source: 'root', sourceHandle: 'left-2', target: 'tema-operadores', type: 'smoothstep', animated: true },
  { id: 'e-root-con', source: 'root', sourceHandle: 'top-1', target: 'tema-condicionales', type: 'smoothstep', animated: true },
];

export const fitViewOptions = {
  padding: 0.5,
  minZoom: 0.3,
  maxZoom: 1.5,
};
