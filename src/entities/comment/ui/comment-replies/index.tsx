import styles from './index.module.scss'

import { CommentHeader } from '../comment-header'
import { CommentText } from '../comment-text'

import { CommentType } from '@/entities'

interface Props {
  loadComments: CommentType[]
}

export const CommentReplies = (props: Props) => {
  const { loadComments } = props

  return (
    <>
      {loadComments.map((comment) => (
        <div className={styles.reply}>
          <CommentHeader by={comment.by} time={comment.time} />
          <CommentText text={comment.text} />
        </div>
      ))}
    </>
  )
}
