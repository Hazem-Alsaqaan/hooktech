const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center">
      <h1
        className={`text-center text-4xl text-black font-bold my-10 mx-auto p-5 rounded-xl border-b-4 select-none border-solid border-blue-500  max-sm:text-2xl`}
      >
        {title ? title : ""}
      </h1>
    </div>
  );
};
export default SectionTitle;
