import Link from 'next/link'
import { ToggleTheme } from './ToggleTheme'
import { Menu } from './Menu'
import { Terminal } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex w-full justify-between py-5 items-center'>
      <div
        id='desktop'
        className='hidden sm:flex sm:items-center sm:justify-between sm:w-full '
      >
        <p className={`font-bold flex-nowrap flex`}><Terminal/> Adriano</p>
        <nav className=' flex justify-between items-center'>
          <div className='flex items-center gap-5 sm:visible'>
            <Link href={'/'} className='hover:text-green-500'>
              Inicio
            </Link>
            <Link href={'/projetos'} className='hover:text-green-500'>
              Projetos
            </Link>
            {/* <Link href={'/desafios'} className='hover:text-green-500'>
              Desafios
            </Link>
            <Link href={'/ferramentas'} className='hover:text-green-500'>
              Ferramentas
            </Link>
            <Link href={'/deposito'} className='hover:text-green-500'>
              Depósito
            </Link> */}
          </div>
        </nav>
        <div className='flex justify-between  '>
          <ToggleTheme />
        </div>
      </div>

      <div id='mobile' className='sm:hidden flex items-center w-full gap-2'>
        <div className='flex justify-between w-full '>
          <Menu />
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}

export default Header
