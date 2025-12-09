import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Apply from './pages/Apply';
import About from './pages/About';
import Faq from './pages/Faq';
import { Page } from './types';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>(Page.HOME);

    const renderPage = () => {
        switch (page) {
            case Page.HOME: return <Home setPage={setPage} />;
            case Page.RANKINGS: return <Rankings />;
            case Page.APPLY: return <Apply />;
            case Page.ABOUT: return <About />;
            case Page.FAQ: return <Faq />;
            default: return <Home setPage={setPage} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            <Header currentPage={page} setPage={setPage} />
            
            {/* Breadcrumb strip */}
            <div className="bg-white border-b border-slate-200 py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-xs text-slate-500 flex items-center">
                        <span className="hover:underline cursor-pointer" onClick={() => setPage(Page.HOME)}>SLTF Portal</span>
                        <span className="mx-2">/</span>
                        <span className="font-semibold text-gov-blue">{page}</span>
                    </div>
                </div>
            </div>

            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {renderPage()}
            </main>

            <Footer />
        </div>
    );
};

export default App;