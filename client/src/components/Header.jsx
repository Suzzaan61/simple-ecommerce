import {Link} from "react-router-dom";

const Header = () => {
    return (
        <><div className={'bg-slate-200'}>
            <div className={'flex justify-between items-center max-w-7xl m-auto p-4'}>
                <h2 className={'text-xl'}>EcoMMerce</h2>
                <ul className={'flex gap-8'}>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li>Cart</li>
                    </Link>
                    <Link to={'/Order'}>
                        <li>Order</li>
                    </Link>
                    <Link to={'/sign-in'}>
                        <li>Signin</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Header;
