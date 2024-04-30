export const generateToast = (error) => {
  let obj = [];
  if (!error?.response) {
    obj.push({
      title: "Error",
      description: error.message,
    });
  } else {
    const err = error?.response?.data;
    if (err?.errors && err?.errors?.length > 0) {
      for (let msg of err?.errors) {
        obj.push({
          title: "Error",
          description: msg.msg,
        });
      }
    } else if (err?.message) {
      obj.push({
        title: "Error",
        description: err.message,
      });
    } else {
      obj.push({
        title: "Error",
        description: err,
      });
    }
  }
  return obj;
};

export const convertTimeStampToDate = (date) => {
  let currentDate;

  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const convertTimeStampToDateWithoutZero = (date) => {
  let currentDate;

  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const convertTimeStampToTime = (date) => {
  let currentDate;
  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};

export const convertDateToTimeStamp = (stamp) => {
  const dateString = stamp;
  const [year, month, day] = dateString.split("-");
  const date = new Date(`${year}-${month}-${day}`);
  const timestamp = date.getTime();
  return timestamp;
};

export const convertTimeStampToMoment = (date) => {
  let currentDate;
  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};

export const convertTimeStampToMomentWithHMS = (date) => {
  let currentDate;
  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }

  // Extracting date components
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  // Padding with leading zeros if needed
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Creating formatted date string with time
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

export const convertTimeStampToMomentMonth = (date) => {
  let currentDate;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  let month = months[currentDate.getMonth()];
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};
