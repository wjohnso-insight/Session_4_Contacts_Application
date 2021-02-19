import { Contact } from './contact'
export const Contacts : Contact[] = [
    {
        id: 11,
        name: 'Will Johnston',
        username: 'wjohnsto',
        email: 'will.johnston@insight.com',
        address: {
            street: 'Lilley Ave.',
            suite: undefined,
            city: 'Columbus',
            zipcode: '43206',
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-812-343-1048 x0001",
        website: "willjohnston.tech",
        company:{
            name: "Insight",
            catchPhrase: "P = NP",
            bs: "Make cool stuff."
        }
    },
    {
        id: 12,
        name: 'Julia Hypes',
        username: 'jhypes',
        email: 'j.hypes0336@gmail.com',
        address: {
            street: 'Lilley Ave.',
            suite: undefined,
            city: 'Columbus',
            zipcode: '43206',
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-740-225-1258 x3421",
        website: "willjohnston.tech",
        company:{
            name: "Insight",
            catchPhrase: "P = NP",
            bs: "Make cool stuff."
        }
    }
]