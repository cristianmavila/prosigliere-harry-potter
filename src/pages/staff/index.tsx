import { useQuery } from "@tanstack/react-query";

import { fetchStaff } from "@/services";
import ListCharacters from "@/components/list-characters";

const Staff = () => {
  const { data } = useQuery({
    queryKey: ["staff"],
    queryFn: () => fetchStaff(),
  });

  return (
    <div className="container grid gap-4">
      <h1>Staff</h1>
      <ListCharacters data={data} />
    </div>
  );
};

export default Staff;
