export const BasicHeader = () => {
    return (
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default BasicHeader;