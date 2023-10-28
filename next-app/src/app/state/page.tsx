import ClientComponent from "./clientComponent";

type Props = { key: string };

const state = async (key: Props = { key: "testKey" }) => {
  return (
    <div>
      <p>State page.</p>
      <ClientComponent key={key.key} />
    </div>
  );
};

export default state;
