/** @jsx jsx */
import { FC } from 'react'
import { jsx } from 'theme-ui'
import { useCopyToClipboard } from 'react-use'
import { ButtonCopy, cssByLang, getPrettyName, ProgrammingLang } from './utils'
import AppleButtons from '../AppleButtons'

export interface PrismCodeToolbarProps {
  code: string
  language: ProgrammingLang
  isCodeHovered: boolean
}

const PrismCodeToolbar: FC<PrismCodeToolbarProps> = ({
  code,
  language,
  isCodeHovered
}) => {
  const [state, copyToClipboard] = useCopyToClipboard()

  const handleClick = () => {
    copyToClipboard(code)
  }

  return (
    <div
      sx={{
        py: 2,
        pl: 3,
        pr: [3, 4, 4, 5],
        fontSize: 0,
        top: 0,
        right: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <AppleButtons size={12} />

      <div>
        <ButtonCopy
          isHover={isCodeHovered}
          value={state.value}
          onClick={handleClick}
          sx={{ fontSize: 0 }}
        />

        {language !== 'markup' ? (
          <span
            sx={{
              ...cssByLang(language),
              py: 1,
              px: 2,
              my: 3,
              ml: [2, 3],
              userSelect: 'none',
              borderRadius: 2
            }}
          >
            {getPrettyName(language)}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default PrismCodeToolbar
