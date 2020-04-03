/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { FC } from 'react'

import Link from './Link'

export interface ContactButtonProps {
  title?: string
  onClick?: () => void
}

const ContactButton: FC<ContactButtonProps> = ({
  title = 'Contactez-moi',
  onClick
}) => (
  <Link to="/contact" onClick={onClick}>
    <Button>{title}</Button>
  </Link>
)

export default ContactButton
