import { FiAlertTriangle } from 'react-icons/fi';

export default function Error({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-500">
      <FiAlertTriangle size={50} className="mb-4" />
      <h2 className="text-2xl font-bold">Error</h2>
      <p className="text-lg">{message}</p>
    </div>
  );
}