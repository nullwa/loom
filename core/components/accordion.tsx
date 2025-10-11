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
  type: 'single' | 'multiple'
  defaultValue?: string | string[]
  collapsible?: boolean
}

export const Accordion: FC<ComponentProps> = ({ items, type = 'single', defaultValue, collapsible = false }) => {
  return (
    <AccordionPrimitive.Root type={type} defaultValue={type === 'single' ? (typeof defaultValue === 'string' ? defaultValue : undefined) : Array.isArray(defaultValue) ? defaultValue : undefined} collapsible={collapsible}>
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id} data-slot='accordion-item'>
          <AccordionPrimitive.Header className='flex'>
            <AccordionPrimitive.Trigger>
              {item.title}
              <ChevronDownIcon />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content data-slot='accordion-content'>
            <div className='pt-0 pb-4'>{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
