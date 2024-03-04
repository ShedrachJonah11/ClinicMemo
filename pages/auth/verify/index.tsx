import { getUserProfile, verifyAccount } from "@/application/api/apis";
import { storeJSONdata } from "@/application/utils/functions";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { manualRefresher } from "@/application/api/axiosInstance";

export default function Verify() {
  const router = useRouter();
  const { query } = router;

  const [isVeridfied,setVerifed]=useState(false);
  const getData = async () => {
    try {
      const token = query.token;

      if (token) {
        console.log(token);
        await verifyAccount(token);
        setVerifed(true);
      
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      // Handle error as needed
    }
  }

  useEffect(() => {
    getData();
  }, [query.token]);

  return (<div>{isVeridfied?(<>Verified</>):(<>Verifying</>)}</div>);
}
