'use client';

import { toast } from '../hooks/toast';
import Toast from './toast';
import { v4 } from 'uuid';
import { enableReactUse } from '@legendapp/state/config/enableReactUse';
import { For, Memo, Show } from '@legendapp/state/react';
enableReactUse();

function Toaster() {
  const { toasts } = toast;

  return (
    <div className="toast toast-top toast-end">
      <For each={toasts}>
        {toast => (
          <Show if={toast.get()?.description && toast.get()?.id && toast.get()?.type} else={null}>
            <Memo>
              <Toast
                key={v4()}
                description={toast.get()?.description ?? ''}
                id={toast.get()?.id ?? v4()}
                type={toast.get()?.type ?? 'info'}
                {...toast.get()}
              />
            </Memo>
          </Show>
        )}
      </For>
    </div>
  );
}

export default Toaster;
