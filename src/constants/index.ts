import {type Edge, type Node} from "@xyflow/react"
import TextUpdaterNode from "../Components/nodes/TextUpdaterNode"
import CustomEdge from "../Components/edges/CustomEdge"
// import { label } from "framer-motion/client"

export const NodeType = {
    textUpdater:TextUpdaterNode
}

export const EdgeType = {
    customEdge: CustomEdge
}

export const initialEdges: Edge[] = [
    {
        id:"e1-2",
        source:"1",
        target: "2",
        label:"input to other node",
        // type:"step"
    },
    {
        id:"e2-3",
        source:"2",
        target:"3",
        // animated:true,
        label:"from other node to output",
        // type:"step"
    }

]
export const initialNodes: Node[] = [
    {
        id:'1',
        type:'input',
        data:{
            label:'Input Node'
        },
        position:{x:250, y:25},
        style:{
            backgroundColor:"Green"
        }
    },
    {
        id:'2',
        data:{label:'Default Node'},
        position:{x:100, y:125},
        style:{
            backgroundColor:"brown"
        }
    },
    {
        id:'3',
        type:"output",
        data:{label:"Output Node"},
        position:{x:250, y:250},
        style:{
            backgroundColor:"blue"
        }
    },
    {
        id:'4',
        type:"textUpdater",
        data:{
            label:"Custom Node"
        },
        position:{x:260, y:350},
    }
]