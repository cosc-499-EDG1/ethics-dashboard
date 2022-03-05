import { FormEvent, FunctionComponent, useState } from "react";
import { Button } from "../global/button";
import { Form } from "../global/form";
import { FormInput } from "../global/forminput";

interface EditProfileModalProps {
  closeModal: Function;
}

const EditProfileModal: FunctionComponent<EditProfileModalProps> = (props) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<any>();
  const [avatar, setAvatar] = useState<Blob>();

  var currentUpload: any;
  var fileReader: FileReader;
  const readFile = () => {
    const content = fileReader.result;
    currentUpload = content;
  };

  const handlePasswordChange = (e: FormEvent<HTMLFormElement>) => {
    // Update user account password
    if (!password || !newPassword || !confirmPassword) {
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordChanged(false);
      setPasswordMessage("New password and confirm password do not match.");
      return;
    }
    setIsLoading(true);
    setPasswordMessage("");
    setPasswordChanged(false);
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => {
      setPasswordChanged(true);
      setPasswordMessage("Saved!");
      setIsLoading(false);
    }, 5000);
    // props.closeModal();
  };

  const handleAvatarChange = (e: FormEvent<HTMLFormElement>) => {
    // Update user account avatar
    if (!avatar) return;

    fileReader = new FileReader();
    fileReader.onloadend = readFile;
    fileReader.readAsDataURL(avatar);

    setIsUploading(true);
    setUploadMessage("Uploading...");
    setTimeout(() => {
      setIsUploadSuccess(true);
      setUploadMessage(
        <div>
          <div>Uploaded!</div>
          <img
            alt="Profile"
            className="w-32 h-32 rounded-full m-auto"
            src={currentUpload}
          />
        </div>
      );
      setIsUploading(false);
    }, 5000);
  };

  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div className="bg-white flex items-center justify-between rounded-lg shadow-lg absolute t-1/3 left-0 right-0 m-auto w-128 p-5">
      <div className="w-1/2 h-72 flex flex-col items-center justify-center">
        <div className="m-2">
          <Form
            inputs={[
              <FormInput
                label={"Upload File"}
                type={"file"}
                placeholder={""}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setAvatar(e.target.files[0]);
                  }
                }}
              ></FormInput>,
            ]}
            actions={[
              <Button text={"Save"} formSubmit={true} />,
              <Button text={"Close"} onClick={handleClose} />,
            ]}
            isLoading={isUploading}
            message={uploadMessage}
            wasSuccess={isUploadSuccess}
            onSubmit={handleAvatarChange}
          ></Form>
        </div>
      </div>
      <div className="w-1/2">
        <Form
          inputs={[
            <FormInput
              label={"Current Password"}
              type={"password"}
              placeholder={"**********"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></FormInput>,
            <FormInput
              label={"New Password"}
              type={"password"}
              placeholder={"**********"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            ></FormInput>,
            <FormInput
              label={"Confirm New Password"}
              type={"password"}
              placeholder={"**********"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></FormInput>,
          ]}
          actions={[
            <Button text={"Update"} formSubmit={true} />,
            <Button text={"Close"} onClick={handleClose} />,
          ]}
          isLoading={isLoading}
          message={passwordMessage}
          wasSuccess={passwordChanged}
          onSubmit={handlePasswordChange}
        ></Form>
      </div>
    </div>
  );
};

export default EditProfileModal;
