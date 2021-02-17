import { Geo } from './geo'
export interface Address {
    street: string,
    suite?: string | undefined,
    city: string,
    zipcode: string,
    geo: Geo
}
