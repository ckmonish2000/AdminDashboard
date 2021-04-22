import {gql} from "@apollo/client"

let VerifyToken=gql`
mutation auth($email:String,$password:String){
    tokenAuth(email:$email,password:$password){
      payload
      token
    }
  }
`


export {VerifyToken}