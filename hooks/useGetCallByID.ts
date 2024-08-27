import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call | undefined>(undefined);
  const [isCallLoading, setIsCallLoading] = useState(true);
  
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client || !id) {
      setIsCallLoading(false);
      return;
    }

    const loadCall = async () => {
      try {
        // Fetch calls from the client
        const { calls } = await client.queryCalls({
          filter_conditions: { id },
        });

        // Check if any calls are returned and set the first one
        if (calls.length > 0) {
          setCall(calls[0]);
        } else {
          console.log("No calls found with the provided id.");
          setCall(undefined);
        }

        setIsCallLoading(false);
      } catch (error) {
        console.error("Error fetching calls:", error);
        setIsCallLoading(false);
      }
    };

    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};
