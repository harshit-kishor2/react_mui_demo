import { Theme } from '@mui/material'
import { merge } from 'lodash'
import Button from './Button'
import Typography from './Typography'

const ComponentsOverrides = (theme: Theme) => {
  return merge(Button(theme), Typography())
}

export default ComponentsOverrides
