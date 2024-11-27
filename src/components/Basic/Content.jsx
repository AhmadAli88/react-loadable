// Content.jsx
export const BasicContent = () => {
    return (
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Main Content</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-medium">Section 1</h3>
            <p>Content for section 1 goes here...</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-medium">Section 2</h3>
            <p>Content for section 2 goes here...</p>
          </div>
        </div>
      </main>
    );
  };
  
  export default BasicContent;