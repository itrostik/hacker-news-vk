import { Dispatch, SetStateAction, useState } from 'react'

import { IconButton, Spinner, Text } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { CommentType, getComment } from '@/entities'

interface Props {
  kids: Pick<CommentType, 'id'>[]
  loadComments: CommentType[]
  setLoadComments: Dispatch<SetStateAction<CommentType[]>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

export const OpenReplies = (props: Props) => {
  const { kids, setLoadComments, loadComments, setIsOpen, isOpen } = props

  const [isLoading, setIsLoading] = useState(false)

  async function loadReplyComments() {
    setIsLoading(true)
    if (loadComments.length === 0) {
      const comments = await Promise.all([
        ...kids.map((kid) => {
          return getComment(+kid)
        })
      ])
      comments.sort((a, b) => a.time - b.time)
      setLoadComments(comments)
    }
    setIsLoading(false)
  }

  function toggleReplyComments() {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {kids && (
        <div>
          {!isOpen ? (
            <IconButton
              className={styles.show}
              onClick={async () => {
                await loadReplyComments()
                toggleReplyComments()
              }}
            >
              {!isLoading ? (
                <Text>Показать ответы ({kids.length})</Text>
              ) : (
                <Spinner size={'medium'} />
              )}
            </IconButton>
          ) : (
            <IconButton className={styles.show} onClick={() => toggleReplyComments()}>
              <Text>Скрыть ответы ({kids.length})</Text>
            </IconButton>
          )}
        </div>
      )}
    </>
  )
}
