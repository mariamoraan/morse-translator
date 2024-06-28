import { createBrowserRouter } from 'react-router-dom';
import { Urls } from './urls';
import { TranslatorPage } from '@/features/translator/delivery/pages/translator.page';

export const AppRouting = createBrowserRouter([
  {
    path: Urls.HOME,
    element: <TranslatorPage />,
  },
]);
