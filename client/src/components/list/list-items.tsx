interface ListItemProps {
  title: string;
  subtitle?: string;
  content?: string;
}

const ListItem = ({ title, content, subtitle }: ListItemProps) => {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-2">{title}</h1>
      <p className="text-lg mb-3 opacity-95 font-medium">{subtitle}</p>
      <p className="opacity-70">{content}</p>
    </div>
  );
};

export default ListItem;