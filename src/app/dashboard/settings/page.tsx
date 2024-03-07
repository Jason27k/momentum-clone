"use server";

const Settings = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <h2>Subscription Settings</h2>
      <ul className="list-none mt-4 mb-6">
        <li className="flex items-center mb-4">
          <label htmlFor="plan" className="w-1/4 text-sm font-medium mr-2">
            Plan:
          </label>
          <select id="plan" className="rounded-md border border-gray-300 p-2">
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="pro">Pro</option>
          </select>
        </li>
        <li className="flex items-center mb-4">
          <label
            htmlFor="emailNotifications"
            className="w-1/4 text-sm font-medium mr-2"
          >
            Email Notifications:
          </label>
          <input
            type="checkbox"
            id="emailNotifications"
            defaultChecked
            className="mr-2 accent-blue-600"
          />
        </li>
        <li className="flex items-center mb-4">
          <label
            htmlFor="billingFrequency"
            className="w-1/4 text-sm font-medium mr-2"
          >
            Billing Frequency:
          </label>
          <select
            id="billingFrequency"
            className="rounded-md border border-gray-300 p-2"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </li>
        <li className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Save Settings
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
