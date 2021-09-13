import React from 'react'

export type PropsOfElement<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never

export type ComponentWithAs<TElementType extends React.ElementType, TProps = unknown> = {
  <TExtendedElementType extends React.ElementType = TElementType>(
    props: React.PropsWithChildren<TProps> & {
      as?: TExtendedElementType
    } & PropsOfElement<TExtendedElementType>
  ): React.ReactElement<any, any>
  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
}

export function forwardRef<TElementType extends React.ElementType, TProps = unknown>(
  component: React.ForwardRefRenderFunction<
    any,
    React.PropsWithChildren<TProps> & {
      as?: TElementType
    } & PropsOfElement<TElementType>
  >
) {
  return React.forwardRef(component) as unknown as ComponentWithAs<TElementType, TProps>
}
