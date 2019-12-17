export const toolbar = {
  mt: [2, 4],
  position: 'absolute',
  fontSize: 1,
  top: 0,
  right: 50,
  display: 'flex',
  justifyContent: 'flex-end',
  '& > *': {
    py: 1,
    px: 2,
    ml: [2, 3],
    fontSize: 1,
    userSelect: 'none',
    borderRadius: 2
  }
}

export const wrapper = {
  position: 'relative',
  boxShadow: 1,
  bg: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '0.5rem',
  my: 5,
  mx: [0, -4]
}

export const pre = {
  py: 5,
  px: [3, 4],
  overflowX: 'auto',
  maxWidth: '100%'
}

export default {
  pre,
  toolbar
}
