import React from 'react';
import { Handle, Position } from '@xyflow/react';
import styles from './styles/Nodes.module.css';

const sharedHandleStyle = { background: 'var(--gray-20)', width: '6px', height: '6px', border: 'none' };

export const RootNode = ({ data }) => (
    <div className={styles.rootNode}>
        {/* Top Handles */}
        <Handle type="source" position={Position.Top} id="top-1" style={{ ...sharedHandleStyle, left: '25%' }} />
        <Handle type="source" position={Position.Top} id="top-2" style={{ ...sharedHandleStyle, left: '50%' }} />
        <Handle type="source" position={Position.Top} id="top-3" style={{ ...sharedHandleStyle, left: '75%' }} />

        {/* Right Handles */}
        <Handle type="source" position={Position.Right} id="right-1" style={{ ...sharedHandleStyle, top: '25%' }} />
        <Handle type="source" position={Position.Right} id="right-2" style={{ ...sharedHandleStyle, top: '50%' }} />
        <Handle type="source" position={Position.Right} id="right-3" style={{ ...sharedHandleStyle, top: '75%' }} />

        {/* Bottom Handles */}
        <Handle type="source" position={Position.Bottom} id="bottom-1" style={{ ...sharedHandleStyle, left: '25%' }} />
        <Handle type="source" position={Position.Bottom} id="bottom-2" style={{ ...sharedHandleStyle, left: '50%' }} />
        <Handle type="source" position={Position.Bottom} id="bottom-3" style={{ ...sharedHandleStyle, left: '75%' }} />

        {/* Left Handles */}
        <Handle type="source" position={Position.Left} id="left-1" style={{ ...sharedHandleStyle, top: '25%' }} />
        <Handle type="source" position={Position.Left} id="left-2" style={{ ...sharedHandleStyle, top: '50%' }} />
        <Handle type="source" position={Position.Left} id="left-3" style={{ ...sharedHandleStyle, top: '75%' }} />

        <div>{data.label}</div>
    </div>
);


export const RevealNode = ({ data }) => (
    <div className={styles.revealNode}>
        <Handle type="target" position={Position.Top} id="target" style={sharedHandleStyle} />
        <div>{data.label}</div>
        <Handle type="source" position={Position.Bottom} id="source" style={sharedHandleStyle} />
    </div>
);

export const ClickableNode = ({ data, selected }) => (
    <div className={`${styles.clickableNode} ${selected ? styles.clickableNodeSelected : ''}`}>
        <Handle type="target" position={Position.Top} id="target" style={sharedHandleStyle} />
        <div>{data.label}</div>
        <Handle type="source" position={Position.Bottom} id="source" style={sharedHandleStyle} />
    </div>
);
