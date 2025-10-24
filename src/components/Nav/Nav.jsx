export const Nav = () => {
    return <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/category/argentina"}>Argentina</Link>
            </li>
               <li>
                <Link to={"/category/sudamerica"}>Sudamerica</Link>
            </li>
        </ul>
    </nav>
}