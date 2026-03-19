import { Outlet } from 'react-router-dom';

import ProfileMenu from '../components/ProfileMenu';

export default function AccountLayout() {

    return(
        <main className='flex'>
            <ProfileMenu />
            <div className="w-full bg-amber-500">
                <Outlet />
            </div>
        </main>
    );
}