import { createRoot } from 'react-dom/client'
import '../src/assets/css/style.css'
import './index.css'

import U from './u.jsx' // Changed `u` to `U`

createRoot(document.getElementById('root')).render(
    <U /> // Changed `<u />` to `<U />`
)
