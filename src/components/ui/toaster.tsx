"use client"

import React from 'react'
import { useToast } from './use-toast'

export const Toaster = () => {
  const { toasts, dismiss } = useToast()

  return (
    <div>
      {toasts.map((toast) => (
        <div key={toast.id} onClick={() => dismiss(toast.id)}>
          {toast.message}
        </div>
      ))}
    </div>
  )
}