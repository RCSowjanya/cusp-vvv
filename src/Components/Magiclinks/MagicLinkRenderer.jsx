import React from "react";
import MagicLink1 from "./MagicLink1";
import MagicLink2 from "./MagicLink2";
import MagicLink3 from "./MagicLink3";

const MagicLinkRenderer = ({ data }) => {
  console.log(data)
  // Function to check if the magic link was sent less than 7 days ago
  const isMagicLinkLessThan7Days = () => {
    if (!data || !data.magic_link_sent_date) return false;
    const sentDate = new Date(data.magic_link_sent_date);
    const currentDate = new Date();
    const differenceInDays = Math.ceil(
      (currentDate - sentDate) / (1000 * 60 * 60 * 24)
    );
    return differenceInDays < 7;
  };

  // Add checks to ensure that data and its properties are available before trying to access them
  if (data.remarks_date) {
    return <MagicLink2 data={data} />;
  } else if (isMagicLinkLessThan7Days() && !data.remarks_date) {
    return <MagicLink3 data={data} />;
  } else if (!isMagicLinkLessThan7Days() && !data.remarks_date) {
    return <MagicLink1 data={data} />;
  }

  return null; // Fallback return in case no conditions match
};

export default MagicLinkRenderer;
