import { gql } from "@apollo/client";

let getPermissions = gql`
  query Premissions {
    permissions {
      id
      name
      codename
    }
  }
`;

let isSuperUser = gql`
  query isSuper {
    me {
      isSuperuser
    }
  }
`;

let getRoles = gql`
  query getRoles {
    roles {
      name
      id
    }
  }
`;

let Allusers = gql`
  query AllUsers {
    allUsers {
      id
      name
      email
      phone
      isStaff
      isVendor
      isSuperuser
      userPermissions {
        name
        codename
      }
    }
  }
`;
export { getPermissions, getRoles, isSuperUser, Allusers };
