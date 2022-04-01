import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Stores - Home'} pageDescription={'Encuentra tu ropa favorita'}>
      <Typography variant='h1' component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{mb: 1}} >Todos los Productos</Typography>
    </ShopLayout>
  )
}

export default Home
