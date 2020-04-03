const inputStyle = {
  borderRadius: 0,
  border: 'none',
  outline: 'none',
  fontFamily: 'mono',
  backgroundColor: 'blue'
}

const variants: any = {
  layout: {
    container: {
      maxWidth: 'container',
      padding: '0 1em'
    },
    medium: {
      maxWidth: 'medium',
      padding: '0 1em'
    },
    blog: {
      maxWidth: 'blog',
      padding: '0 1em'
    }
  },
  forms: {
    label: {
      // fontFamily: 'mono'
    },
    input: {
      ...inputStyle
    },
    textarea: {
      ...inputStyle
    }
  },
  buttons: {
    primary: {
      fontFamily: 'mono',
      color: 'primary',
      border: '0.125em solid',
      borderRadius: 0,
      background: 'transparent',
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  }
}

export default variants
