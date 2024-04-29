import { useDispatch } from 'react-redux'

import { Icon24ArrowLeftOutline } from '@vkontakte/icons'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Image, PanelHeader, Title } from '@vkontakte/vkui'

import styles from './index.module.scss'

import { set } from '@/widgets'

interface Props {
  nav?: string
}

export const Header = (props: Props) => {
  const { nav } = props

  const router = useRouteNavigator()

  const dispatch = useDispatch()

  function back() {
    dispatch(set(null))
    router.push('/')
  }

  return (
    <PanelHeader
      before={
        nav === 'story' && (
          <Icon24ArrowLeftOutline
            onClick={() => back()}
            className={styles.button}
            aria-label={'back'}
          />
        )
      }
    >
      <div className={styles.content}>
        <Image src="/logo.svg" alt="logo" size={30} />
        <Title>Hacker News</Title>
      </div>
    </PanelHeader>
  )
}
