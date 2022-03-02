import React, { FunctionComponent } from "react";

interface VirtueEthicsCharacterInputProps {
    character: {
        id: number;
        prompt: string;
        excess: string;
        mean: string;
        deficiency: string;
    }
}

const VirtueEthicsCharacterInput: FunctionComponent<VirtueEthicsCharacterInputProps> =
  ({character}) => {
    return (
      <form>
        <div className="w-6/6 border-none font-normal bg-gray-300 my-1 p-3">
          <p className="text-xl">Option {character.id}</p>
          <p className="text-sm">
            {character.prompt}
          </p>
        
        
        <div className="w-6/6 h-28 my-2 flex justify-center items-center bg-white">         
          <div className="flex flex-col space-y-2 p-2 w-80">
            <input type="range" className= "w-150" min="1" max="10" defaultValue="5" />
                <ul className="flex justify-between w-full px-[2px] text-sm">
                    <li className="flex justify-center relative"><span className="absolute">{character.excess}</span></li>
                    <li className="flex justify-center relative"><span className="absolute">{character.mean}</span></li>
                    <li className="flex justify-center relative"><span className="absolute">{character.deficiency}</span></li>
                </ul>          
          </div>
        </div>
        </div>
      </form>
    );
  };

export default VirtueEthicsCharacterInput;
