'use client'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'

export function ModeSwitch() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex items-center gap-2'>
      <Switch onCheckedChange={toggleTheme} />
    </div>
  )
}
