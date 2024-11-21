import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MagicLink1 from "./MagicLink1"; // Import the MagicLink1 component
import MagicLink2 from "./MagicLink2"; // Import the MagicLink2 component
import MagicLink3 from "./MagicLink3"; // Import the MagicLink3 component

const MagicLink = () => {
  const [reference, setReference] = useState(0);
  const [data, setData] = useState(null); // Initially set to null
  const location = useLocation();
  // Capture the query param 'referrer'
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const referenceParam = queryParams.get("referrer"); // Get the 'reference' parameter
    setReference(referenceParam ? parseInt(referenceParam) : 0); // Set the reference in the state
  }, [location.search]);

  // Fetch the data once the reference is set
  useEffect(() => {
    const getData = async (referrer) => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "customer/getMagicLinkDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reference: referrer, // Sending reference as JSON
            }),
          }
        );

        const result = await response.json();
        if (result.status===200){
            setData(result.data[0])
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData({}); // Set data to an empty object on error
      }
    };

    if (reference !== 0 && data===null) {
      getData(reference);
    }
  }, [reference]); // This will only trigger when 'reference' changes

  // Function to check if the magic link was sent less than or more than 7 days ago
  const isMagicLinkLessThan7Days = () => {
    if (!data || !data.magic_link_sent_date) return false;
    const sentDate = new Date(data.magic_link_sent_date);
    const currentDate = new Date();
    const differenceInDays = Math.ceil(
      (currentDate - sentDate) / (1000 * 60 * 60 * 24)
    );
    
    console.log(differenceInDays)
    return differenceInDays < 7;
  };
  useEffect(()=>{
    console.log(data)
    },[data])

//   // Conditional rendering based on the conditions
  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  // Conditional rendering based on the API data and logic
  return (
    <>
    <div>{isMagicLinkLessThan7Days()}</div>
      {data.remarks_date && <MagicLink2 data={data} />}
      {isMagicLinkLessThan7Days() && !data.remarks_date && <MagicLink3 data={data} reference={reference}/>}
      {!isMagicLinkLessThan7Days() && <MagicLink1 data={data} />}
    </>
  );
};

export default MagicLink;
