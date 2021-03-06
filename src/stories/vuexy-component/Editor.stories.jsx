import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'

export default {
  title: '์ปดํฌ๋ํธ (vuexy)/๐ molecules/Editor',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          '์ธ๊ทธ๋จผํธ ์์ฝ ์ ๋ณด์ ์ฌ์ฉ๋ฉ๋๋ค' +
          "<br/> ```import { CardText } from 'reactstrap'```" +
          "<br/> ```import AppCollapse from '@core-components/app-collapse'```",
        subcomponents: {
          IconOnly: 'hello'
        }
      }
    }
  }
}

export const EditorControlled = () => {
  const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Controlled Editor</CardTitle>
      </CardHeader>
      <CardBody>
        <Editor
          editorState={value}
          onEditorStateChange={(data) => setValue(data)}
        />
      </CardBody>
    </Card>
  )
}
