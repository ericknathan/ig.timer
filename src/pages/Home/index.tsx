import { useForm, FormProvider } from 'react-hook-form';
import { z as zod } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Play, HandPalm } from 'phosphor-react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { Countdown, NewCycleForm } from './components';
import { useCycles } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo deve ser maior ou igual a 5 minutos')
    .max(60, 'O ciclo deve ser menor ou igual a 60 minutos'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useCycles();
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    reset: clearForm,
  } = newCycleForm;

  const minutesAmountValue = watch('minutesAmount');
  const taskValue = watch('task');
  const isSubmitDisabled =
    (!!errors && Object.keys(errors).length > 0) ||
    !minutesAmountValue ||
    !taskValue.trim();

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    clearForm();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
