import { useState, useCallback, useRef } from 'react';
import type { ScreenId, OptionId } from './data';
import { SCREENS, TOTAL_STEPS, getNextScreen } from './data';

export type Direction = 'forward' | 'backward';

export interface OnboardingHook {
  currentScreenId: ScreenId;
  history: ScreenId[];
  answers: Partial<Record<ScreenId, OptionId>>;
  progress: number;
  direction: Direction;
  canGoBack: boolean;
  goNext: (answer?: OptionId) => void;
  goBack: () => void;
  selectAnswer: (questionId: ScreenId, optionId: OptionId) => void;
  getAnswer: (questionId: ScreenId) => OptionId | undefined;
}

export function useOnboarding(): OnboardingHook {
  // Use ref to avoid stale closures in goNext/goBack callbacks
  const currentScreenIdRef = useRef<ScreenId>('welcome');
  const [currentScreenId, setCurrentScreenIdState] = useState<ScreenId>('welcome');
  const [history, setHistory] = useState<ScreenId[]>([]);
  const [answers, setAnswers] = useState<Partial<Record<ScreenId, OptionId>>>({});
  const [direction, setDirection] = useState<Direction>('forward');

  const setCurrentScreenId = useCallback((id: ScreenId) => {
    currentScreenIdRef.current = id;
    setCurrentScreenIdState(id);
  }, []);

  const progress = Math.min(
    Math.round((SCREENS[currentScreenId].step / TOTAL_STEPS) * 100),
    100
  );

  const goNext = useCallback((answer?: OptionId) => {
    const curr = currentScreenIdRef.current;
    setDirection('forward');
    setHistory(prev => [...prev, curr]);
    setCurrentScreenId(getNextScreen(curr, answer));
  }, [setCurrentScreenId]);

  const goBack = useCallback(() => {
    setHistory(prev => {
      if (prev.length === 0) return prev;
      const next = [...prev];
      const target = next.pop()!;
      setDirection('backward');
      setCurrentScreenId(target);
      return next;
    });
  }, [setCurrentScreenId]);

  const selectAnswer = useCallback((questionId: ScreenId, optionId: OptionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  }, []);

  const getAnswer = useCallback((questionId: ScreenId): OptionId | undefined => {
    return answers[questionId];
  }, [answers]);

  return {
    currentScreenId,
    history,
    answers,
    progress,
    direction,
    canGoBack: history.length > 0,
    goNext,
    goBack,
    selectAnswer,
    getAnswer,
  };
}