'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const MealsFormSubmit = () => {
    const {pending} =useFormStatus();
  return (
   <button disabled={pending}>
    {pending?'sending...':'Submit'}
    </button>

  )}

export default MealsFormSubmit