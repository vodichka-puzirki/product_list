import { createRoot } from 'react-dom/client';

import { App } from './App';

const element = document.getElementById('root');

const root = createRoot(element as Element);

root.render(<App />);
