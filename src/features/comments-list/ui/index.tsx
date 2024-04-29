import { Div, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { CommentCard, CommentType } from '@/entities'

interface Props {
  comments: CommentType[]
}

export const Comments = (props: Props) => {
  const { comments } = props

  return (
    <>
      {comments.length > 0 ? (
        <Div className={styles.content}>
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </Div>
      ) : (
        <Title level={'3'}>Комментариев пока нет</Title>
      )}
    </>
  )
}
