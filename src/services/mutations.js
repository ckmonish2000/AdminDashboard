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

const UpdateStaff = gql`
  mutation updatestaffcreateStaff(
    $email: String
    $name: String
    $password: String
    $phone: String
    $role: String
    $id: ID
  ) {
    updateStaffAccount(
      email: $email
      name: $name
      password: $password
      phone: $phone
      role: $role
      id: $id
    ) {
      user {
        id
        name
      }
    }
  }
`;

let createRole = gql`
  mutation createrole($name: String, $permission: [String]) {
    createRole(name: $name, permissionCodes: $permission) {
      success
    }
  }
`;

let DeleteRole = gql`
  mutation deleteRole($id: ID) {
    deleteRole(id: $id) {
      success
    }
  }
`;

let UpdateRole = gql`
  mutation UpdateRole($id: ID, $name: String, $permission: [String]) {
    updateRole(id: $id, name: $name, permissionCodes: $permission) {
      success
    }
  }
`;

export {
  VerifyToken,
  DeleteStaffAc,
  CreateStaff,
  UpdateStaff,
  createRole,
  DeleteRole,
  UpdateRole,
};
