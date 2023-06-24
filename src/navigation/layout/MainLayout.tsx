import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Box, Toolbar, useMediaQuery } from '@mui/material'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = (props: any) => {
  const theme = useTheme()
  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'))

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
        <Toolbar />
        {/* <Breadcrumbs
          navigation={navigation}
          title
          titleBottom
          card={false}
          divider={false}
        /> */}
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
