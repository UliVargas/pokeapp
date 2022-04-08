import { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritesPokemon } from '../../components/pokemon'

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <MainLayout title={'Favoritos'}>

      {
        favoritePokemons.length === 0
          ? ( <NoFavorites/> )
          : ( <FavoritesPokemon pokemons={favoritePokemons} /> )
      }

    </MainLayout>
  )
}

export default FavoritesPage