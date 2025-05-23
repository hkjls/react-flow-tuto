import { 
    BaseEdge, 
    getStraightPath, 
    getBezierPath, 
    getSmoothStepPath,
    EdgeLabelRenderer,
    useReactFlow
} from "@xyflow/react";
import type { EdgeProps } from "@xyflow/react";
import { use, type ReactElement } from "react";

const CustomEdge=({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY
}:EdgeProps):ReactElement=>{
    const {setEdges} = useReactFlow()
    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY
    })

    return(
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                <button
                    style={{
                        position:'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                        pointerEvents:'all'
                    }}
                    onClick={()=>setEdges((edges)=>edges.filter((e)=>e.id !== id))}
                >
                    -
                </button>
            </EdgeLabelRenderer>
        </>
    )
}

export default CustomEdge