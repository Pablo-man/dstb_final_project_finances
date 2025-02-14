import { BarChart2 } from "lucide-react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl p-6 text-center bg-white shadow-lg rounded-2xl">
        <BarChart2 className="w-12 h-12 mx-auto text-blue-500" />
        <h1 className="text-3xl font-bold mt-4">Gestor de Finanzas Personales</h1>
        <p className="text-gray-600 mt-2">
          Administra tus ingresos, gastos y ahorros de manera eficiente con nuestra aplicación.
        </p>
        <div className="mt-4">
        </div>
      </div>
    </div>
  );
}

export default HomePage;
