import Avatar from '@core-components/avatar'
import { User, GitHub } from 'react-feather'

export default {
  title: 'μ»΄ν¬λνΈ(vuexy)/π atoms/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'success',
        'dnager',
        'warning',
        'info',
        'light-primary',
        'light-secondary',
        'light-success',
        'light-danger',
        'light-warning',
        'light-info'
      ],
      control: { type: 'select' }
    },
    icon: {
      options: [null, 'user', 'github'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', '', 'lg', 'xl'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'μλ°νλ λ μ΄λΈ μμ,μ μ  μμ΄μ½ νμ λ±μ μ¬μ©λ©λλ€. ' +
          "<br/> ```import Avatar from ''@core-components/avatar' ```κ° νμν©λλ€.  "
      }
    }
  }
}

const getIconComponent = (icon) => {
  switch (icon) {
    case 'user':
      return <User size={14} />
    case 'github':
      return <GitHub size={14} />
    case null:
      return null
    default:
      return <User size={14} />
  }
}
const TemplateWithIcon = ({ icon, ...args }) => {
  const iconComponent = getIconComponent(icon)
  return <Avatar icon={iconComponent} {...args} />
}

export const νμ€νΈν = TemplateWithIcon.bind({})
νμ€νΈν.args = { color: 'primary', content: '1', icon: null }

export const μμ΄μ½ν = TemplateWithIcon.bind({})

μμ΄μ½ν.args = { color: 'light-secondary', icon: 'user', size: '' }
