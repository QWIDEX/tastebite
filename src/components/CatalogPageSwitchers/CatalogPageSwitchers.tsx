import Link from "next/link";

const CatalogPageSwitchers = ({
  page,
  totalRecipes,
  showedRecipes,
  searchParams,
  baseUrl = "/recipes",
}: {
  searchParams: { [key: string]: any };
  page: number;
  totalRecipes: number;
  showedRecipes: number;
  baseUrl?: string;
}) => {
  return (
    <nav className="flex mb-10 gap-3 items-end justify-center w-full ">
      {page - 1 > 1 && (
        <>
          <PageSwitcher
            baseUrl={baseUrl}
            searchParams={searchParams}
            page={page}
          >
            1
          </PageSwitcher>
          <div>...</div>
        </>
      )}
      {page - 1 >= 1 && (
        <PageSwitcher
          baseUrl={baseUrl}
          searchParams={searchParams}
          page={page}
          disabled={totalRecipes < (page - 1) * showedRecipes}
        >
          {page - 1}
        </PageSwitcher>
      )}

      <PageSwitcher baseUrl={baseUrl} searchParams={searchParams} page={page}>
        {page}
      </PageSwitcher>
      <PageSwitcher
        baseUrl={baseUrl}
        searchParams={searchParams}
        page={page}
        disabled={totalRecipes <= page * showedRecipes}
      >
        {page + 1}
      </PageSwitcher>
      <PageSwitcher
        baseUrl={baseUrl}
        page={page}
        searchParams={searchParams}
        disabled={totalRecipes < (page + 1) * showedRecipes}
      >
        {page + 2}
      </PageSwitcher>
      {page - 1 <= 1 && (
        <PageSwitcher
          baseUrl={baseUrl}
          searchParams={searchParams}
          page={page}
          disabled={totalRecipes < (page + 2) * showedRecipes}
        >
          {page + 3}
        </PageSwitcher>
      )}
    </nav>
  );
};

const PageSwitcher = ({
  children,
  page,
  disabled,
  searchParams,
  baseUrl,
}: {
  searchParams: { [key: string]: any };
  children: any;
  page: number;
  disabled?: boolean;
  baseUrl: string;
}) => {
  return (
    <Link
      className={`px-3 text-lg font-medium py-2 rounded-lg leading-none  ${
        page === children
          ? "!bg-[#ff642f] text-white pointer-events-none"
          : "bg-[rgba(0,0,0,0.1)]"
      } ${disabled ? "pointer-events-none !bg-[rgba(0,0,0,0.2)]" : ""}`}
      href={
        baseUrl +
        `${
          parseInt(children) === 1
            ? "?" + new URLSearchParams(searchParams).toString()
            : "/" +
              children +
              "?" +
              new URLSearchParams(searchParams).toString()
        }`
      }
    >
      {children}
    </Link>
  );
};

export default CatalogPageSwitchers;
