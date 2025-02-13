"use client"

import React from 'react'

interface Toast {
  id: string
  message: string
}

interface State {
  toasts: Toast[]
}

const listeners: React.Dispatch<React.SetStateAction<State>>[] = []
let memoryState: State = { toasts: [] }

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    toasts: state.toasts,
    add: (message: string) => {
      const id = String(Date.now())
      const newToast = { id, message }
      memoryState = { toasts: [...memoryState.toasts, newToast] }
      listeners.forEach((listener) => listener(memoryState))
    },
    dismiss: (id: string) => {
      memoryState = { toasts: memoryState.toasts.filter((toast) => toast.id !== id) }
      listeners.forEach((listener) => listener(memoryState))
    },
  }
}