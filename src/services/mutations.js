import { gql } from "@apollo/client";

let VerifyToken = gql`
  mutation auth($email: String, $password: String) {
    tokenAuth(email: $email, password: $password) {
      payload
      token
    }
  }
`;

// let CreateStaff = gql`
// mutation createStaff($email:String,$name:String,password:$)
// `;

export { VerifyToken };
