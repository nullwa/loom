'use client'

import { createContext, type FC, type ReactNode, type ComponentProps as Props } from 'react'

import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { ChevronDown, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Variant = 'default' | 'outline' | 'solid' | null
type Indicator = 'arrow' | 'plus' | 'none'

type Item = {
  id: string
  title: string | ReactNode
  content: string | ReactNode
}

type ComponentProps = Props<typeof AccordionPrimitive.Root> &
  VariantProps<typeof styles> & {
    indicator?: Indicator
    items: Item[]
  }

// --- Context ---
const AccordionContext = createContext<{ variant: Variant; indicator: Indicator }>({
  variant: 'default',
  indicator: 'arrow',
})

// --- Accordion Component ---
const Accordion: FC<ComponentProps> = ({ variant = 'solid', indicator = 'arrow', items, ...rest }) => {
  return (
    <AccordionContext.Provider value={{ variant, indicator }}>
      <AccordionPrimitive.Root data-slot='accordion' className='w-full flex flex-col gap-3' {...rest}>
        {items.map(({ id, title, content }) => (
          <AccordionPrimitive.Item key={id} value={id} data-slot='accordion-item'>
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger className={tm(styles({ variant }))} data-slot='accordion-trigger'>
                <span className='text-start'>{title}</span>
                {indicator === 'plus' && <Plus data-state='open' className='size-3.5' />}
                {indicator === 'arrow' && <ChevronDown data-state='open' className='size-3.5' />}
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>

            <AccordionPrimitive.Content data-slot='accordion-content' className='p-2 text-md text-secondary transition-all overflow-hidden'>
              <AnimatePresence>
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                  {content}
                </motion.div>
              </AnimatePresence>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  )
}

Accordion.displayName = 'Accordion'

const styles = cva('cursor-pointer w-full flex items-center text-lg text-primary font-medium justify-between gap-2 py-1 px-2 capitalize', {
  variants: {
    variant: {
      default: 'border-b border-secondary rounded-none',
      outline: 'border border-secondary rounded-sm',
      solid: 'border border-secondary bg-secondary/80 rounded-sm',
    },
  },
  defaultVariants: { variant: 'solid' },
})

export { Accordion }
