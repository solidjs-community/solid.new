import { Component, ParentComponent } from 'solid-js'
import * as Icon from '~/components/Icon'
import { ReplBadge } from '~/components/ReplBadge'

const Navbar: Component = () => {
  return (
    <nav class="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between bg-white border-b-1">
      <div class="flex items-center space-x-3">
        <a href="https://www.solidjs.com" target="_blank">
          <Icon.Solid />
        </a>
        <a href="https://solid.new">
          <p class="text-xl font-bold text-blue-5">solid.new</p>
        </a>
      </div>
      <div class="flex items-center space-x-3">
        <a href="https://discord.com/invite/solidjs" target="_blank">
          <Icon.Discord />
        </a>
        <a href="https://github.com/solidjs-community/solid.new" target="_blank">
          <Icon.Github />
        </a>
      </div>
    </nav>
  )
}

export default function Home() {
  const ListHighlight: ParentComponent = props => {
    return <span class="text-black">{props.children}</span>
  }
  const ListLink: ParentComponent = props => {
    return (
      <li class="mt-4 text-gray-5">
        <a href="#" class="flex items-center">
          <div class="h-0.52 w-3 inline-block bg-gray-5 mr-2" />
          <span>{props.children}</span>
          <Icon.ArrowRight class="ml-1 inline-block box-content" />
        </a>
      </li>
    )
  }

  return (
    <>
      <Navbar />
      <main class="mt-36">
        <header class="px-6">
          <h1 class="text-4xl font-bold">Start your new Solid project in seconds</h1>
          <h2 class="text-link-l mt-8">
            By choosing from selected <span class="text-blue-5">official</span> and{' '}
            <span class="text-orange-5">community</span> project templates:
          </h2>
          <ul class="text-link-l">
            <ListLink>
              new <ListHighlight>Solid Playground</ListHighlight>
            </ListLink>
            <ListLink>
              new <ListHighlight>Solid</ListHighlight> app
            </ListLink>
            <ListLink>
              new <ListHighlight>SolidStart</ListHighlight> app
            </ListLink>
            <ListLink>
              new <ListHighlight>Mobile</ListHighlight> app
            </ListLink>
            <ListLink>
              new <ListHighlight>library</ListHighlight>
            </ListLink>
          </ul>
        </header>
        <section
          class="mt-30 p-6 pl-12 -ml-6 mr-6 rounded-md bg-white border-1
            flex flex-col items-start"
        >
          <h2 class="text-2xl font-bold">Open new playground</h2>
          <p class="mt-4">
            Open an online solid code editor right in your browser and see the compiler output.
          </p>
          <div class="mt-6">
            <ReplBadge />
          </div>
        </section>

        {/* TODO: remove */}
        <div class="h-screen"></div>
      </main>
    </>
  )
}
