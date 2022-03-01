import React, { FunctionComponent } from "react";

interface VirtueEthicsBallInputProps {
    ball: {
        id: number;
        name: string;
        color: string;
        
    }
}

const VirtueEthicsBallInput: FunctionComponent<VirtueEthicsBallInputProps> =
  ({ball}) => {
    return (
      <form>
        <div className="w-3/6 border-none font-normal bg-gray-300 my-1 p-3">
          <p className="text-xl">ball #{ball.id}</p> 
        </div>
        
        <div className="w-3/6 h-28 my-2 flex justify-center items-center bg-white">         
          <div className="flex flex-col space-y-2 p-2 w-80">
            <input type="range" className= "w-150" min="1" max="10" defaultValue="5" />
                <ul className="flex justify-between w-full px-[2px] text-sm">
                    <li className="flex justify-center relative"><span className="absolute">{ball.name}</span></li>
                    <li className="flex justify-center relative"><span className="absolute">{ball.color}</span></li>
                </ul>          
          </div>
        </div>
      </form>
    );
  };

export default VirtueEthicsBallInput;