import React, { useState } from "react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("forum");

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b-2 border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab("forum")}
          className={`p-4 w-1/3 text-center ${
            activeTab === "forum"
              ? "border-b-4 border-blue-500 font-semibold text-blue-600"
              : "text-gray-600"
          }`}
        >
          Community Forum
        </button>
        <button
          onClick={() => setActiveTab("library")}
          className={`p-4 w-1/3 text-center ${
            activeTab === "library"
              ? "border-b-4 border-blue-500 font-semibold text-blue-600"
              : "text-gray-600"
          }`}
        >
          Resource Library
        </button>
        <button
          onClick={() => setActiveTab("blog")}
          className={`p-4 w-1/3 text-center ${
            activeTab === "blog"
              ? "border-b-4 border-blue-500 font-semibold text-blue-600"
              : "text-gray-600"
          }`}
        >
          Blog & News
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "forum" && (
          <div>
            <h2 className="text-xl font-semibold">Community Forum</h2>
            <p>Here is the forum where users can discuss various topics.</p>
          </div>
        )}
        {activeTab === "library" && (
          <div>
            <h2 className="text-xl font-semibold">Resource Library</h2>
            <p>Explore resources and materials available in the library.</p>
          </div>
        )}
        {activeTab === "blog" && (
          <div>
            <h2 className="text-xl font-semibold">Blog & News</h2>
            <p>Read the latest blog posts and news updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
