export default function CategoryList({ list }) {
  const categoryComponents = list.map((category) => (<li key={category}><a className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">{category}</a></li>));

  return (
    <div className="px-8">
      <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
      <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
        <ul className="grid grid-cols-1 gap-y-2">
          {categoryComponents}
        </ul>
      </div>
    </div>
  );
}
