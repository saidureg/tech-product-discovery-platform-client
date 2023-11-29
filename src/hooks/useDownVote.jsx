import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useDownVote = () => {
  const [RF, setRF] = useState(null);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: downVote = [] } = useQuery({
    queryKey: ["downVote", user?.email, RF],
    queryFn: async () => {
      const res = await axiosPublic.get(`/downVote/${user?.email}`);
      return res.data;
    },
  });

  return [downVote, setRF];
};

export default useDownVote;
