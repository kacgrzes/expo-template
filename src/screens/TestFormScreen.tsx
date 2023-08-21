import { Button, TextArea, Checkbox, FormControl, Text, Select } from 'native-base'
import { Controller } from 'react-hook-form'

import { ControlledField, KeyboardAwareScrollView } from '~components'
import { useTestForm, useTranslation } from '~hooks'

const SHOE_SIZES = [
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
  const INTERESTS = [
    'IT',
    t('test_form.cooking'),
    t('test_form.sport'),
    t('test_form.games'),
    t('test_form.dancing'),
  ]

  return (
    <KeyboardAwareScrollView>
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
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.age')}
      </Text>
      <ControlledField.Radio
        errorMessage={VALIDATION.age.required}
        isRequired
        control={control}
        errors={errors}
        name="age"
        radioOptions={AGES}
      />
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.sex')}
      </Text>
      <ControlledField.Radio
        errorMessage={VALIDATION.sex.required}
        isRequired
        control={control}
        errors={errors}
        name="sex"
        radioOptions={[t('test_form.male'), t('test_form.female')]}
      />
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.education')}
      </Text>
      <FormControl isRequired isInvalid={'education' in errors}>
        <Controller
          rules={VALIDATION.education}
          control={control}
          name="education"
          render={({ field }) => (
            <Select
              selectedValue={field.value}
              placeholder={t('test_form.education')}
              mt={1}
              _selectedItem={{
                bg: 'primary.100',
              }}
              onValueChange={field.onChange}
            >
              {[
                t('test_form.primary'),
                t('test_form.middle'),
                t('test_form.secondary'),
                t('test_form.postsecondary'),
              ].map((education) => (
                <Select.Item key={education} label={education} value={education} />
              ))}
            </Select>
          )}
        />
        <FormControl.ErrorMessage>{errors.education?.message}</FormControl.ErrorMessage>
      </FormControl>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.shoe_size')}
      </Text>
      <FormControl isRequired isInvalid={'shoeSize' in errors}>
        <Controller
          control={control}
          name="shoeSize"
          rules={VALIDATION.shoeSize}
          render={({ field }) => (
            <Select
              selectedValue={field.value}
              placeholder={t('test_form.shoe_size')}
              mt={1}
              _selectedItem={{
                bg: 'primary.100',
              }}
              onValueChange={field.onChange}
            >
              {SHOE_SIZES.map((size) => (
                <Select.Item key={size} label={size} value={size} />
              ))}
            </Select>
          )}
        />
        <FormControl.ErrorMessage>{errors.shoeSize?.message}</FormControl.ErrorMessage>
      </FormControl>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.which_music')}
      </Text>
      <FormControl isRequired isInvalid={'music' in errors}>
        <Controller
          control={control}
          rules={VALIDATION.music}
          name="music"
          render={({ field }) => (
            <Checkbox.Group value={field.value} onChange={(value) => field.onChange(value)}>
              {MUSICS.map((music) => (
                <Checkbox key={music} value={music}>
                  <Text>{music}</Text>
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
        />
        <FormControl.ErrorMessage>{errors.music?.message}</FormControl.ErrorMessage>
      </FormControl>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {t('test_form.interests')}
      </Text>
      <FormControl isRequired isInvalid={'interests' in errors}>
        <Controller
          control={control}
          rules={VALIDATION.interests}
          name="interests"
          render={({ field }) => (
            <Checkbox.Group value={field.value} onChange={(value) => field.onChange(value)}>
              {INTERESTS.map((interest) => (
                <Checkbox key={interest} value={interest}>
                  <Text>{interest}</Text>
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
        />
        <FormControl.ErrorMessage>{errors.interests?.message}</FormControl.ErrorMessage>
      </FormControl>
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
