import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useState } from "react";

const useUpVote = () => {
  const [RF, setRF] = useState(null);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: upVotes = [] } = useQuery({
    queryKey: ["upVotes", user?.email, RF],
    queryFn: async () => {
      const res = await axiosPublic.get(`/upVote/${user?.email}`);
      return res.data;
    },
  });

  return [upVotes, setRF];
};

export default useUpVote;
