import React, { createContext, useContext, useState, ReactNode } from 'react';

type Unit = 'Celsius' | 'Fahrenheit';

interface UnitContextProps {
  unit: Unit;
  toggleUnit: () => void;
}

const UnitContext = createContext<UnitContextProps | undefined>(undefined);

export const useUnit = () => {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error('useUnit must be used within a UnitProvider');
  }
  return context;
};

interface UnitProviderProps {
  children: ReactNode; // This defines the type for children
}

export const UnitProvider: React.FC<UnitProviderProps> = ({ children }) => {
  const [unit, setUnit] = useState<Unit>('Celsius');

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
