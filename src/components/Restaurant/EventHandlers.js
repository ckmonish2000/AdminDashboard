import { message } from "antd";

const CreateRestaurant = (CreateRest) => {
  CreateRest({
    variables: {
      add: "xyz",
      category: ["BARS", "HANGOUT_SPOT"],
      contact: "9341877883",
      lat: "0.67",
      long: "6.75",
      traffic: [
        {
          weekday: "monday",
          fromTime: "06:00:00",
          toTime: "18:00:00",
          percentage: 20,
        },
      ],
      timing: [{ weekday: "monday", fromTime: "06:00:00", toTime: "18:00:00" }],
      name: "k2",
      type: ["VEG"],
    },
  })
    .then((val) => {
      if (val.data?.createRest?.success) {
        message.success("restaurant created");
      }
    })
    .catch((err) => console.log(err));
};

export { CreateRestaurant };
