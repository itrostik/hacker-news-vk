import { Spinner } from '@vkontakte/vkui'

import styles from './index.module.scss'

interface Props {
  count: number
}

export const Skeleton = (props: Props) => {
  const { count } = props

  return (
    <>
      {[
        ...new Array(count).fill(0).map((_, i) => (
          <div className={styles.skeleton} key={i}>
            <Spinner />
          </div>
        ))
      ]}
    </>
  )
}
