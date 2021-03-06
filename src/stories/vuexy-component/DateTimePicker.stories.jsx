import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

import '@styles/react/libs/flatpickr/flatpickr.scss'

export default {
  title: 'μ»΄ν¬λνΈ (vuexy)/π molecules/Date & Time Picker',
  component: Fragment,
  parameters: {
    docs: {
      description: {
        component:
          'νλ©΄μμ μμ­μ κ΅¬λΆν  λ μ¬μ©ν©λλ€. κ°λ¨νκ² μ¬μ©ν  λλ λ¨μν ```<hr/>``` νκ·Έλ₯Ό μ¬μ©ν΄λ λ©λλ€.',
        subcomponents: {
          IconOnly: 'hello'
        }
      }
    }
  }
}

export const PickerDefault = () => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label for="default-picker">Default</Label>
      <Flatpickr
        className="form-control"
        value={picker}
        onChange={(date) => setPicker(date)}
        id="default-picker"
      />
    </Fragment>
  )
}

export const PickerHumanFriendly = () => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label for="hf-picker">Human Friendly</Label>
      <Flatpickr
        value={picker}
        id="hf-picker"
        className="form-control"
        onChange={(date) => setPicker(date)}
        options={{
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d'
        }}
      />
    </Fragment>
  )
}

export const Timepickers = () => {
  const [basic, setBasic] = useState(new Date())

  return (
    <Fragment>
      <Label id="timepicker">Basic 24hrs</Label>
      <Flatpickr
        className="form-control"
        value={basic}
        id="timepicker"
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
          time_24hr: true
        }}
        onChange={(date) => setBasic(date)}
      />
    </Fragment>
  )
}
