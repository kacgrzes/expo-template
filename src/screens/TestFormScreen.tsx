import { TextArea, FormControl } from 'native-base'
import { Controller } from 'react-hook-form'
import { StyleSheet } from 'react-native'

import { ControlledField, KeyboardAwareScrollView } from '~components'
import { Button, Text } from '~components/atoms'
import { useMemo, useTestForm, useTranslation } from '~hooks'

const shoeSizes = [
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
]
const AGES = ['18-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']
const MUSICS = ['Metal', 'Heavy Metal', 'Rock', 'Pop', 'Rap']

export const TestFormScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { control, errors, submit, VALIDATION } = useTestForm()

  const INTERESTS = useMemo(
    () => [
      'IT',
      t('test_form.cooking'),
      t('test_form.sport'),
      t('test_form.games'),
      t('test_form.dancing'),
    ],
    [t]
  )

  const education = useMemo(
    () =>
      [
        t('test_form.primary'),
        t('test_form.middle'),
        t('test_form.secondary'),
        t('test_form.postsecondary'),
      ]?.map((item) => ({
        value: item,
        label: item,
        labelInDropdown: item,
      })),
    [t]
  )

  const mappedShoeSizes = useMemo(
    () =>
      shoeSizes?.map((item) => ({
        value: item,
        label: item,
        labelInDropdown: item,
      })),
    []
  )

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.contact_data')}
      </Text>
      <ControlledField.Input
        isRequired={true}
        control={control}
        errors={errors}
        placeholder={t('test_form.name_placeholder')}
        name={'name'}
        returnKeyType="next"
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.surname_placeholder')}
        name={'surname'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.email_placeholder')}
        name={'email'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.phone_placeholder')}
        name={'phone'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.postalCode_placeholder')}
        name={'postalCode'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Input
        control={control}
        errors={errors}
        placeholder={t('test_form.city_placeholder')}
        name={'city'}
        returnKeyType="next"
        mt={2}
      />
      <ControlledField.Radio
        isRequired
        control={control}
        errors={errors}
        name="age"
        radioOptions={AGES}
        rules={VALIDATION.age}
        label={t('test_form.age')}
      />
      <ControlledField.Radio
        isRequired
        control={control}
        errors={errors}
        name="sex"
        radioOptions={[t('test_form.male'), t('test_form.female')]}
        rules={VALIDATION.sex}
        label={t('test_form.sex')}
      />
      <ControlledField.Select
        label={t('test_form.education')}
        items={education}
        control={control}
        name="education"
        errors={errors}
        placeholder={t('test_form.education')}
        isRequired
        rules={VALIDATION.education}
      />
      <ControlledField.Select
        items={mappedShoeSizes}
        control={control}
        errors={errors}
        name="shoeSize"
        placeholder={t('test_form.shoe_size')}
        rules={VALIDATION.shoeSize}
        isRequired
        label={t('test_form.shoe_size')}
      />
      <ControlledField.Checkbox
        checkboxes={MUSICS}
        control={control}
        errors={errors}
        name="music"
        rules={VALIDATION.music}
        label={t('test_form.which_music')}
        isRequired
      />
      <ControlledField.Checkbox
        control={control}
        errors={errors}
        name="interests"
        checkboxes={INTERESTS}
        rules={VALIDATION.interests}
        label={t('test_form.interests')}
        isRequired
      />
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.additiona_comment')}
      </Text>
      <FormControl>
        <Controller
          control={control}
          name="comment"
          render={({ field }) => (
            <TextArea
              autoCompleteType={null}
              placeholder={t('test_form.comment')}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
            />
          )}
        />
      </FormControl>
      <Button my={4} onPress={submit}>
        {t('test_form.submit')}
      </Button>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
})
