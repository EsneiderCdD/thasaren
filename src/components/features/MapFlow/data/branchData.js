
export const getBranchContent = (nodeId) => {
  const branches = {
    'tema-variables': {
      nodes: [
        { id: 'sub-decl', type: 'reveal', position: { x: -250, y: 250 }, data: { label: 'Declaraciones' } },
        { id: 'sub-types', type: 'reveal', position: { x: -50, y: 250 }, data: { label: 'Tipos Primitivos' } },
        { id: 'tema-estructuras', type: 'reveal', position: { x: 150, y: 250 }, data: { label: 'Estructura de Datos' } }
      ],
      edges: [
        { id: 'e-var-decl', source: 'tema-variables', target: 'sub-decl', type: 'smoothstep' },
        { id: 'e-var-typ', source: 'tema-variables', target: 'sub-types', type: 'smoothstep' },
        { id: 'e-var-est', source: 'tema-variables', target: 'tema-estructuras', type: 'smoothstep' }
      ]
    },
    'sub-decl': {
      nodes: [
        { id: 'item-var', type: 'clickable', position: { x: -350, y: 350 }, data: { label: 'var', category: 'declarations', itemKey: 'var' } },
        { id: 'item-let', type: 'clickable', position: { x: -250, y: 350 }, data: { label: 'let', category: 'declarations', itemKey: 'let' } },
        { id: 'item-const', type: 'clickable', position: { x: -150, y: 350 }, data: { label: 'const', category: 'declarations', itemKey: 'const' } }
      ],
      edges: [
        { id: 'e-decl-var', source: 'sub-decl', target: 'item-var', type: 'smoothstep' },
        { id: 'e-decl-let', source: 'sub-decl', target: 'item-let', type: 'smoothstep' },
        { id: 'e-decl-const', source: 'sub-decl', target: 'item-const', type: 'smoothstep' }
      ]
    },
    'sub-types': {
      nodes: [
        { id: 'item-num', type: 'clickable', position: { x: -100, y: 350 }, data: { label: 'Number', category: 'types', itemKey: 'number' } },
        { id: 'item-str', type: 'clickable', position: { x: 0, y: 410 }, data: { label: 'String', category: 'types', itemKey: 'string' } },
        { id: 'item-bool', type: 'clickable', position: { x: 100, y: 350 }, data: { label: 'Boolean', category: 'types', itemKey: 'boolean' } },
      ],
      edges: [
        { id: 'e-typ-num', source: 'sub-types', target: 'item-num', type: 'smoothstep' },
        { id: 'e-typ-str', source: 'sub-types', target: 'item-str', type: 'smoothstep' },
        { id: 'e-typ-bool', source: 'sub-types', target: 'item-bool', type: 'smoothstep' }
      ]
    },
    'tema-estructuras': {
      nodes: [
        { id: 'item-mat', type: 'clickable', position: { x: 200, y: 350 }, data: { label: 'Matriz', category: 'structures', itemKey: 'matriz' } },
        { id: 'item-arrobj', type: 'clickable', position: { x: 350, y: 350 }, data: { label: 'Array de Objetos', category: 'structures', itemKey: 'arrayDeObjetos' } },
        { id: 'item-dicc', type: 'clickable', position: { x: 500, y: 350 }, data: { label: 'Diccionario', category: 'structures', itemKey: 'entidadDiccionario' } },
      ],
      edges: [
        { id: 'e-est-mat', source: 'tema-estructuras', target: 'item-mat', type: 'smoothstep' },
        { id: 'e-est-arrobj', source: 'tema-estructuras', target: 'item-arrobj', type: 'smoothstep' },
        { id: 'e-est-dicc', source: 'tema-estructuras', target: 'item-dicc', type: 'smoothstep' },
      ]
    }
  };

  return branches[nodeId] || null;
};
