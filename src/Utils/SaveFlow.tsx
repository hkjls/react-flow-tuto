const onSave=(rfinstance:any, saveFlow:any)=>{
    if(rfinstance){
        const flow = rfinstance.toObject();
        saveFlow(flow)
    }
}

export default onSave