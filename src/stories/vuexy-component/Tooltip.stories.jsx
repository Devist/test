import React, { useState } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'

export default {
  title: 'μ»΄ν¬λνΈ (vuexy)/π atoms/Tooltip',
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
  }
}

export const TooltipUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color="primary" id="UnControlledExample">
        Uncontrolled
      </Button>
      <UncontrolledTooltip placement="top" target="UnControlledExample">
        Hello World !
      </UncontrolledTooltip>
    </React.Fragment>
  )
}

export const TooltipPosition = () => {
  return (
    <div className="demo-inline-spacing">
      <Button.Ripple color="primary" outline id="positionTop">
        Top
      </Button.Ripple>
      <UncontrolledTooltip placement="top" target="positionTop">
        Tooltip on Top
      </UncontrolledTooltip>

      <Button.Ripple color="primary" outline id="positionRight">
        Right
      </Button.Ripple>
      <UncontrolledTooltip placement="right" target="positionRight">
        Tooltip on Right
      </UncontrolledTooltip>

      <Button.Ripple color="primary" outline id="positionBottom">
        Bottom
      </Button.Ripple>
      <UncontrolledTooltip placement="bottom" target="positionBottom">
        Tooltip on Bottom
      </UncontrolledTooltip>

      <Button.Ripple color="primary" outline id="positionLeft">
        Left
      </Button.Ripple>
      <UncontrolledTooltip placement="left" target="positionLeft">
        Tooltip on Left
      </UncontrolledTooltip>
    </div>
  )
}
