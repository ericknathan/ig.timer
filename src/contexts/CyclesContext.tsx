import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { differenceInSeconds } from 'date-fns';

import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions';

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface DispatchData {
  type: ActionTypes;
  payload: any;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  cycleList: Cycle[];
  amountSecondsPassed: number;
  setSecondsPassed: (value: number) => void;
  createNewCycle: (data: NewCycleFormData) => void;
  interruptCurrentCycle: () => void;
  markCurrentCycleAsCompleted: () => void;
  dispatchCycleList: (action: DispatchData) => void;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextType);

const localStorageKey = '@ignite-timer:cycles-state-1.0.0';

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatchCycleList] = useReducer(
    cyclesReducer,
    {
      cycleList: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(localStorageKey);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        cycleList: [],
        activeCycleId: null,
      };
    },
  );

  const { cycleList, activeCycleId } = cyclesState;
  const activeCycle = cycleList.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem(localStorageKey, stateJSON);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const { task, minutesAmount } = data;

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    };

    dispatchCycleList(addNewCycleAction(newCycle));
    setSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatchCycleList(interruptCurrentCycleAction());
    setAmountSecondsPassed(0);
  }

  function markCurrentCycleAsCompleted() {
    dispatchCycleList(markCurrentCycleAsFinishedAction());
    setAmountSecondsPassed(0);
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        cycleList,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        markCurrentCycleAsCompleted,
        dispatchCycleList,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

export const useCycles = () => useContext(CyclesContext);
