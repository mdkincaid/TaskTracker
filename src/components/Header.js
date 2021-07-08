// react
import PropTypes from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    let addButton

    if (location.pathname === '/' && !showAdd) {
        addButton = (
            <button aria-label="show add task" type="button">
                <FaPlus size={28} onClick={onAdd} cursor="pointer" />
            </button>
        )
    } else if (location.pathname === '/' && showAdd) {
        addButton = (
            <button aria-label="hide add task" type="button">
                <FaMinus size={28} onClick={onAdd} cursor="pointer" />
            </button>
        )
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            {addButton}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
}

export default Header
