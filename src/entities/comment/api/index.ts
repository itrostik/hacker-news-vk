import axios from 'axios'

import { CommentType } from '@/entities'

import { ITEM_URL } from '@/shared'

export const getComment = async (commentId: number) => {
  const res = await axios.get<CommentType>(`${ITEM_URL + commentId}.json`)
  return res.data
}
