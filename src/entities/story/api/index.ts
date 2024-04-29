import axios from 'axios'
import { StoryType } from 'entities'

import { ITEM_URL } from '@/shared'

export const getStory = async (storyId: number) => {
  const res = await axios.get<StoryType>(`${ITEM_URL + storyId}.json`)
  return res.data
}
