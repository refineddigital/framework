import { Container } from '../container/types'

// @todo remove for Map instances instead
export interface KeyValue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface VisionElixirConfig {
  name: string
  host: string
  port: number
  debug: boolean

  baseDirectory: string

  output?: {
    performance?: boolean
  }

  static: {
    directory: string
    maxage?: number
    defer?: boolean
    hidden?: boolean
    index?: string
  }

  services: {
    file: string
    directory: string
    require: {
      project: string[]
      visionElixir: string[]
    }
  }
}

export interface Service {
  applicationInit?: (container: Container) => void
  applicationBoot?: (container: Container) => void
  init?: (container: Container) => void
  boot?: (container: Container) => void
  down?: (container: Container) => Promise<void>
}

export const SERVICE_APP = 'app'
