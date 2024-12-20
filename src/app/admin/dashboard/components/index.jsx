'use client';

import LayoutTop from './top';
import LayoutNav from './menu';

export default function DashboardProvider({ children }) {

	return <div className="flex flex-col w-full h-[100dvh]">
    	<LayoutTop/>
    	<div className="w-full flex-grow bg-slate-50 relative">
            <div className="flex absolute h-full w-full">
                <LayoutNav/>
			    <div className="relative overflow-y-auto w-[calc(100%-208px)]">{children}</div>
		    </div>
        </div>
    </div>
}
