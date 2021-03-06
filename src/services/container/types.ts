export enum ContainerType {
  TRANSIENT = 'transient',
  SINGLETON = 'singleton',
}

export interface ContainerService {
  name: string
  type: ContainerType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Class = { new (...args: any[]): any }

export interface Container {
  transient(name: string, object: Class, force?: boolean): Container
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  singleton(name: string, object: any, force?: boolean): Container
  setService(
    name: string,
    type: ContainerType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object: any,
    force?: boolean,
  ): Container
  resolve<T>(...serviceNames: string[]): T
  getService(name: string): ContainerService
  has(name: string): boolean
}

export enum Containers {
  REQUEST = 'request',
  APPLICATION = 'application',
}
