import {Link} from "react-router-dom";

const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(currentUser);
    const currentUsera = JSON.parse(localStorage.getItem("ram"));
    if (currentUsera) {
        console.log("hello");
    }
    return (
        <><div className={'bg-slate-200'}>
            <div className={'flex justify-between items-center max-w-7xl m-auto p-4'}>
                <h2 className={'text-xl'} >Ecommerce</h2>
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
                    <Link to={'/profile'}>
                    {currentUser ? (<img className={'h-8 w-8 object-cover rounded-full'} src={currentUser.profilePicture} alt="profilePicture" />) :  (<li>Signin</li>)}
                    </Link>
                    <Link to={'/admin'}>
                        <li>Admin</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Header;
