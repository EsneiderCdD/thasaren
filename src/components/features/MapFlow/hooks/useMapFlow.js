import { useState, useCallback } from 'react';
import { 
    applyNodeChanges, 
    applyEdgeChanges, 
    useReactFlow 
} from '@xyflow/react';

import { initialNodes, initialEdges } from '../data/initialElements';
import { getBranchContent } from '../data/branchData';
import { getSavedPositions, saveNodePosition } from '../utils/storage';
import { getThemeStyles } from '../utils/flowUtils';

export const useMapFlow = () => {
    const { fitView } = useReactFlow();
    const { edgeAnimatedStyle } = getThemeStyles();

    const applyPersistence = useCallback((newNodes) => {
        const saved = getSavedPositions();
        return newNodes.map(node => ({
            ...node,
            position: saved[node.id] || node.position
        }));
    }, []);

    // --- ESTADOS ---
    const [nodes, setNodes] = useState(() => applyPersistence(initialNodes));
    const [edges, setEdges] = useState(initialEdges.map(e => ({...e, style: edgeAnimatedStyle})));
    const [activePanel, setActivePanel] = useState(null); 

    // --- MANEJADORES DE EVENTOS ---
    
    const onNodesChange = useCallback((changes) => {
        setNodes((nds) => applyNodeChanges(changes, nds));
    }, []);

    const onEdgesChange = useCallback((changes) => {
        setEdges((eds) => applyEdgeChanges(changes, eds));
    }, []);

    const onNodeDragStop = useCallback((event, node) => {
        saveNodePosition(node.id, node.position);
    }, []);

    const onClosePanel = useCallback(() => {
        setActivePanel(null);
        setNodes(nds => nds.map(n => ({...n, selected: false})));
    }, []);

    const onNodeClick = useCallback((event, node) => {
        if (node.type === 'clickable') {
            setActivePanel({ category: node.data.category, key: node.data.itemKey });
            setNodes(nds => nds.map(n => ({ ...n, selected: n.id === node.id })));
            return;
        }

        const branch = getBranchContent(node.id);
        if (branch) {
            const branchNodes = branch.nodes.filter(bn => !nodes.find(n => n.id === bn.id));
            if (branchNodes.length > 0) {
                const persistentNodes = applyPersistence(branchNodes);
                setNodes(nds => [...nds, ...persistentNodes]);
                setEdges(eds => [...eds, ...branch.edges]);
                setTimeout(() => fitView({ duration: 800, padding: 0.2 }), 50);
            }
        }
    }, [nodes, fitView, applyPersistence]);

    return {
        nodes,
        edges,
        activePanel,
        onNodesChange,
        onEdgesChange,
        onNodeDragStop,
        onNodeClick,
        onClosePanel
    };
};
