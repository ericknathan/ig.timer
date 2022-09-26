import { produce } from 'immer';

import { ActionTypes } from './actions';

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycleList: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(currentState: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(currentState, (draft) => {
        draft.cycleList.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = currentState.cycleList.findIndex(
        (cycle) => cycle.id === currentState.activeCycleId,
      );

      if (currentCycleIndex < 0) return currentState;

      return produce(currentState, (draft) => {
        draft.activeCycleId = null;
        draft.cycleList[currentCycleIndex].finishedDate = new Date();
      });
    }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = currentState.cycleList.findIndex(
        (cycle) => cycle.id === currentState.activeCycleId,
      );

      if (currentCycleIndex < 0) return currentState;

      return produce(currentState, (draft) => {
        draft.activeCycleId = null;
        draft.cycleList[currentCycleIndex].interruptedDate = new Date();
      });
    }
    default:
      return currentState;
  }
}
