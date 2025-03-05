const Maintenance = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
            {/* Wrench Icon Animation */}
            <div className="animate-bounce mb-4">
                <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18l2 2m0 0l3.5-3.5m-3.5 3.5L7 21m2-11a5 5 0 119 4.6V21m-4 0h4" />
                </svg>
            </div>
            
            {/* Maintenance Message */}
            <h1 className="text-7xl font-bold text-gray-950">We'll Be Back Soon!</h1>
            <p className="text-gray-600 mt-2 max-w-md">
                Our website is currently undergoing scheduled maintenance. We appreciate your patience and will be back online shortly.
            </p>
            
            {/* Refresh Suggestion */}
            {/* <p className="text-gray-500 mt-4 text-sm">Try refreshing the page later.</p> */}
        </section>
    );
};

export default Maintenance;
