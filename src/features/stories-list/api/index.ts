import axios from 'axios'

import { NEW_STORIES_URL } from '@/shared'

export const getStories = async () => {
  const res = await axios.get(NEW_STORIES_URL)
  return res.data
}
