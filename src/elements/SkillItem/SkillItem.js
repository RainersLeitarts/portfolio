import React from 'react'
import './SkillItem.css'

const SkillItem = ({ setImg, active, setActiveSkill, skillName, icon, children }) => {

    const onClickHandler = () => {
        setImg(icon)
        setActiveSkill(skillName)
    }

    return (
        <div onClick={onClickHandler} className={`skill-item ${active === skillName && 'active'}`}>
            <img alt='' className='skill-icon' src={icon} />
            <p className='skill-text'>{children}</p>
        </div>
    )
}

export default SkillItem