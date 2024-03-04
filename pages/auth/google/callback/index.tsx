import { getUserProfile } from "@/application/api/apis";
import { storeJSONdata } from "@/application/utils/functions";
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import Loader from "@/components/Loader";
import { manualRefresher } from "@/application/api/axiosInstance";

export default function Google() {
  const router = useRouter();
  const { query } = router;

  const getData = async () => {
    try {
      const state = query.state;

      if (state) {
        console.log(state);

        storeJSONdata("user", {
          access_token: "xxxx",
          refresh_token: state,
          type: "bearer",
        });

        await manualRefresher().catch((e) => console.log(e));

        if (typeof window !== 'undefined') {
          // window.location.href = (process.env.BASE_URL || 'http://localhost:3000') + "/dashboard";
        }
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      // Handle error as needed
    }
  }

  useEffect(() => {
    getData();
  }, [query.state]);

  return <Loader type={'FULL'} />;
}
