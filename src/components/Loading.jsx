function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      {/* <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="loading-text">Loading...</div>
      </div> */}
      <img
        className="w-64 h-64 rounded-full"
        src="/loading.gif"
        alt="Loading"
      />
      <p>Please wait while Loading........</p>
    </div>
  );
}

export default Loading;
