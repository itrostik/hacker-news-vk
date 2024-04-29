import { getComment, getStory } from '@/entities'

export async function update(id: string | number) {
  const story = await getStory(+id)

  if (!story.kids)
    return {
      ...story,
      comments: []
    }

  const comments = await Promise.all([
    ...story.kids.map((kid) => {
      return getComment(+kid)
    })
  ])

  comments.sort((a, b) => b.time - a.time)

  return {
    ...story,
    comments
  }
}
