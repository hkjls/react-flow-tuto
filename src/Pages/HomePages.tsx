import type { ReactElement} from "react"
import {useState, useCallback} from "react"
import '@xyflow/react/dist/style.css'
import type { Node,Edge} from "@xyflow/react";
import { ReactFlow, applyEdgeChanges, applyNodeChanges } from "@xyflow/react";
import { initialNodes, initialEdges } from "../constants";

import { Box } from "@chakra-ui/react";

const Home=():ReactElement=>{
    var [nodes, setNodes] = useState<Node[]>(initialNodes)
    var [edges, setEdges]= useState<Edge[]>(initialEdges)

    const onNodesChange = useCallback((changes:any)=>{
        setNodes((nds)=>applyNodeChanges(changes, nds))
    },[setNodes])

    const onEdgesChange = useCallback((changes:any)=>{
        setEdges((eds)=>applyEdgeChanges(changes, eds))
    }, [setEdges])

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
            >
            </ReactFlow>
        </Box>
    )
}

export default Home