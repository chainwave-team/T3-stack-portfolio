export const toolbar = {
  mt: 4,
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
  overflowX: 'auto',
  boxShadow: 1,
  bg: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '0.5rem',
  my: [4, 5],
  mx: [-3, -4],
  py: [4, 5],
  px: [3, 4]
}

export const pre = {
  maxWidth: '100%'
}

export default {
  pre,
  toolbar
}
