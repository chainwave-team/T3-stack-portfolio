/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'

// import Link from './Link'
import Button from './Button'

/*
 * This component link to footer as anchor.
 * Soon, it will be a page link to /contact page

    <Link to="/contact" onClick={handleClick}>
        <Button>Me contacter</Button>
    </Link>
 */

export interface ContactButtonProps {
  title?: string
  onClick?: () => void
}

const ContactButton: FC<ContactButtonProps> = ({
  title = 'Contactez moi',
  onClick
}) => (
  <ScrollLink to="footer" smooth isDynamic onClick={onClick}>
    <Button>{title}</Button>
  </ScrollLink>
)

export default ContactButton
