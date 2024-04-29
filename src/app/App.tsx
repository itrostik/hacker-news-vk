import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import { SplitCol, SplitLayout, View } from '@vkontakte/vkui'

import './_styles/reset.scss'

import { Story } from '@/pages'
import { Home } from '@/pages'

import { DEFAULT_VIEW_PANELS } from '@/shared'

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation()

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" />
          <Story id="story" />
        </View>
      </SplitCol>
    </SplitLayout>
  )
}
