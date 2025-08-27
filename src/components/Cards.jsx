import React from "react";

function Cards() {
  return (
    <div className="grid md:grid-cols-3 bg-gray-900 gap-6 p-10">
      {/* Feature 1 */}
      <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Let AI Handle the Heavy Lifting.
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Craft diverse and well-structured exams automatically, with our advanced tool balancing question complexities effortlessly.
        </p>
      </a>

      {/* Feature 2 */}
      <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Various formats
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Pick from a selection of professional formats to generate consistent, well-organized question papers for any subject.
        </p>
      </a>

      {/* Feature 3 */}
      <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Question Database
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Browse and arrange a vast library of questions, categorized by field, theme, and complexity.
        </p>
      </a>
    </div>
  );
}

export default Cards;
