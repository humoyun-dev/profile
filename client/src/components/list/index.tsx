import { cn } from "@/lib/utils";
import ListItem from "./list-items";


interface ListProps {
  className?: string;
  label: string;
  data?: ListItemProps[] | undefined;
}

interface ListItemProps {
  title: string;
  subtitle?: string;
  content?: string;
}

const List = ({ className, label, data }: ListProps) => {
  return (
    <div className={cn("", className)}>
      <p className="text-3xl font-semibold">{label}</p>
      <div className="border-l-2 px-3 border-blue-700 h-full mt-6 flex flex-col justify-between space-y-5 ">
        {data?.map((i, id) => <ListItem key={id} {...i} />)}
      </div>
    </div>
  );
};

export default List;