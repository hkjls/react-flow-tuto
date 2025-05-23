import {type ReactElement } from "react";
import { Handle, Position } from "@xyflow/react";

const TextUpdaterNode=({data}:{data:any}):ReactElement=>{


    return(
        <div id="textUpdater">
            <Handle type="target" position={Position.Top} id="a"/>
                <div>
                    <label htmlFor="text">Text:</label>
                    <input type="text" name="text" />
                </div>
            <Handle type="source" position={Position.Bottom} id="b" />
            <Handle type="source" position={Position.Bottom} id="c" style={{left:10}}/>
        </div>
    )
}

export default TextUpdaterNode