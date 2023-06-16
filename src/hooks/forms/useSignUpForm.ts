import { isError } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useAuth } from '../useAuth'

import { SignUpFormValues } from '~types/authForms'
import { hapticImpact } from '~utils'

const defaultValues: SignUpFormValues = {
  user: '',
  email: '',
  password: '',
  agree: false,
  newsletter: false,
}

export const useSignUpForm = () => {
  const { signUp } = useAuth()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()

  const {
    control,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm<SignUpFormValues>({
    mode: 'onTouched',
    defaultValues,
  })

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      setIsSubmitting(true)
      setError('')
      await signUp(data)
    } catch (e) {
      if (isError(e)) {
        setError(e.message)
      } else {
        setError(t('errors.something_went_wrong'))
      }
      hapticImpact()
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submit: handleSubmit(onSubmit),
    isSubmitting,
    setIsSubmitting,
    control,
    setFocus,
    errors,
    error,
  }
}
