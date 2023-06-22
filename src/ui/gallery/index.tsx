import { Children, ReactNode } from "react"

export const Gallery = ({ children }: { children: ReactNode}) => {
  return <ul className="grid grid-cols-3 max-w-xl mx-auto gap-4">
    {Children.map(children, child => <li>{child}</li>)}
  </ul>
}