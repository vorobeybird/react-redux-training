type GeoAddressUserType = {
  lat: string,
  lng: string
}

type AddressUserType = {
  city: string
  street: string
  suite: string
  zipcode: string
  geo: GeoAddressUserType
}

type UserCompanyType = {
  bs: string
  catchPhrase: string
  name: string
}

export type UserType = {
  id: number
  name: string
  userName: string
  email: string
  phone: string
  website: string
  address: AddressUserType
  company: UserCompanyType
}
