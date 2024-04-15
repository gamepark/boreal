/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const RestHeader = () => {
  const { t } = useTranslation()
  return <>{t('header.rest')}</>
}
