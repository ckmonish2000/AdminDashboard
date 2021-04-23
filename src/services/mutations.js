import { gql } from "@apollo/client";

let VerifyToken = gql`
  mutation auth($email: String, $password: String) {
    tokenAuth(email: $email, password: $password) {
      payload
      token
    }
  }
`;

let DeleteStaffAc = gql`
  mutation deleteAc($id: ID) {
    deleteStaffAccount(id: $id) {
      success
    }
  }
`;

let CreateStaff = gql`
  mutation createStaff(
    $email: String
    $name: String
    $password: String
    $phone: String
    $role: String
  ) {
    createStaffAccount(
      email: $email
      name: $name
      password: $password
      phone: $phone
      role: $role
    ) {
      user {
        name
      }
    }
  }
`;

export { VerifyToken, DeleteStaffAc, CreateStaff };
