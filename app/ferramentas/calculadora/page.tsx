'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'

const Page = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [signal, setSignal] = useState()
  let [result, setResult] = useState(0)

  function sum() {
    result = num1 + num2
    return result
  }

  return (
    <section>
      <div
        id='structure'
        className='w-80 bg-primary-foreground text-secondary rounded-lg h-fit p-3 gap-[2px] flex flex-col border-2 '
      >
        <Input
          id='result'
          className='w-full text-end text-primary p-2 rounded-sm mb-2'
          onChange={(e) => setResult(parseFloat(e.target.value))}
          defaultValue={'Ainda nao funcional'}
        />
        <div id='linhaUm' className='min-w-full flex justify-between'>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            %
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            CE
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            C
          </Button>
          <Button
            className='text-primary w-[calc((320px*0.25)-9px)]'
            variant={'destructive'}
          >
            {' '}
            <ArrowLeftIcon />{' '}
          </Button>
        </div>
        <div id='linhaUm' className='min-w-full flex justify-between'>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            1/x
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            x²
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            raiz
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            /
          </Button>
        </div>
        <div id='linhaUm' className='min-w-full flex justify-between'>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            7
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            8
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            9
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            X
          </Button>
        </div>
        <div id='linhaUm' className='min-w-full flex justify-between'>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            4
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            5
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            6
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            -
          </Button>
        </div>
        <div id='linhaUm' className='min-w-full flex justify-between'>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            1
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            2
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            3
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            +
          </Button>
        </div>
        <div id='linhaUm' className='min-w-full flex justify-between'>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            +/-
          </Button>
          <Button
            className='bg-secondary text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            0
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            ,
          </Button>
          <Button
            className='bg-primary-foreground text-primary w-[calc((320px*0.25)-9px)]'
            variant={'outline'}
          >
            =
          </Button>
        </div>
        <div id='linhaDois' className='min-w-full flex justify-between'></div>
      </div>
      
    </section>
  )
}

export default Page
