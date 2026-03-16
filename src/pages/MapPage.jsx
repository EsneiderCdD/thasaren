import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges, Handle, Position, useReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ViewCode from '../components/reusables/ViewCode/ViewCode';

// Importamos la data que usabas en VariablesAndTypes.jsx
import {
    ejemploLet,
    ejemploConst,
    ejemploVar,
    ejemploNumber,
    ejemploString,
    ejemploBoolean,
    ejemploUndefined,
    ejemploNull,
} from "../components/features/Logic/data/variables";

// -- BASE DE DATOS LOCAL (Para alimentar el Panel) --
const types = {
    number: { title: "Number", description: "Representa valores numéricos, tanto enteros como de punto flotante. Soporta operaciones aritméticas estándar.", code: ejemploNumber },
    string: { title: "String", description: "Secuencia inmutable de caracteres para representar texto. Se delimita con comillas simples ' ' o dobles", code: ejemploString },
    boolean: { title: "Boolean", description: "Tipo lógico primitivo que representa uno de dos valores: true o false. Base del control de flujo.", code: ejemploBoolean },
    undefined: { title: "undefined", description: "Valor primitivo asignado automáticamente a variables declaradas pero no inicializadas. Ausencia por omisión del sistema.", code: ejemploUndefined },
    null: { title: "null", description: "Valor primitivo que representa la ausencia intencional de cualquier valor de objeto. 'Vacío' explícito del programador.", code: ejemploNull },
};

const declarations = {
    var: { title: "var", description: "Declaración con alcance de función o global, susceptible a hoisting. Su uso se considera obsoleto en favor de la predictibilidad de let y const.", code: ejemploVar },
    let: { title: "let", description: "Declara una variable local con alcance de bloque (block-scoped) que permite reasignación de valores. Es la elección correcta para estados mutables.", code: ejemploLet },
    const: { title: "const", description: "Declara una referencia de solo lectura dentro del bloque. Impide la reasignación del identificador. Debe ser la opción por defecto.", code: ejemploConst },
};

// -- COMPONENTES DE NODOS PERSONALIZADOS --

const PrincipalNode = ({ data }) => (
    <div style={{ padding: '15px 30px', borderRadius: '12px', background: '#0052cc', color: '#fff', fontWeight: 'bold' }}>
        <div>{data.label}</div>
        <Handle type="source" position={Position.Bottom} style={{ background: '#fff' }} />
    </div>
);

// Nodo Revelador (Categorías grandes que abren ramificaciones)
const RevealNode = ({ data }) => (
    <div style={{ padding: '10px 20px', borderRadius: '8px', background: '#333', color: '#fff', border: '1px solid #ffaa00', cursor: 'pointer' }}>
        <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
        <div style={{ color: '#ffaa00', fontWeight: 'bold' }}>{data.label} ⚡</div>
        <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
);

// Nodo Clickable (Botones de temario, los que abren el Panel)
const ClickableNode = ({ data, selected }) => (
    <div style={{ 
        padding: '8px 25px', 
        borderRadius: '20px', 
        background: selected ? '#ff0072' : '#222', 
        color: '#fff', 
        border: `2px solid #ff0072`,
        cursor: 'pointer',
        boxShadow: selected ? '0 0 10px #ff0072' : 'none',
        transition: 'all 0.3s ease'
    }}>
        <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
        <div style={{ fontWeight: '500' }}>{data.label} 📖</div>
        <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
);

