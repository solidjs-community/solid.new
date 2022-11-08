import { Component } from 'solid-js'
import * as Icon from '~/components/Icon'

const Navbar: Component = () => {
  return (
    <nav>
      <a href="https://www.solidjs.com" target="_blank">
        <Icon.Solid />
      </a>
      <a href="https://solid.new">
        <p class="text-3">solid.new</p>
      </a>
    </nav>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        Github: <Icon.Gitgub />
      </main>
    </>
  )
}
