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

const closeModal = (setOpen) => {
  setOpen(false);
};

const Day = (idx) => {
  switch (idx) {
    case 2:
      return "Mon";
      break;
    case 3:
      return "Tue";
      break;
    case 4:
      return "Wed";
      break;
    case 5:
      return "Thu";
      break;
    case 6:
      return "Fri";
      break;
    case 7:
      return "Sat";
      break;
    case 1:
      return "Sun";
      break;
    default:
      break;
  }
};

export { CreateRestaurant, closeModal, Day };
