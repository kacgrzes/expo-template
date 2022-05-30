import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { isError } from 'react-query'

import { useAuth } from '../useAuth'

type FormValues = {
  email: string
  password: string
}

const defaultValues = { email: '', password: '' }

export const useSignInForm = () => {
  const { signIn } = useAuth()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues,
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true)
      setError('')
      await signIn(data)
    } catch (e) {
      if (isError(e)) {
        setError(e.message)
      } else {
        setError(t('errors.something_went_wrong'))
      }
      impactAsync(ImpactFeedbackStyle.Medium)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submit: handleSubmit(onSubmit),
    isSubmitting,
    setIsSubmitting,
    control,
    errors,
    error,
  }
}
