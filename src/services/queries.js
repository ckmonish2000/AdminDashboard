import {gql} from "@apollo/client"


let getPermissions=gql`
query Premissions{
    permissions{
      id
      name
      codename
    }
  }
`

let getRoles=gql`
query getRoles{
    roles{
      name,
      id,
    }
  }
`

export {getPermissions,getRoles}