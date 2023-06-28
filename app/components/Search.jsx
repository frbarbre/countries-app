export default function Search({ searchValue, setSearchValue, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative h-max w-full md:max-w-[500px]"
    >
      <div className="absolute left-[32px] top-[50%] translate-y-[-50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            id="search-ico"
            fill="none"
            stroke="#131416"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search py-5 pr-5 pl-20 font-[14px] w-full shadow-std rounded-lg outline-none"
      />
    </form>
  );
}
