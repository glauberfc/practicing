import * as React from 'react'
import { Field } from 'formik'

import { InputField } from '../../../shared/InputField'

export const Page2 = () => (
  <>
    <Field
      label="Price"
      name="price"
      placeholder="Price"
      useNumberComponent
      component={InputField}
    />
    <Field
      label="Beds"
      name="beds"
      placeholder="Beds"
      useNumberComponent
      component={InputField}
    />
    <Field
      label="Guests"
      name="guests"
      placeholder="Guests"
      useNumberComponent
      component={InputField}
    />
  </>
)
