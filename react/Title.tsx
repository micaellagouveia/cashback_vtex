// store-block/react/Title.tsx
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['title']

const Title: StorefrontFunctionComponent<TitleProps> = ({ title }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const titleText = title || <FormattedMessage id="cashback.title" />

  return (
    <div className={`${handles.title} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
      {titleText}
    </div>
  )
}

interface TitleProps {
  title: string
}

Title.schema = {
  title: 'editor.cashback-title.title',
  description: 'editor.cashback-title.description',
  type: 'object',
  properties: {
    title: {
      title: 'I am a title cashback',
      type: 'string',
      default: null,
    },
  },
}

export default Title