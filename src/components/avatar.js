import Image from 'next/image';

const PROJECT_PATH = process.cwd();

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="object-fill w-10 h-10 mr-3 overflow-hidden bg-gray-300 rounded-full">
        <Image
          src={picture}
          alt={`${name}'s profile picture`}
          className="justify-between hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
          width="40"
          height="40"
        />
      </div>
      <div className="font-bold text-gray-700 hover:underline">{name}</div>
    </div>
  );
}
