import { v4 } from 'uuid';
import { toast } from './lib/hooks/toast';

function App() {
  return (
    <div className="w-screen h-screen bg-base-100 flex items-center justify-center">
      <button
        className="btn btn-primary"
        onClick={() => toast.toasts.push({ description: 'Isso é um teste', type: 'alert-info', id: v4() })}
      >
        Click Me (info)
      </button>
      <button
        className="btn btn-warning"
        onClick={() => toast.toasts.push({ description: 'Isso é um teste', type: 'alert-warning', id: v4() })}
      >
        Click Me (warning)
      </button>
      <button
        className="btn btn-error"
        onClick={() => toast.toasts.push({ description: 'Isso é um teste', type: 'alert-error', id: v4() })}
      >
        Click Me (error)
      </button>
    </div>
  );
}

export default App;
