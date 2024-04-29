import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Card, Spinner } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { setItems } from '@/features'

import { getStory, StoryContent, StoryType } from '@/entities'

interface Props {
  storyId: number
}

export const StoryCard = (props: Props) => {
  const { storyId } = props

  const story: StoryType | undefined = useSelector((state: RootState) =>
    state.stories.storiesItems.find((story) => story.id === storyId)
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const get = async () => {
      dispatch(setItems(await getStory(storyId)))
    }
    if (!story) get()
  }, [dispatch, story, storyId])

  const router = useRouteNavigator()

  return (
    <Card className={styles.wrapper} onClick={() => router.push(`/story/${storyId}`)}>
      {story ? <StoryContent story={story} /> : <Spinner />}
    </Card>
  )
}
