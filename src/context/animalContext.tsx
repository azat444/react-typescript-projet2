import React, { useState } from "react";
import { AnimalType } from "../util/AnimalDataType";
import { PropsWithChildren } from "react";

type AnimalContextType = {
  animal: AnimalType | null;
  saveAnimal: (animal: AnimalType) => void;
};

export const AnimalContext = React.createContext<AnimalContextType>({
  animal: null,
  saveAnimal: () => {},
});

export const AnimalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [animal, setAnimal] = useState<AnimalType | null>(null);

  const saveAnimal = (animal: AnimalType) => {
    setAnimal(animal);
    console.log("Saved To Context");
  };

  return (
    <AnimalContext.Provider value={{ animal, saveAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
