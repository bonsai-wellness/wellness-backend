import moment from "moment";

export const stringToTime = (timeString: string): Date => {
  const momentTime = moment(timeString, "HH:mm:ss");
  return momentTime.toDate();
};

export const isValidTime = (timeString: string): Boolean => {
  const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
  return timeRegex.test(timeString);
};