// Nodo de acción (Ir a ejercicios)
const ActionNode = ({ data }) => (
    <div style={{ padding: '10px 20px', borderRadius: '8px', background: '#00ff88', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
        <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
        <div>{data.label} 💻</div>
    </div>
);

const nodeTypes = {
  principal: PrincipalNode,
  reveal: RevealNode,
  clickable: ClickableNode,
  action: ActionNode
};

// -- ESTADO INICIAL (Solo mostramos el título y la primera puerta) --
const initialNodes = [
  { id: '1', type: 'principal', position: { x: 400, y: 50 }, data: { label: 'JavaScript' }, draggable: false },
  { id: '2', type: 'reveal', position: { x: 400, y: 150 }, data: { label: 'Variables y Tipos' }, draggable: false },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true, style: { stroke: '#ffaa00', strokeWidth: 2 } },
];


const MapLogic = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [activePanel, setActivePanel] = useState(null); 
  
  const { fitView } = useReactFlow();

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  const onNodeClick = useCallback((event, node) => {
      
      // 1. Si es un nodo de TEMA (Clickable), abrimos el Panel Lateral
      if (node.type === 'clickable') {
          setActivePanel({ category: node.data.category, key: node.data.itemKey });
          
          // Efecto visual: Resaltar el nodo seleccionado
          setNodes(nds => nds.map(n => ({
              ...n,
              selected: n.id === node.id
          })));
          return;
      }

      // 2. Revelación de las Ramas principales de "Variables y Tipos"
      if (node.id === '2') {
          const hasChildren = nodes.find(n => n.id === '2-decl');
          if (!hasChildren) {
              const newNodes = [
                  { id: '2-decl', type: 'reveal', position: { x: 150, y: 250 }, data: { label: 'Declaraciones de Variables' } },
                  { id: '2-type', type: 'reveal', position: { x: 650, y: 250 }, data: { label: 'Tipos de Datos' } }
              ];
              const newEdges = [
                  { id: 'e2-decl', source: '2', target: '2-decl', type: 'smoothstep', animated: true, style: { stroke: '#ffaa00' } },
                  { id: 'e2-type', source: '2', target: '2-type', type: 'smoothstep', animated: true, style: { stroke: '#ffaa00' } }
              ];
              setNodes(nds => [...nds, ...newNodes]);
              setEdges(eds => [...eds, ...newEdges]);
              setTimeout(() => fitView({ duration: 800, padding: 0.2 }), 100);
          }
      }

      // 3. Revelación de "Declaraciones" (var, let, const)
      if (node.id === '2-decl') {
          if (!nodes.find(n => n.id === 'var')) {
              const newNodes = [
                  { id: 'var', type: 'clickable', position: { x: -50, y: 380 }, data: { label: 'var', category: 'declarations', itemKey: 'var' } },
                  { id: 'let', type: 'clickable', position: { x: 150, y: 380 }, data: { label: 'let', category: 'declarations', itemKey: 'let' } },
                  { id: 'const', type: 'clickable', position: { x: 350, y: 380 }, data: { label: 'const', category: 'declarations', itemKey: 'const' } }
              ];
              const newEdges = [
                  { id: 'edecl-var', source: '2-decl', target: 'var', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  { id: 'edecl-let', source: '2-decl', target: 'let', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  { id: 'edecl-const', source: '2-decl', target: 'const', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } }
              ];
              setNodes(nds => [...nds, ...newNodes]);
              setEdges(eds => [...eds, ...newEdges]);
              setTimeout(() => fitView({ duration: 800, padding: 0.2 }), 100);
          }
      }

      // 4. Revelación de "Tipos de Datos" (number, string, etc.)
      if (node.id === '2-type') {
          if (!nodes.find(n => n.id === 'number')) {
              const newNodes = [
                  { id: 'number', type: 'clickable', position: { x: 450, y: 380 }, data: { label: 'Number', category: 'types', itemKey: 'number' } },
                  { id: 'string', type: 'clickable', position: { x: 550, y: 460 }, data: { label: 'String', category: 'types', itemKey: 'string' } },
                  { id: 'boolean', type: 'clickable', position: { x: 650, y: 380 }, data: { label: 'Boolean', category: 'types', itemKey: 'boolean' } },
                  { id: 'undefined', type: 'clickable', position: { x: 750, y: 460 }, data: { label: 'Undefined', category: 'types', itemKey: 'undefined' } },
                  { id: 'null', type: 'clickable', position: { x: 850, y: 380 }, data: { label: 'Null', category: 'types', itemKey: 'null' } },
                  
                  // Nodo especial para Ejercicios
                  { id: 'exercises', type: 'action', position: { x: 650, y: 560 }, data: { label: 'Ir a Ejercicios' } }
              ];
              const newEdges = [
                  { id: 'etype-number', source: '2-type', target: 'number', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  { id: 'etype-string', source: '2-type', target: 'string', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  { id: 'etype-boolean', source: '2-type', target: 'boolean', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  { id: 'etype-undefined', source: '2-type', target: 'undefined', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  { id: 'etype-null', source: '2-type', target: 'null', type: 'smoothstep', animated: true, style: { stroke: '#ff0072' } },
                  // Conectamos cada tipo hacia el nodo de ejercicios para que todo fluya hacia el final!
                  ...['number', 'string', 'boolean', 'undefined', 'null'].map(key => ({
                      id: `e-${key}-ex`, source: key, target: 'exercises', type: 'step', style: { stroke: '#444' }
                  }))
              ];
              setNodes(nds => [...nds, ...newNodes]);
              setEdges(eds => [...eds, ...newEdges]);
              setTimeout(() => fitView({ duration: 800, padding: 0.2 }), 100);
          }
      }

  }, [nodes, fitView]);

  // Datos actuáles para el panel dependiendo de su estado
  const currentDataInfo = activePanel 
      ? (activePanel.category === 'declarations' ? declarations[activePanel.key] : types[activePanel.key]) 
      : null;

  return (
    <div style={{ display: 'flex', width: '100vw', height: 'calc(100vh - 80px)', position: 'relative' }}>
      
      {/* MAPA PRINCIPAL */}
      <div style={{ flex: 1, height: '100%' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            fitView
            colorMode="dark"
          >
            <Background variant="lines" gap={40} size={1} color="#1a1a1a" />
            <Controls />
          </ReactFlow>
      </div>

      {/* PANEL LATERAL DE PROFUNDIDAD */}
      {activePanel && currentDataInfo && (
          <div style={{
              width: '40%',
              maxWidth: '500px',
              height: '100%',
              background: '#0d0d0d',
              borderLeft: '1px solid #333',
              boxShadow: '-5px 0 15px rgba(0,0,0,0.5)',
              overflowY: 'auto',
              position: 'relative',
              animation: 'slideIn 0.3s ease-out'
          }}>
              {/* Botones de control del Panel */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #222' }}>
                  <span style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase' }}>
                    {activePanel.category === 'declarations' ? "Declaraciones" : "Tipos de Datos"}
                  </span>
                  <button 
                      onClick={() => setActivePanel(null)}
                      style={{ padding: '5px 10px', background: 'transparent', color: '#ff0072', border: '1px solid #ff0072', borderRadius: '4px', cursor: 'pointer' }}
                  >
                      ✖ Cerrar
                  </button>
              </div>
              
              <div style={{ padding: '20px' }}>
                  <h1 style={{ color: '#fff', fontSize: '28px', margin: '0 0 10px 0' }}>{currentDataInfo.title}</h1>
                  <p style={{ color: '#b3b3b3', lineHeight: '1.6', fontSize: '15px', marginBottom: '30px' }}>
                      {currentDataInfo.description}
                  </p>
                  
                  {/* Vista de Código importada puramente! */}
                  <h4 style={{ color: '#fff', marginBottom: '10px' }}>Ejemplo de uso:</h4>
                  <ViewCode code={currentDataInfo.code} />
                  
                  <div style={{ marginTop: '40px', padding: '15px', background: 'rgba(255, 0, 114, 0.1)', border: '1px dashed #ff0072', borderRadius: '8px' }}>
                       <p style={{ margin: 0, color: '#ffaaaa', fontSize: '13px' }}>
                          ℹ️ Navega por el mapa de la izquierda presionando los diferentes botones para cambiar el contenido de este panel instantáneamente.
                       </p>
                  </div>
              </div>
          </div>
      )}

      {/* RUTA SECRETA DE EJERCICIOS (Solo activa al dar click en el nodo de Ejercicio verde) */}
      <style>{`
        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

const MapPage = () => (
    <ReactFlowProvider>
        <MapLogic />
    </ReactFlowProvider>
);

export default MapPage;
