import React, { createContext, useState, useContext } from 'react';

interface MoneyContextProps {
  money: number;
  spendMoney: (amount: number) => void;
  earnMoney: (amount: number) => void;
}

const MoneyContext = createContext<MoneyContextProps | undefined>(undefined);

export const MoneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [money, setMoney] = useState(230900000000);

  const spendMoney = (amount: number) => {
    setMoney((prevMoney) => prevMoney - amount);
  };

  const earnMoney = (amount: number) => {
    setMoney((prevMoney) => prevMoney + amount);
  };

  return (
    <MoneyContext.Provider value={{ money, spendMoney, earnMoney }}>
      {children}
    </MoneyContext.Provider>
  );
};

export const useMoney = () => {
  const context = useContext(MoneyContext);
  if (context === undefined) {
    throw new Error('useMoney must be used within a MoneyProvider');
  }
  return context;
};
