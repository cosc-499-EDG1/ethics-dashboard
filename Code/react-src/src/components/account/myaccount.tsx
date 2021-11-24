import { FunctionComponent } from "react";
import { Redirect } from "react-router";
import { useStoreState } from "../../stores/index.store";

interface MyAccountProps {}

const MyAccount: FunctionComponent<MyAccountProps> = () => {
    const account = useStoreState((state) => state.accounts.account);
    if (!account) {
        return <Redirect to={{ pathname: "/login", state: { from: "/myaccount" } }} />;
    }
    return (
    <div className="site-main">
      <div className="bg-yellow-200 p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b ">
                <table className="min-w-full divide-y">
                  <tbody className="bg-yellow-100">
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Username
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {account.username}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Email
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {account.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        First Name
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text
                        -gray-500">
                        {account.first_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Last Name
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {account.last_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Type
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {account.type}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
