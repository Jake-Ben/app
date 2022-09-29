import Switch from '@/Components/Switch/Switch'
import { Subtitle, Text, Title } from '@/Components/Preferences/PreferencesComponents/Content'
import { WebApplication } from '@/Application/Application'
import { PrefKey } from '@standardnotes/snjs'
import { observer } from 'mobx-react-lite'
import { FunctionComponent, useState } from 'react'
import PreferencesGroup from '../../PreferencesComponents/PreferencesGroup'
import PreferencesSegment from '../../PreferencesComponents/PreferencesSegment'
import { PrefDefaults } from '@/Constants/PrefDefaults'

type Props = {
  application: WebApplication
}

const Tools: FunctionComponent<Props> = ({ application }: Props) => {
  const [marginResizers, setMarginResizers] = useState(() =>
    application.getPreference(PrefKey.EditorResizersEnabled, PrefDefaults[PrefKey.EditorResizersEnabled]),
  )

  const toggleMarginResizers = () => {
    setMarginResizers(!marginResizers)
    application.setPreference(PrefKey.EditorResizersEnabled, !marginResizers).catch(console.error)
  }

  return (
    <PreferencesGroup>
      <PreferencesSegment>
        <Title>Tools</Title>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Subtitle>Margin Resizers</Subtitle>
              <Text>Allows left and right editor margins to be resized.</Text>
            </div>
            <Switch onChange={toggleMarginResizers} checked={marginResizers} />
          </div>
        </div>
      </PreferencesSegment>
    </PreferencesGroup>
  )
}

export default observer(Tools)
