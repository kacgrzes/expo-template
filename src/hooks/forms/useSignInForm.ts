import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { isError } from 'react-query'

import { useAuth } from '../useAuth'

import { SignInFormValues } from '~types/authForms'
import { hapticImpact } from '~utils'

const defaultValues: SignInFormValues = {
  // TODO: Reset this values when building production app
  email: '',
  password: '',
  confirm: false,
}

export const useSignInForm = () => {
  const { signIn } = useAuth()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()

  const {
    control,
    formState: { errors },
    register,
    setFocus,
    handleSubmit,
  } = useForm<SignInFormValues>({
    mode: 'onTouched',
    defaultValues,
  })

  const onSubmit = async (data: SignInFormValues) => {
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
      hapticImpact()
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submit: handleSubmit(onSubmit),
    isSubmitting,
    setIsSubmitting,
    register,
    setFocus,
    control,
    errors,
    error,
  }
}
