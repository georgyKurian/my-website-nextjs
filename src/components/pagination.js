export default function Pagination() {
  return (
    <div className="mt-8">
      <div className="flex">
        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white cursor-not-allowed rounded-md">
          previous
        </a>

        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white hover:bg-blue-500 hover:text-white rounded-md">
          1
        </a>

        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white hover:bg-blue-500 hover:text-white rounded-md">
          2
        </a>

        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white hover:bg-blue-500 hover:text-white rounded-md">
          3
        </a>

        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white hover:bg-blue-500 hover:text-white rounded-md">
          Next
        </a>
      </div>
    </div>
  );
}
