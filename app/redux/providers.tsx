'use client'

import { Provider } from 'react-redux'
import { store } from './store' // Đường dẫn phù hợp

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
