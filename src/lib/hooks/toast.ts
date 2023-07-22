import { ToastType } from '../components/toast';
import { observable } from '@legendapp/state';

export const toast = observable({
  toasts: [] as ToastType[],
});
