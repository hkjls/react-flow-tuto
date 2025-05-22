import type { ReactElement} from "react"
import {useCallback, useState} from "react"
import '@xyflow/react/dist/style.css'
import type { Node, Edge, Connection, BackgroundVariant} from "@xyflow/react";
import { 
    ReactFlow, 
    useEdgesState, 
    useNodesState, 
    addEdge, 
    MiniMap,
    Controls,
    Background,
    Panel } from "@xyflow/react";
import { initialNodes, initialEdges } from "../constants";

import { Box } from "@chakra-ui/react";

const Home=():ReactElement=>{
    const [nodes, seNodes, onNodesChange] = useNodesState<Node>(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges)

    const onConnect = useCallback((connection:Connection)=>{
        setEdges((eds)=>addEdge({
            ...connection,
            animated:true
        }, eds))
    }, [setEdges])

    const nodeColor = (node:Node)=>{
        switch(node.type){
            case 'input':
                return "green";
            case 'output':
                return "blue";
            default:
                return "brown"
        }
    }

    const [variant, setVariant] = useState<any>('dots')

    return(
        <Box
            height="100vh"
            width="100vw"
            border="1px solid black"
            position="relative"
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <MiniMap 
                    nodeColor={nodeColor} 
                    nodeStrokeWidth={3} 
                    zoomable 
                    pannable 
                    position="top-left"
                ></MiniMap>
                <Controls/>
                <Background color="#ccc" variant={variant} />
                <Panel position="top-right">
                    <div style={{display:"flex", gap:"15px"}}>
                        <button onClick={()=>setVariant('dots')}>dots</button>
                        <button onClick={()=>setVariant('cross')}>cross</button>
                        <button onClick={()=>setVariant('lines')}>lines</button>
                    </div>
                </Panel>
            </ReactFlow>
        </Box>
    )
}

export default Home