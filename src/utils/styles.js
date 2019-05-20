export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#444`,
  darkBlack: `#222`,
  lightBlack : '#666',
  mainYellow: `#d2aa5c`,
  mainYellow2: `#F2AF29`,
  mainGrey: `gray`,
  darkGrey: '#e1e1e1',
  lightGrey: `#fcfcfc`,
  mainOrange: `#FF6709`
}
export const headingFont = `  font-family: 'Montserrat', sans-serif`;
export const robotoFont = `font-family: 'Roboto', sans-serif`;
export const transDefault = 'transition:all 0.4s ease-in-out'
export const transFunction = (
  property = 'all',
  time = '0.3s',
  type = 'ease-in-out'
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = 'all',
  time = '0.5s', 
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}