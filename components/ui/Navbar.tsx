import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const {theme} = useTheme()
  const router = useRouter()

  const oneClick = () => {
    router.push('/')
  }

  return (
    <div style={{
      display: 'Flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray900.value
    }}
    >
      <NextLink href={'/'} passHref>
        <Link style={{display: 'flex'}}>
          <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/200.svg'}
            alt={'Icono de aplicación'}
            width={50}
            height={50}
          />
          <Text color={'white'} h2>P</Text>
          <Text color={'white'} h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{
        flex: 1
      }}/>
      <NextLink href={'/favorites'} passHref>
        <Link>
          <Text color={'white'}>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}