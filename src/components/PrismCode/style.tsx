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

export const pre = {
  position: 'relative',
  maxWidth: '100%',
  overflowX: 'auto',
  bg: 'rgba(0, 0, 0, 0.4)',
  my: [4, 5],
  mx: [-3, -4],
  px: [3, 4],
  py: [4, 5],
  borderRadius: '0.5rem',
  boxShadow: 1
}

export default {
  pre,
  toolbar
}
