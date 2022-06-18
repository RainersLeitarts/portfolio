import React, { useState } from 'react'
import SkillItem from '../../elements/SkillItem/SkillItem'
import js_icon from '../../Images/js.png'
import reactjs_icon from '../../Images/reactjs.png'
import nodejs_icon from '../../Images/nodejs.png'
import expressjs_icon from '../../Images/expressjs.png'
import mongodb_icon from '../../Images/mongodb.png'
import firebase_icon from '../../Images/firebase.png'
import html5_icon from '../../Images/html5.png'
import css3_icon from '../../Images/css3.png'
import xd_icon from '../../Images/xd.png'
import './Skills.css'

const Skills = () => {
    const [selectedImg, setSelectedImg] = useState(js_icon)
    const [activeSkill, setActiveSkill] = useState('js')

    return (
        <div className='skills-wrapper'>
            <div className='content-wrapper'>
                <div className='skills-col1'>
                    <img className='skill-img' src={selectedImg} />
                </div>
                <div className='skills-col2'>
                    <div className='skills-content-wrapper'>
                        <h1 className='skills-header'>My Favourite tools for design and development</h1>
                        <div className='skills-content'>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='js' icon={js_icon}>JavaScript</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='reactjs' icon={reactjs_icon}>ReactJS</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='nodejs' icon={nodejs_icon}>NodeJS</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='expressjs' icon={expressjs_icon}>ExpressJS</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='mongodb' icon={mongodb_icon}>MongoDB</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='html5' icon={html5_icon}>HTML5</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='css3' icon={css3_icon}>CSS3</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='firebase' icon={firebase_icon}>Firebase</SkillItem>
                            <SkillItem setImg={setSelectedImg} setActiveSkill={setActiveSkill} active={activeSkill} skillName='xd' icon={xd_icon}>Adobe XD</SkillItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills