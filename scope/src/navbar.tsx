import { Link } from "react-router-dom"
import Logo from './App.tsx';

export default function Navbar() {
    return (
        <nav id='nav' className='m-4'>
            <Logo />
            <Link to="/register"></Link>
            <Link to="/login">เข้าสู่ระบบ</Link>
        </nav>
    );
}