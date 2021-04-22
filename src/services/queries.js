import {gql} from "@apollo/client"


let getRestaurantDetails=gql`
query restaurantType{
    RestaurantDetails{
      restName
      restType
      restCategory
    }
  }
`


export {getRestaurantDetails}