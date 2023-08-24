import Link from "next/link";

const CatalogPageSwitchers = ({
  page,
  totalRecipes,
  showedRecipes,
  searchParams,
}: {
  searchParams: { [key: string]: any };
  page: number;
  totalRecipes: number;
  showedRecipes: number;
}) => {
  return (
    <nav className="flex mb-10 gap-3 items-end justify-center w-full ">
      {page - 1 > 1 && (
        <>
          <PageSwitcher searchParams={searchParams} page={page}>
            1
          </PageSwitcher>
          <div>...</div>
        </>
      )}
      {page - 1 >= 1 && (
        <PageSwitcher
          searchParams={searchParams}
          page={page}
          disabled={totalRecipes < (page - 1) * showedRecipes}
        >
          {page - 1}
        </PageSwitcher>
      )}

      <PageSwitcher searchParams={searchParams} page={page}>
        {page}
      </PageSwitcher>
      <PageSwitcher
        searchParams={searchParams}
        page={page}
        disabled={totalRecipes <= page * showedRecipes}
      >
        {page + 1}
      </PageSwitcher>
      <PageSwitcher
        page={page}
        searchParams={searchParams}
        disabled={totalRecipes < (page + 1) * showedRecipes}
      >
        {page + 2}
      </PageSwitcher>
      {page - 1 <= 1 && (
        <PageSwitcher
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
}: {
  searchParams: { [key: string]: any };
  children: any;
  page: number;
  disabled?: boolean;
}) => {
  return (
    <Link
      className={`px-3 text-lg font-medium py-2 rounded-lg leading-none  ${
        page === children
          ? "!bg-[#ff642f] text-white pointer-events-none"
          : "bg-[rgba(0,0,0,0.1)]"
      } ${disabled ? "pointer-events-none !bg-[rgba(0,0,0,0.2)]" : ""}`}
      href={`/recipes${
        parseInt(children) === 1
          ? "?" + new URLSearchParams(searchParams).toString()
          : "/" + children + "?" + new URLSearchParams(searchParams).toString()
      }`}
    >
      {children}
    </Link>
  );
};

export default CatalogPageSwitchers;
