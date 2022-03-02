import { FunctionComponent, useEffect, useState } from "react";
import { Redirect } from "react-router";
import AccountService, {
  ClassDataResponse,
} from "../../services/account.service";
import { useStoreState } from "../../stores/index.store";
import { Button } from "../global/button";
import EditProfileModal from "./editprofile";

interface MyAccountProps {}

const MyAccount: FunctionComponent<MyAccountProps> = () => {
  const account = useStoreState((state) => state.accounts.account);

  const [classList, setClasses] = useState<ClassDataResponse | null>(null);
  const [showEditProfile, setShowEditProfile] = useState(false);

  useEffect(() => {
    const getClasses = async () => {
      const classes = await AccountService.getClasses();
      setClasses(classes);
    };
    getClasses();
  }, []);

  if (!account) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: "/myaccount" } }} />
    );
  }

  return (
    <div className="site-main">
      <div className="bg-secondary p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          <div className="flex flex-col items-center justify-between">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-full">
              <div className="flex justify-between">
                <div className="flex">
                  {account?.avatar && (
                    <span className="pr-4">
                      <img
                        src={account.avatar as unknown as string}
                        alt={account?.first_name}
                        className="w-24 h-24 rounded-full max-w-max"
                      />
                    </span>
                  )}
                  <h1 className="text-2xl pt-3">
                    {account.first_name} {account.last_name}
                    <br />
                    <p className="text-[18px] text-gray-500">{account.email}</p>
                  </h1>
                </div>
                <h1 className="text-2xl pt-3 text-gray-500 capitalize">
                  {account.type}
                </h1>
              </div>
            </div>
            <hr className="border-b-1 border-coolGray-400 w-full pt-2 mt-2" />
            <div className="flex flex-col justify-start items-start w-full">
              <div className="w-1/2">
                <h1 className="text-2xl pt-3">My Classes</h1>
                <div className="flex flex-col w-full">
                  <div className="text-2xl pt-3">
                    {classList &&
                    classList.data.student &&
                    classList.data.student.length > 0 ? (
                      <div className="divide-y">
                        {classList.data.student?.map((classData) => (
                          <div key={classData.id}>
                            <h1 className="text-xl rounded-md shadow-lg p-4 mb-4">
                              {classData.name}
                            </h1>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <h1 className="text-[18px]">No classes found.</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button
              text="Edit Profile"
              formSubmit={false}
              onClick={() => setShowEditProfile(true)}
              classes="w-32 text-center"
            ></Button>
          </div>
        </div>
      </div>
      {showEditProfile && <EditProfileModal closeModal={() => setShowEditProfile(false)} />}
    </div>
  );
};

export default MyAccount;
