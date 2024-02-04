'use client'
import { AlignJustifyIcon, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export function Menu() {

  return (
    <div className='xl:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='icon' className='rounded-full'>
            <AlignJustifyIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem>
            <Link href='/'>Inicio</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/projetos'>Projetos</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <Link href='/desafios'>Desafios</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/ferramentas'>Ferramentas</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/deposito'>Depósito</Link>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
