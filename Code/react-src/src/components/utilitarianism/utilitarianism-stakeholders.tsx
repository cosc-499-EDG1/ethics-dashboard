import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface UtilitarianismStakeholdersProps {}

const stakeholderItems = [
    {
        id: '0',
        option: 'Stakeholder 1',
        optionName: 'Stakeholder 1 (Inputed from Stakeholders page)',
    },
    {
        id: '1',
        option: 'Stakeholder 2',
        optionName: 'Stakeholder 2 (Inputed from Stakeholders page)',
    },
    {
        id: '2',
        option: 'Stakeholder 3',
        optionName: 'Stakeholder 3 (Inputed from Stakeholders page)',
    }
];

const UtilitarianismStakeholders: FunctionComponent<UtilitarianismStakeholdersProps> = () => {
    const [stakeholders, updateStakeholders] = useState(stakeholderItems);

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const items = Array.from(stakeholders);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateStakeholders(items);
    }
    return (
        <div className="site-dashboard">
            <DragDropContext onDragEnd={handleOnDragEnd}>
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
                    {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {stakeholders.map(({id, option, optionName}, index) => {
                            return (
                            <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                                <li>
                                    <div className="dashboard-drag" ref={provided.innerRef} {...provided.draggableProps}>
                                        <img className="w-10" src={`${process.env.PUBLIC_URL}dragging.png`} alt="dragging.png" {...provided.dragHandleProps}></img>
                                        <label className="text-3xl font-bold">
                                            {option}
                                            <p className="w-full border-none font-normal text-xl bg-gray-300 my-1 p-3">
                                                {optionName}
                                            </p>
                                            <textarea rows={5} className="w-full border-none" placeholder="Provide Reasoning...">
                                            </textarea>
                                        </label>
                                    </div>
                                </li>
                            )}
                            </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-options">Go Back</Link>
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-pleasure">Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default UtilitarianismStakeholders;