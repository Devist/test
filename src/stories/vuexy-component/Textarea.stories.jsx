import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Label
} from 'reactstrap'
import classnames from 'classnames'

export default {
  title: 'μ»΄ν¬λνΈ (vuexy)/π atoms/Textarea',
  component: Card,
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

export const TextareaDefault = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Default</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          To create a Textarea use <code>type="textarea"</code> with reactstrap
          Input tag.
        </CardText>
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          rows="3"
          placeholder="Textarea"
        />
      </CardBody>
    </Card>
  )
}

export const TextareaFloatingLabel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Floating label</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use <code>.form-label-group</code> as a wrapper to add a Floating
          Label with Textarea
        </CardText>
        <div className="form-label-group mt-2">
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            rows="3"
            placeholder="Floating Label"
          />
          <Label>Floating Label</Label>
        </div>
      </CardBody>
    </Card>
  )
}

export const TextareaCounter = () => {
  const [value, setValue] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Counter</CardTitle>
      </CardHeader>

      <CardBody>
        <div className="form-label-group mb-0">
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            rows="3"
            value={value}
            placeholder="Counter"
            onChange={(e) => setValue(e.target.value)}
          />
          <Label>Counter</Label>
        </div>
        <span
          className={classnames('textarea-counter-value float-right', {
            'bg-danger': value.length > 20
          })}>
          {`${value.length}/20`}
        </span>
      </CardBody>
    </Card>
  )
}
