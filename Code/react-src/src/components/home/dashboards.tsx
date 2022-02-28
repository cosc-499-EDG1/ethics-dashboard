import { FormEvent, FunctionComponent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "../global/button";
import { Form } from "../global/form";
import { FormInput } from "../global/forminput";

interface DashboardHomeProps {}

const DashboardHome: FunctionComponent<DashboardHomeProps> = () => {
  const [redirect, setRedirect] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editDashboardName, setEditDashboardName] = useState("");

  const handleCardClicked = (dashboardId: number) => {
    setRedirect(`/dashboard/${dashboardId}`);
  };

  const handleEditClick = () => {
    setShowDelete(false);
    setShowCreate(false);
    setShowEdit(true);
    setEditDashboardName("Dashboard Name");
  };

  const handleDeleteClick = () => {
    setShowEdit(false);
    setShowCreate(false);
    setShowDelete(true);
  };

  const handleCreateClick = () => {
    setShowEdit(false);
    setShowDelete(false);
    setShowCreate(true);
  };

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/login" } }} />;
  }

  return (
    <div className="site-main">
      <div className="bg-secondary p-5 flex items-center justify-center flex-col w-7/12 rounded-lg shadow-lg mt-24">
        <div className="w-full max-w-s">
          <h1 className="text-3xl font-bold text-center">My Dashboards</h1>
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          <DashboardCard
            clickHandler={handleCardClicked}
            editHandler={handleEditClick}
            deleteHandler={handleDeleteClick}
          />
          <CreateDashboardCard clickHandler={handleCreateClick} />
        </div>
      </div>

      {showCreate && (
        <CreateDashboardModal closeModal={() => setShowCreate(false)} />
      )}

      {showEdit && (
        <EditDashboardModal
          dashboardName={editDashboardName}
          closeModal={() => setShowEdit(false)}
        />
      )}

      {showDelete && (
        <DeleteDashboardModal closeModal={() => setShowDelete(false)} />
      )}
    </div>
  );
};

const dashboardCardClasses =
  "relative w-72 h-48 m-1 p-2 rounded-lg shadow-lg flex flex-col text-center justify-between hover:bg-warmGray-200 hover:text-warmGray-700 select-none cursor-pointer";

interface DashboardProps {
  clickHandler: Function;
  editHandler: Function;
  deleteHandler: Function;
}

const DashboardCard: FunctionComponent<DashboardProps> = (props) => {
  const handleDashboardClick = () => {
    console.log("clicked");
    props.clickHandler();
  };

  const handleEditClick = (e: MouseEvent) => {
    e.stopPropagation();
    console.log("clicked 2");
    props.editHandler();
  };

  const handleDeleteClick = (e: MouseEvent) => {
    e.stopPropagation();
    console.log("clicked 3");
    props.deleteHandler();
  };

  return (
    <div
      onClick={handleDashboardClick}
      className={`bg-white ${dashboardCardClasses}`}
    >
      <h1 className="text-2xl font-bold">Dashboard 1</h1>
      <h1 className="text-2xl font-bold absolute m-auto top-1/3 left-0 right-0 pointer-events-none">
        View
      </h1>
      <div className="flex flex-row flex-nowrap justify-center pointer-events-auto">
        <Button classes="m-1" text="Edit" onClick={handleEditClick} />
        <Button classes="m-1" text="Delete" onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

interface CreateDashboardProps {
  clickHandler: any;
}

const CreateDashboardCard: FunctionComponent<CreateDashboardProps> = (
  props
) => {
  return (
    <div
      className={`bg-warmGray-300 ${dashboardCardClasses}`}
      onClick={props.clickHandler}
    >
      <h1 className="text-2xl font-bold absolute m-auto left-0 right-0 pointer-events-none">
        New Dashboard
      </h1>
      <div className="flex items-center justify-center h-full w-full pointer-events-none">
        <h1 className="text-5xl font-bold">+</h1>
      </div>
    </div>
  );
};

interface EditDashboardModalProps {
  dashboardName: string;
  closeModal: Function;
}

const EditDashboardModal: FunctionComponent<EditDashboardModalProps> = (
  props
) => {
  const [dashboardName, setDashboardName] = useState(props.dashboardName);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Update dashboard name in store
    props.closeModal();
  };

  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div className="bg-white flex items-center justify-center rounded-lg shadow-lg absolute left-0 right-0 m-auto w-64 h-48">
      <Form
        inputs={[
          <FormInput
            label={"Dashboard Name"}
            type={"text"}
            placeholder={""}
            value={dashboardName}
            onChange={(e) => setDashboardName(e.target.value)}
          ></FormInput>,
        ]}
        actions={[
          <Button text={"Save"} formSubmit={true} />,
          <Button
            text={"Close"}
            classes="cursor-pointer user-select-none"
            onClick={handleClose}
          />,
        ]}
        isLoading={false}
        message={""}
        wasSuccess={false}
        onSubmit={handleSubmit}
      ></Form>
    </div>
  );
};

interface DeleteDashboardModalProps {
  closeModal: Function;
}

const DeleteDashboardModal: FunctionComponent<DeleteDashboardModalProps> = (
  props
) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Delete dashboard from user account (set deleted = true)
    props.closeModal();
  };

  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div className="bg-white flex flex-col items-center justify-around rounded-lg shadow-lg absolute t-1/3 left-0 right-0 m-auto w-64 h-48">
      <h1 className="text-2xl font-bold">Are you sure?</h1>
      <div className="w-48">
        <Form
          inputs={[]}
          actions={[
            <Button text={"Delete"} formSubmit={true} />,
            <Button
              text={"Close"}
              classes="cursor-pointer user-select-none"
              onClick={handleClose}
            />,
          ]}
          isLoading={false}
          message={""}
          wasSuccess={false}
          onSubmit={handleSubmit}
        ></Form>
      </div>
    </div>
  );
};

interface CreateDashboardModalProps {
  closeModal: Function;
}

const CreateDashboardModal: FunctionComponent<CreateDashboardModalProps> = (
  props
) => {
  const [dashboardName, setDashboardName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Create dashboard for user account
    props.closeModal();
  };

  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div className="bg-white flex flex-col items-center justify-around rounded-lg shadow-lg absolute t-1/3 left-0 right-0 m-auto w-64 h-48">
      <div className="w-48">
        <Form
          inputs={[
            <FormInput
              label={"New Dashboard Name"}
              type={"text"}
              placeholder={"Dashboard 1"}
              value={dashboardName}
              onChange={(e) => setDashboardName(e.target.value)}
            ></FormInput>,
          ]}
          actions={[
            <Button text={"Create"} formSubmit={true} />,
            <Button
              text={"Close"}
              classes="cursor-pointer user-select-none"
              onClick={handleClose}
            />,
          ]}
          isLoading={false}
          message={""}
          wasSuccess={false}
          onSubmit={handleSubmit}
        ></Form>
      </div>
    </div>
  );
};

export default DashboardHome;
