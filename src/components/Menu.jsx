import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Menu(props) {

    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setOpen(!open);
        if(!open) {
            menuRef?.current?.focus();
        }
        console.log(document.activeElement);
    }

    const selectMenu = (event) => {
        const message = "Menu Selected " + event.target.innerText;
        alert(message);
        props.selectMenu();
        
    }

    return(
        <>
            <button role='menu' style={{width: '100px', border: 'none'}} onClick={toggleMenu}>Menu</button>
            <div className="menu-container" tabIndex='-1' ref={menuRef}>
                {
                    open && 
                    props.menuList && props.menuList.length > 0 && 
                    props.menuList.map((menu, index) => {
                        return(
                            <ul tabIndex='1' onClick={selectMenu}>
                                <a role='menuitem'>{menu}</a>
                            </ul>
                        );
                    })
                }
            </div>
        </>
    );

}

Menu.defaultProps = {
    menuList: ['Menu1', 'Menu2', 'Menu3'],
    selectMenu: () => {alert('Menu selected')}
}

