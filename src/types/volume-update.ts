/**
 * Docker Volume Update Query
 */

export type DockerVolumeUpdateQuery = {
  version: number;
}

/**
 * Docker Volume Update Body
 */

export type DockerVolumeUpdateBody = {
  Spec: {
    Group: string
    AccessMode: {
      Scope: string
      Sharing: string
      MountVolume: any
      Secrets: {
        Key: string
        Secret: string
      }[]
      AccessibilityRequirements: {
        Requisite: {
          [key: string]: string;
        }[]
        Preferred: {
          [key: string]: string;
        }[]
      }
      CapacityRange: {
        RequiredBytes: number;
        LimitBytes: number;
      }
      Availability: string;
    }
  }
}
