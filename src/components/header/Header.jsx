import HeaderNavigation from "./HeaderNavigation"
import Logo from "./Logo"

const Header = () => {
    return (
        <div className={`fixed bg-blue-500 w-full flex items-center py-4 px-10 mx-auto z-50`}>
            <Logo />
            <HeaderNavigation />
        </div>
    )
}

export default Header