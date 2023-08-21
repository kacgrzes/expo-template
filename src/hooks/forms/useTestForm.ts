import { isError } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TestFormValues } from '~types/testForm'

const defaultValues: TestFormValues = {
  name: '',
  surname: '',
  email: '',
  city: '',
  phone: '',
  postalCode: '',
  sex: '',
  music: [],
  comment: '',
  shoeSize: '',
  age: '',
  education: '',
  interests: [],
}

export const useTestForm = () => {
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()

  const VALIDATION = {
    name: { required: t('test_form.errors.name') },
    surname: { required: t('test_form.errors.surname') },
    email: { required: t('test_form.errors.email') },
    phone: {
      required: t('test_form.errors.phone'),
      pattern: {
        value: /[0-9]{3}-[0-9]{3}-[0-9]{3}/,
        message: t('test_form.errors.phone_format'),
      },
    },
    postalCode: {
      required: t('test_form.errors.postalCode'),
      pattern: {
        value: /[0-9]{2}-[0-9]{3}/,
        message: t('test_form.errors.postalCode_format'),
      },
    },
    city: {
      required: t('test_form.errors.city'),
    },
    shoeSize: { required: t('test_form.errors.shoeSize') },
    age: { required: t('test_form.errors.age') },
    education: { required: t('test_form.errors.education') },
    music: { required: t('test_form.errors.music') },
    interests: { required: t('test_form.errors.interests') },
    sex: { required: t('test_form.errors.sex') },
  }

  const {
    control,
    register,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm<TestFormValues>({
    mode: 'onTouched',
    defaultValues,
  })

  const onSubmit = async (data: TestFormValues) => {
    try {
      setIsSubmitting(true)
      setError('')
      console.log(data)
    } catch (e) {
      console.log(e)
      if (isError(e)) {
        setError(e.message)
      } else {
        setError(t('errors.something_went_wrong'))
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    VALIDATION,
    submit: handleSubmit(onSubmit),
    register,
    isSubmitting,
    setIsSubmitting,
    setFocus,
    control,
    errors,
    error,
  }
}
