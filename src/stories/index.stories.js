import { addReadme } from 'storybook-readme'
import { addDecorator } from '@storybook/react'
addDecorator(addReadme)

import { storiesOf } from '@storybook/react'

// import Introduction from './guide-management/1-introduction.stories.mdx'
// import Contents from './guide-management/Contents.md'
// import Structure from './guide-develop/Structure.md'
// import Commit from './guide-develop/Commit.md'

// storiesOf('for ์ฌ์ฉ์ / ๐ก ํต์ฌ ์ฉ์ด', module)
//   .addParameters({
//     options: {
//       showPanel: false
//     }
//   })
//   .add('๋ ์ด๋ธ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์ธ๊ทธ๋จผํธ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์ค์ผ์ฅด', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์ธ๊ทธ๋จผํธ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('ํ๋ก์ ํธ ์ํคํ์ณ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })

// storiesOf('for ์ด์์ /๐ฟ ์ด์ ๊ฐ์ด๋', module)
//   .addParameters({
//     options: {
//       showPanel: false
//     }
//   })
//   .add('์๊ฐ', () => {}, {
//     readme: {
//       content: Introduction
//     }
//   })
//   .add('๊ถํ ์ ์ฒญ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('๋ ์ด๋ธ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์ธ๊ทธ๋จผํธ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('ํ๋ก์ ํธ ์ํคํ์ณ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })

// storiesOf('for ์ด์์ /๐ง ๊ฐ๋ฐ ๊ฐ์ด๋', module)
//   // .addParameters({
//   //   options: {
//   //     showPanel: false,
//   //   },
//   // })
//   .add('์ค์น', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์ธํ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์คํ ๋ฐ ๋น๋', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('ํ๋ก์ ํธ ๊ตฌ์กฐ', () => {}, {
//     readme: {
//       content: Structure
//     }
//   })
//   .add('์ปดํฌ๋ํธ ์ค๊ณ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('์ฝ๋์คํ์ผ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('Git ๊ท์น', () => {}, {
//     readme: {
//       content: Commit
//     }
//   })
//   .add('๋ฒ์  ๊ด๋ฆฌ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
//   .add('๋ฐฐํฌ', () => {}, {
//     readme: {
//       content: Contents
//     }
//   })
