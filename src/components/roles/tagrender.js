import { Tag } from "antd";
function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color="gold"
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

export default tagRender;
