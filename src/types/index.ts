export type ContainerSize = 'blog' | 'container' | 'full'
export type SlicesTypes = 'text' | 'quote' | 'code' | 'image_with_caption'
export type ServicesStatus = 'default' | 'soon' | 'hide' | 'new'

export type NodeArrayOf<T> = Array<{ node: T }>

export interface GraphQueryOf<T> {
  edges: NodeArrayOf<T>
}
