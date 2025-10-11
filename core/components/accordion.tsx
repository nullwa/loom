'use client'

import { type FC, type ReactNode } from 'react'

import { Accordion as AccordionPrimitive } from 'radix-ui'
import { ChevronDownIcon } from 'lucide-react'

type ComponentProps = {
  items: {
    id: string
    title: ReactNode
    content: ReactNode
  }[]
  keepOpen: boolean
  collapsible?: boolean
}

export const Accordion: FC<ComponentProps> = ({ items, keepOpen = false, collapsible = false }) => {
  return (
    <AccordionPrimitive.Root type={keepOpen ? 'multiple' : 'single'} collapsible={collapsible}>
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id} data-slot='accordion-item' className='w-full select-none not-last:mb-2'>
          {/* header */}
          <AccordionPrimitive.Header className='w-full min-w-xs bg-secondary border border-secondary rounded-md py-1 px-2 shadow-xs-skeumorphi'>
            <AccordionPrimitive.Trigger className='w-full text-primary flex items-center justify-between cursor-pointer'>
              <div>{item.title}</div>
              <ChevronDownIcon className='size-5 text-secondary' />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          {/* content */}
          <AccordionPrimitive.Content data-slot='accordion-content' className='text-tertiary p-2'>
            <div>{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
