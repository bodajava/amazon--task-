"use client"
import React from 'react'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="w-20 h-20 border-4 border-green-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
    </div>
  )
}
