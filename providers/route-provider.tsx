'use client'

import type { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'
import { RouterProvider } from 'react-aria-components'

/**
 * Augment the `react-aria-components` module to let TypeScript know
 * what type of options are allowed when using the router inside
 * `RouterProvider`.
 *
 * `useRouter().push` in Next.js accepts a `url: string` and an optional
 * `options` object (e.g. `{ scroll?: boolean, shallow?: boolean }`).
 *
 * We extract the type of that options object using `Parameters` + `ReturnType`.
 */
declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

/**
 * This component integrates Next.js `useRouter` with `react-aria-components`
 * so that React Aria components can use Next.js navigation seamlessly.
 *
 * This allows React Aria's components that rely on navigation
 * (like <Link />) to work with Next.js routing.
 */
export const RouteProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>
}
