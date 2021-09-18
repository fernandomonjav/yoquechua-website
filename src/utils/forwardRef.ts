import React from 'react'

export type PropsOfElement<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

export interface ComponentWithAs<
  TElementType extends keyof JSX.IntrinsicElements = 'div',
  TProps = unknown
> {
  <TExtendedElementType extends React.ElementType = TElementType>(
    props: Omit<PropsOfElement<TExtendedElementType>, 'as' | keyof TProps> & {
      as?: TExtendedElementType
    } & TProps
  ): JSX.Element
}

export const forwardRef = <TElement extends keyof JSX.IntrinsicElements = 'div', TProps = unknown>(
  component: React.ForwardRefRenderFunction<
    any,
    Omit<PropsOfElement<TElement>, 'as' | keyof TProps> & {
      as?: TElement
    } & TProps
  >
) => {
  return React.forwardRef(component) as ComponentWithAs<TElement, TProps>
}
