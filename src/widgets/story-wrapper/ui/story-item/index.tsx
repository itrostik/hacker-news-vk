import styles from './index.module.scss'

import { Comments } from '@/features/comments-list/ui'
import { StoryItemAside } from '@/widgets/story-wrapper/ui/story-item/aside'
import { CommentsHeading } from '@/widgets/story-wrapper/ui/story-item/comment-heading'

import { StoryCommentType } from '@/widgets'

import { StoryContent } from '@/entities'

interface Props {
  fullStory: StoryCommentType
}

export const StoryItem = (props: Props) => {
  const { fullStory } = props

  return (
    <div className={styles.wrapper}>
      <StoryItemAside url={fullStory.url} />
      <StoryContent story={fullStory} />
      <CommentsHeading comments={fullStory.comments} storyId={fullStory.id} />
      <Comments comments={fullStory.comments} />
    </div>
  )
}
