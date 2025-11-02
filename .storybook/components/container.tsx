import { type  FC } from 'react'

import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs/blocks'

type ComponentProps = {
  children: NonNullable<React.ReactNode>;
  context: DocsContainerProps['context'];
};

const Container: FC<ComponentProps> = ({children, context}) => {
  return <DocsContainer context={context}>{children}</DocsContainer>
}

export default Container
