import React from 'react'
import { LikeButton } from './myLikeButton'

interface MyCardsProps {
  bc: string
  bt: string
}

const infos = {
  pessoas: [
    { id: 1, nome: 'Alicia', idade: 12 },
    { id: 2, nome: 'Patricia', idade: 28 },
    { id: 3, nome: 'Leticia', idade: 41 },
    { id: 4, nome: 'Fabricia', idade: 33 },
  ],
  locais: [
    { estado: 'Rio de Janeiro', cidade: 'Macae', bairro: 'Gloria' },
    {
      estado: 'Rio de Janeiro',
      cidade: 'Belford Roxo',
      bairro: 'Sargento Roncalli',
    },
  ],
}

const MyCards: React.FC<MyCardsProps> = ({ bc, bt }) => {
  return (
    <div className='flex flex-wrap justify-evenly'>
      {infos.pessoas.map((pessoa) => (
        <div
          key={pessoa.id}
          className={`flex h flex-col p-2 m-2 ${bc} ${bt} h-fit w-[160px] items-start`}
        >
          <p>Nome: {pessoa.nome}</p>
          <p>Idade: {pessoa.idade}</p>
          <LikeButton />
        </div>
      ))}
    </div>
  )
}

export default MyCards
