'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Contador: React.FC = () => {
  let [count, setCount] = useState<number>(0)
  let [num, setNum] = useState<number>(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(event.target.value) || 0)
  }

  return (
    <div className='flex w-100% flex-col gap-4 justify-center items-center '>
      <h1 className='text-2xl'>Contador</h1>
      <div className='flex p-8 flex-col bg-foreground rounded-md  items-start gap-4'>
        <p className='mb-8 text-primary-foreground'>
          Total de {count} unidades
        </p>
        <div className="flex gap-4">
          <Button
            variant={'outline'}
            className='w-fit items-center'
            onClick={() => setCount(count + 1)}
          >
            + 1
          </Button>
          <Button
            variant={'outline'}
            className='w-fit items-center'
            onClick={() => setCount(count - 1)}
          >
            - 1
          </Button>
        </div>
        <div className='flex gap-4'>
          <Input
            type='number'
            value={num}
            onChange={handleInputChange}
            placeholder='Digite um número'
          />
          <Button
            variant={'secondary'}
            className='w-fit items-center'
            onClick={() => setCount(count + num)}
          >
            Somar
          </Button>
        </div>
        <Button
          variant={'destructive'}
          className='w-fit items-center'
          onClick={() => setCount(0)}
        >
          Resetar
        </Button>
      </div>
    </div>
  )
}

export default Contador
