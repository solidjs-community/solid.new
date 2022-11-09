import { Component, createResource, For, JSX, ParentComponent, Suspense, untrack } from 'solid-js'
import * as Icon from '~/components/Icon'
import { ReplBadge } from '~/components/ReplBadge'

const Navbar: Component = () => {
  return (
    <nav class="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between bg-white border-b-1 border-gray-2">
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

const Section: ParentComponent<{
  id: string
  title: JSX.Element
  subtitle: JSX.Element
}> = props => {
  return (
    <section
      id={props.id}
      class="mt-30 p-6 pl-12 -ml-6 mr-6 rounded-md bg-white border-1 border-gray-2 shadow-lg flex flex-col items-start"
    >
      <h2 class="text-2xl font-bold">{props.title}</h2>
      <p class="mt-4">{props.subtitle}</p>
      <div class="mt-6 w-full">{props.children}</div>
    </section>
  )
}

async function fetchGithubContents(
  owner: string,
  repo: string,
  path?: string,
): Promise<{ name: string; type: string }[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path ?? ''}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_PAT}`,
          Accept: 'application/vnd.github+json',
        },
      },
    )
    return await res.json()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fetching github content ${owner}/${repo}/${path ?? ''}`, error)
    return []
  }
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
          <h2 class="text-link-lg mt-8">
            By choosing from selected <span class="text-blue-5">official</span> and{' '}
            <span class="text-orange-5">community</span> project templates:
          </h2>
          <ul class="text-link-lg">
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

        <Section
          id="playground"
          title="Open new playground"
          subtitle="Open an online solid code editor right in your browser and see the compiler output."
        >
          <ReplBadge type="solid" ghPath="" />
        </Section>

        <Section
          id="solid"
          title={
            <>
              Create new <span class="text-blue-5">Solid</span> project
            </>
          }
          subtitle="Official set of vite-based SolidJS templates for client applications."
        >
          {untrack(() => {
            const owner = 'solidjs'
            const repo = 'templates'

            const [templates] = createResource(async () =>
              (await fetchGithubContents(owner, repo))
                .filter(d => d.type === 'dir' && d.name[0] !== '.')
                .map(d => d.name)
                .sort((a, b) => (a.length < b.length ? -1 : 1)),
            )

            return (
              <ul>
                <Suspense>
                  <For each={templates()}>
                    {name => {
                      const ghPath = `${owner}/${repo}/tree/master/${name}`
                      return (
                        <li class="border-t-1 border-gray-4 pt-6 pb-8">
                          <div class="flex">
                            <header class="flex-1">
                              <h4 class="text-link-lg">
                                {name
                                  .replace('-', ' + ')
                                  .replace(/\bjs/, 'JavaScript')
                                  .replace(/\bts/, 'TypeScript')}
                              </h4>
                            </header>
                            <div>
                              <a href={`https://github.com/${ghPath}`}>
                                <Icon.Github />
                              </a>
                            </div>
                          </div>
                          <div class="mt-5 flex flex-col space-y-4">
                            <ReplBadge type="stackblitz" ghPath={ghPath} />
                            <ReplBadge type="csb" ghPath={ghPath} />
                            <ReplBadge type="gitpod" ghPath={ghPath} />
                          </div>
                        </li>
                      )
                    }}
                  </For>
                </Suspense>
              </ul>
            )
          })}
        </Section>

        {/* TODO: remove */}
        <div class="h-screen"></div>
      </main>
    </>
  )
}
