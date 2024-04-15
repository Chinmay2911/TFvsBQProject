import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="zoom-y-out">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Comparison </span>Table</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">TensorFlow excels with small to medium datasets, its efficiency may diminish with massive datasets, making BigQuery a compelling option for handling vast volumes of data efficiently.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <b>Topic</b>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <b>TensorFlow</b>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <b>Google Big Query</b>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Performance</td>
                  <td className="px-6 py-4 whitespace-normal">High performance, especially on complex models</td>
                  <td className="px-6 py-4 whitespace-normal">Optimized handling for large datasets and performing on complex queries</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Scalability</td>
                  <td className="px-6 py-4 whitespace-normal">Scalable for distributed training across multiple GPUs and TPUs. This aids in the efficient use of resources and lowers the overall cost in terms of computing time and storage.</td>
                  <td className="px-6 py-4 whitespace-normal">Highly scalable can handle petabytes of data. It runs on a cloud platform, depending on the load of a task or workload demands it scales automatically ensuring consistent performance even with growing data volumes.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Ease of Use</td>
                  <td className="px-6 py-4 whitespace-normal">It requires programming knowledge and hence is not as easy to use.</td>
                  <td className="px-6 py-4 whitespace-normal">Very easy to use, with a smooth learning curve. It is beginner-friendly.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Integration with other tools</td>
                  <td className="px-6 py-4 whitespace-normal">Integrates with other Google Cloud Services and also other tools using Python libraries. In our case, we have integrated it with Mongo.</td>
                  <td className="px-6 py-4 whitespace-normal">A part of the Google Cloud Platform ecosystem. It provides native connections to Google Cloud Storage and other databases, along with support for popular BI tools.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">CPU Utilization</td>
                  <td className="px-6 py-4 whitespace-normal">Highly efficient CPU usage.</td>
                  <td className="px-6 py-4 whitespace-normal">Not as efficient as TensorFlow.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Memory Utilization</td>
                  <td className="px-6 py-4 whitespace-normal">Highly efficient Memory usage when dealing with small to medium-size data.</td>
                  <td className="px-6 py-4 whitespace-normal">Manages memory efficiently when dealing with big sets of data.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Overall Resource Utilization</td>
                  <td className="px-6 py-4 whitespace-normal">Can be resource-intensive, particularly for complex models and large datasets.</td>
                  <td className="px-6 py-4 whitespace-normal">Demonstrates effective resource utilization, ensuring efficient data analysis and querying. However, it is not as powerful as TensorFlow.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal">Cost</td>
                  <td className="px-6 py-4 whitespace-normal">Open source library</td>
                  <td className="px-6 py-4 whitespace-normal">Price depends on usage and storage, Costly for large datasets.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
