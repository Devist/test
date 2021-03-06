import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Story } from '@storybook/react'

import {
  User,
  GitHub,
  Calendar,
  Inbox,
  Camera,
  Award,
  Star
} from 'react-feather'

export default {
  title: 'μ»΄ν¬λνΈ (vuexy)/π atoms/Divider',
  component: Button,
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
  },
  argTypes: {
    className: {
      description: 'μμμ΄λ μ»¨νμΈ  μμ­μ λ³κ²½μ classλ‘ λ³κ²½ν©λλ€.',
      defaultValue: 'divider',
      options: [
        'divider',
        'divider divider-left',
        'divider divider-left-center',
        'divider divider-right-center',
        'divider divider-primary',
        'divider divider-secondary',
        'divider divider-success',
        'divider divider-danger',
        'divider divider-warning'
      ],
      control: { type: 'select' }
    },
    icon: {
      description: 'νμ€νΈ λμ  μμ΄μ½μ μ¬μ©ν©λλ€',
      options: ['user', 'github', null],
      control: { type: 'select' }
    }
  }
}

const Template = ({ text, icon, ...args }) => {
  const someResult = someFunction(icon)

  return (
    <div {...args}>
      <div className="divider-text">
        {icon ? someResult : null}
        {text}
      </div>
    </div>
  )
}

export const Divider = Template.bind({})
Divider.args = {
  text: 'νμ€νΈ',
  className: 'divider'
}

const someFunction = (icon) => {
  // Makes some computations and returns something
  switch (icon) {
    case 'user':
      return <User />
    case 'github':
      return <GitHub />
    case null:
      return null
    default:
      return <User />
  }
}

// export const Text = () => <ButtonCheckboxRadio />
