// material-ui
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import EmptyLayout from './EmptyLayout'

// ==============================|| MAIN LAYOUT ||============================== //

const UserLayout = () => {
  const theme = useTheme()
  const matchDownLG = useMediaQuery(theme.breakpoints.down('sm'))
  console.log('matchDownLG', matchDownLG)

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'grey.200',
      }}
    >
      {/* <Header open={open} handleDrawerToggle={handleDrawerToggle} /> */}
      {/* <Drawer open={open} handleDrawerToggle={handleDrawerToggle} /> */}
      <Box
        component='main'
        sx={{ width: '100%', flexGrow: 1, p: { xs: 5, sm: 5 } }}
      >
        {/* <Toolbar /> */}
        {/* <Breadcrumbs
          navigation={navigation}
          title
          titleBottom
          card={false}
          divider={false}
        /> */}
        <EmptyLayout />
      </Box>
    </Box>
  )
}

export default UserLayout
