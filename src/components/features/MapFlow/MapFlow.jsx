import React from 'react';
import { 
    ReactFlow, 
    Controls, 
    Background, 
    ReactFlowProvider 
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import SidePanel from '../SidePanel/SidePanel';
import { RootNode, RevealNode, ClickableNode } from './Nodes/CustomNodes';
import { useMapFlow } from './hooks/useMapFlow';
import { fitViewOptions } from './data/initialElements';
import { dataBase } from './data/mapData';
import { getThemeStyles } from './utils/flowUtils';
import styles from './styles/MapFlow.module.css';

const nodeTypes = { 
    root: RootNode, 
    reveal: RevealNode, 
    clickable: ClickableNode 
};

const MapFlowContent = () => {
    const { 
        nodes, edges, activePanel, 
        onNodesChange, onEdgesChange, 
        onNodeDragStop, onNodeClick, onClosePanel 
    } = useMapFlow();

    const { backgroundGridColor } = getThemeStyles();
    const currentDataInfo = activePanel ? dataBase[activePanel.category][activePanel.key] : null;

    return (
        <div className={styles.mapContainer}>
            <div className={styles.canvasWrapper}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
                onNodeDragStop={onNodeDragStop}
                fitView
                fitViewOptions={fitViewOptions}
              >
                <Background variant="lines" gap={30} size={1} color={backgroundGridColor} />
                <Controls />
              </ReactFlow>
            </div>

            <SidePanel 
                data={currentDataInfo} 
                categoryLabel={currentDataInfo?.categoryLabel} 
                onClose={onClosePanel} 
            />
        </div>
    );
};

const MapFlow = () => (
    <ReactFlowProvider>
        <MapFlowContent />
    </ReactFlowProvider>
);

export default MapFlow;
