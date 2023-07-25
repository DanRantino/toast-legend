import { toast } from '../hooks/toast';
import { cn } from '../utils/utils';
import { ReactNode } from 'react';

export type ToastType = {
  id: string;
  type: 'alert-info' | 'alert-success' | 'alert-error' | 'alert-warning';
  icon?: ReactNode;
  title?: string;
  description: string;
  action?: ReactNode[];
};

function Toast({ id, type, description, icon, title, action }: ToastType): ReactNode {
  const handleDeleteToast = () => {
    const toasts = toast.toasts.get();
    const t = toasts.filter((v: ToastType) => v.id !== id);
    toast.toasts.set(t);
  };
  setTimeout(() => handleDeleteToast(), 3000);
  return (
    <div className={cn('alert shadow-lg', type)}>
      {title === undefined && <span>{description}</span>}
      {title !== undefined && (
        <>
          {icon && icon}
          <div>
            <h3 className="font-bold">{title}</h3>
            <div className="text-xs">{description}</div>
          </div>
          {action && action}
        </>
      )}
    </div>
  );
}

export default Toast;
