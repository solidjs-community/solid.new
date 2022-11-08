import { Component } from 'solid-js'
import * as Icon from '~/components/Icon'

export const ReplBadge: Component = () => {
  return (
    <div class="h-8 flex items-strech bg-blue-6 text-white rounded">
      <div class="w-8 center-child border-r-1 border-r-blue-7">
        <div class="w-4 h-4 center-child">
          <Icon.SolidMono />
        </div>
      </div>
      <div class="flex-1 center-child px-2 font-medium">Open Solid Playground</div>
    </div>
  )
}
