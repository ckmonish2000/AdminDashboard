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

export { getPermissions, getRoles, isSuperUser };
