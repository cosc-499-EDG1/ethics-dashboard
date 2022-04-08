import { FunctionComponent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import StakeholderService from "../../services/stakeholder.service";
import { useStoreState } from "../../stores/index.store";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";
import DashboardService from "../../services/dashboard.service";
import { Button } from "../global/button";

interface UtilitarianismStakeholdersProps {}

const stakeholderItems = [
    {
        id: '0',
        option: 'Stakeholder 1',
        title: 'Stakeholder 1 (Inputed from Stakeholders page)',
        reason: "",
    },
    {
        id: '1',
        option: 'Stakeholder 2',
        title: 'Stakeholder 2 (Inputed from Stakeholders page)',
        reason: "",
    },
    {
        id: '2',
        option: 'Stakeholder 3',
        title: 'Stakeholder 3 (Inputed from Stakeholders page)',
        reason: "",
    }
];

const UtilitarianismStakeholders: FunctionComponent<UtilitarianismStakeholdersProps> = () => {
    const [stakeholders, setStakeholders] = useState(stakeholderItems);
    const [reasons, setReasons] = useState(["", ""]);
    const [redirect, setRedirect] = useState("");

    const setReasonsValue = (index: number, value: string) => {
        const newReasons = [...reasons];
        newReasons[index] = value;
        setReasons(newReasons);
    };

    const currentDashboard = useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const items = Array.from(stakeholders);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setStakeholders(items);
    }

    const queryClient = useQueryClient();
    
    const {isLoading, isError } = useQuery("stakeholders", async () => {
        return await StakeholderService.getStakeholders({id: currentDashboard});
    }, { onSuccess: (data) => {
        setStakeholders(data.data.stakeholders.map((o: Stakeholder) => {
            return{
                id: o.num,
                option: "Stakeholder " + o.num,
                title: o.title,
                reason: o.util_reason ?? "Provide Reasoning...",

            }
        }));
    }});


    const updateReasoning = useMutation(StakeholderService.updateReasoning, {
        onSuccess: () => {
            queryClient.invalidateQueries("dashboard");
          }, 
    });

    const attemptUpload = async () => {
        console.log(reasons.toString());
        const util_reasons = {
            reasoning: reasons,
        };

         await updateReasoning.mutateAsync({
            id: currentDashboard,
            updateType: "reasoning",
            ...util_reasons,
            });

        setRedirect('/utilitarianism-pleasure');
    };
    if (redirect) {
        return <Redirect to={{ pathname: redirect, state: { from: "/utilitarianism-stakeholders" } }} />;
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
                        degree of impact. (Stakeholder 1 experiences the highest impact) Note: You may want to remove stakeholders if you 
                        can’t identify how they will be impacted or if there is very little impact. Also, you may add stakeholders at any time.
                        </p>
                    </div>
                </div>
                <div className="dashboard-page">
                <Droppable droppableId="droppable-1">
                    {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {stakeholders.map(({id, option, title, reason}, index) => {
                            return (
                            <Draggable key={id} draggableId={id.toString()} index={index}>
                            {(provided) => (
                                <li>
                                    <div className="dashboard-block" ref={provided.innerRef} {...provided.draggableProps}>
                                        <div className="flex mb-4">
                                            <img className="w-10" src={`${process.env.PUBLIC_URL}dragging.png`} alt="dragging.png" {...provided.dragHandleProps}></img>
                                            <p className="dashboard-block-title ml-4">Rank: {index+1}</p>
                                        </div>
                                        <label className="dashboard-block-title">
                                            {option}
                                            <p className="dashboard-block-description">
                                                {title}
                                            </p>
                                            <textarea rows={5} className="dashboard-block-text-input"  placeholder={"Provide Reasoning..."} defaultValue={reason} onChange={(e) => {setReasonsValue(index, e.target.value)}}>
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
                </div>
            </DragDropContext>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-options">Go Back</Link>
                    </button>
                    <Button
                    text={"Submit"}
                    formSubmit={false}
                      onClick={() => attemptUpload()}
                    ></Button>
                </div>
            </div>
        </div>
    );

};

export default UtilitarianismStakeholders;

function setRedirect(arg0: string) {
    throw new Error("Function not implemented.");
}
