import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

timeAgo.format(new Date());
// "just now"

timeAgo.format(Date.now() - 60 * 1000);
// "1 minute ago"

timeAgo.format(Date.now() - 2 * 60 * 60 * 1000);
// "2 hours ago"

timeAgo.format(Date.now() - 24 * 60 * 60 * 1000);
// "1 day ago"

const getTimeAgo = (time) => {
  // console.log(time);
  return timeAgo.format(time);
};

export default getTimeAgo;
