import Categories from "@/components/Categories/Categories";

export default function CategoriesPage() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-7xl font-semibold font-serif mb-24 relative after:absolute after:w-full after:-bottom-7 after:content-[''] after:h-[1px] after:bg-[#ededed] after:left-0">
        Categories
      </h1>
      <Categories />
    </div>
  );
}
