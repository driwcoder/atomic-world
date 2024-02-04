import * as React from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'

export interface Tools {
  id: string
  name: string
  link: string
}

export const works: Tools[] = [
  {
    id: '1',
    name: 'Contador',
    link: '/ferramentas/contador',
  },
  {
    id: '2',
    name: 'Calculadora',
    link: '/ferramentas/calculadora',
  },
  {
    id: '3',
    name: 'Conversores',
    link: '/ferramentas/conversores',
  },
  {
    id: '4',
    name: 'React Foundations',
    link: '/ferramentas/react-foundations',
  },
]

export function ScrollAreaCoponent() {
  return (
    <ScrollArea className='w-fit whitespace-nowrap rounded-md border'>
      <div className='flex flex-col w-max p-4'>
        {works.map((tool) => (
          <Link key={tool.id} href={tool.link}>{tool.name}</Link>
        ))}
      </div>
      <ScrollBar orientation='vertical' />
    </ScrollArea>
  )
}
