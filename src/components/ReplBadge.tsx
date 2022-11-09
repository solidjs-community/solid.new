import { Component } from 'solid-js'
import * as Icon from '~/components/Icon'
import clsx from 'clsx'

export type ReplType = 'csb' | 'solid' | 'stackblitz' | 'gitpod'

const replBadgeConfig: Record<
  ReplType,
  {
    title: string
    icon: Component<Icon.IconProps>
    bgClass: string
    dividerClass: string
    href: (ghPath: string) => string
  }
> = {
  solid: {
    title: 'Open Solid Playground',
    icon: Icon.SolidMono,
    bgClass: 'bg-#335d92',
    dividerClass: 'border-#2e5483',
    href: () => 'https://playground.solidjs.com',
  },
  csb: {
    title: 'Open in CodeSandbox',
    icon: Icon.CSB,
    bgClass: 'bg-black',
    dividerClass: 'border-gray-8',
    href: ghPath => `https://codesandbox.io/s/github/${ghPath}`,
  },
  stackblitz: {
    title: 'Open in StackBlitz',
    icon: Icon.Stackblitz,
    bgClass: 'bg-#1374EF',
    dividerClass: 'border-#1269D3',
    href: ghPath => `https://stackblitz.com/github/${ghPath}`,
  },
  gitpod: {
    title: 'Open in Gitpod',
    icon: Icon.Gitpod,
    bgClass: 'bg-#FF8A00',
    dividerClass: 'border-#f27e02',
    href: ghPath => `https://gitpod.io/#https://github.com/${ghPath}`,
  },
}

export const ReplBadge: Component<{ type: ReplType; ghPath: string }> = props => {
  const config = replBadgeConfig[props.type]
  const Icon = config.icon
  return (
    <a href={config.href(props.ghPath)}>
      <div class={clsx('h-8 flex items-strech text-white rounded w-max', config.bgClass)}>
        <div class={clsx('w-8 center-child border-r-1', config.dividerClass)}>
          <div class="w-4 h-4 center-child">
            <Icon class="w-full h-full" />
          </div>
        </div>
        <div class="flex-1 center-child px-2 font-medium">{config.title}</div>
      </div>
    </a>
  )
}
