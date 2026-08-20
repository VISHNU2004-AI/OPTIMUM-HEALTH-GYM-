import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageRoute } from '../types';

interface RouterContextType {
  currentPath: PageRoute;
  navigate: (path: PageRoute) => void;
  isTrialModalOpen: boolean;
  openTrialModal: (initialGoal?: string) => void;
  closeTrialModal: () => void;
  selectedGoalForModal: string;
}

const PAGE_ROUTES: PageRoute[] = [
  '/',
  '/about',
  '/services/personal-training',
  '/services/weight-loss',
  '/services/strength-conditioning',
  '/services/diet-nutrition',
  '/pricing',
  '/gallery',
  '/faq',
  '/contact',
];

const getValidPath = (): PageRoute => {
  const path = window.location.pathname;
  return PAGE_ROUTES.includes(path as PageRoute) ? (path as PageRoute) : '/';
};

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<PageRoute>(getValidPath);

  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedGoalForModal, setSelectedGoalForModal] = useState('General Fitness & Trial');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getValidPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: PageRoute) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openTrialModal = (initialGoal?: string) => {
    if (initialGoal) setSelectedGoalForModal(initialGoal);
    setIsTrialModalOpen(true);
  };

  const closeTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        isTrialModalOpen,
        openTrialModal,
        closeTrialModal,
        selectedGoalForModal,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
