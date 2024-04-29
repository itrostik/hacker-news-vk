import { Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  text: string
}

export const CommentText = (props: Props) => {
  const { text } = props

  return (
    <section className={styles.body}>
      <Text>{text}</Text>
    </section>
  )
}
