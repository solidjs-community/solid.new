import { Component, ComponentProps } from 'solid-js'

export type IconProps = Pick<ComponentProps<'svg'>, 'class' | 'classList'> & { alt?: string }

const ExternalIcon: Component<IconProps & { path: string; alt: string }> = props => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>{props.alt}</title>
    <use href={props.path} />
  </svg>
)

export const Github: Component<IconProps> = props => (
  <ExternalIcon alt="Github" {...props} path="/github.svg#githubSvgLogo" />
)

export const Discord: Component<IconProps> = props => (
  <ExternalIcon alt="Discord" {...props} path="/discord.svg#discordSvgLogo" />
)

export const Solid: Component<IconProps> = props => (
  <img alt="Solid" class={`img-svg ${props.class ?? ''}`} src="/solid.svg" />
)

export const SolidMono: Component<IconProps> = props => (
  <img alt={props.alt ?? 'Solid'} class={`img-svg ${props.class ?? ''}`} src="/solidMono.svg" />
)

export const CSB: Component<IconProps> = props => (
  <img alt={props.alt ?? 'CodeSandbox'} class={`img-svg ${props.class ?? ''}`} src="/csb.svg" />
)

export const Stackblitz: Component<IconProps> = props => (
  <img
    alt={props.alt ?? 'Stackblitz'}
    class={`img-svg ${props.class ?? ''}`}
    src="/stackblitz.svg"
  />
)

export const Gitpod: Component<IconProps> = props => (
  <img alt={props.alt ?? 'Gitpod'} class={`img-svg ${props.class ?? ''}`} src="/gitpod.svg" />
)

export const ArrowRight: Component<IconProps> = props => (
  <ExternalIcon alt="ArrowRight" {...props} path="/arrowRight.svg#arrowRightSvg" />
)
