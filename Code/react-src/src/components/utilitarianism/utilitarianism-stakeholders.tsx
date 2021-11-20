import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface UtilitarianismStakeholdersProps {}

const UtilitarianismStakeholders: FunctionComponent<UtilitarianismStakeholdersProps> = () => {
    return(
        <div className="site-dashboard">
            <DragDropContext onDragEnd={(...props)=>{console.log(props)}}>
                <div className="dashboard-title">
                    <div className="dashboard-title-text">
                        <h1>Utilitarianism</h1>
                    </div>
                    <div className="dashboard-title-description">
                        <p>
                        Provide reasons why you have included each stakeholder. Move stakeholders up or down to rank according to the 
                        degree of impact. (Stakeholder 1 experiences the highest impact) Note: You may want to removed stakeholders if you 
                        can’t identify how they will be impacted or if there is very little impact. Also, you may add stakeholders at any time.
                        </p>
                    </div>
                </div>
                <div className="pt-30">
                    <p>
                        
                    </p>
                </div>
                <Droppable droppableId="droppable-1">
                    {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Draggable draggableId={"draggable-1"} index={0}>
                        {(provided, snapshot) => (
                            <div className="dashboard-drag" ref={provided.innerRef} {...provided.draggableProps}>
                                <img className="w-10" src={`${process.env.PUBLIC_URL}dragging.png`} alt="dragging.png" {...provided.dragHandleProps}></img>
                                <label className="text-3xl font-bold">
                                    Option 1
                                    <p className="w-full border-none font-normal text-xl bg-gray-300 my-1 p-3">
                                        Option 1 (Inputed from Ethical Issues page)
                                    </p>
                                    <textarea rows={5} className="w-full border-none" placeholder="Short-term consequences...">
                                    </textarea>
                                    <textarea rows={5} className="w-full border-none" placeholder="Long-term consequences...">
                                    </textarea>
                                </label>
                            </div>
                        )}
                        </Draggable>
                        <Draggable draggableId={"draggable-2"} index={1}>
                        {(provided, snapshot) => (
                            <div className="dashboard-drag" ref={provided.innerRef} {...provided.draggableProps}>
                                <img className="w-10" src={`${process.env.PUBLIC_URL}dragging.png`} alt="dragging.png" {...provided.dragHandleProps}></img>
                                <label className="text-3xl font-bold">
                                    Option 2
                                    <p className="w-full border-none font-normal text-xl bg-gray-300 my-1 p-3">
                                        Option 2 (Inputed from Ethical Issues page)
                                    </p>
                                    <textarea rows={5} className="w-full border-none" placeholder="Short-term consequences...">
                                    </textarea>
                                    <textarea rows={5} className="w-full border-none" placeholder="Long-term consequences...">
                                    </textarea>
                                </label>
                            </div>
                        )}
                        </Draggable>
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );

};

export default UtilitarianismStakeholders;