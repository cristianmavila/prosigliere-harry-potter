import { useQuery } from "@tanstack/react-query";

import { fetchStudents } from "@/services";
import ListCharacters from "@/components/list-characters";

const Students = () => {
  const { data } = useQuery({
    queryKey: ["students"],
    queryFn: () => fetchStudents(),
  });

  return (
    <div className="container grid gap-4">
      <h1>Students</h1>
      <ListCharacters data={data} />
    </div>
  );
};

export default Students;
